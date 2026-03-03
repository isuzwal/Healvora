"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { BACKENDAPI } from "@/types/url";
import { toast } from "sonner";
import { Loader } from "lucide-react";

import { Admin } from "@/types";
import { useAdminStore } from "@/store/useAdminStore";

export default function Page() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const { admin } = useAdminStore();
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <ProfileSection
          edit={isEditingProfile}
          setEdit={setIsEditingProfile}
          profileImage={profileImageUrl}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          uploadImageUrl={uploadedImageUrl}
          setUploadImageUrl={setUploadedImageUrl}
          setProfileImageEdit={setProfileImageUrl}
          loading={loading}
          setLoading={setLoading}
          admin={admin}
        />

        <Separator />

        <PasswordChange
          newPassword={newPassword}
          currentPassword={currentPassword}
          setNewPassword={setNewPassword}
          setCurrentPassword={setCurrentPassword}
          loading={loading}
          setLoading={setLoading}
        />
        <Separator />

        <DeleteAccount />
      </div>
    </div>
  );
}

interface ProfileProps {
  edit: boolean; // Edit Profile  true for false
  setEdit: (value: boolean) => void; // store the sate
  previewImage: string | null; //  previewImageUrl
  setPreviewImage: (value: string | null) => void; // store for  previewImage
  setUploadImageUrl: (value: string) => void;
  uploadImageUrl: string | null;
  profileImage: string | null; // for the backend profileImageurl
  setProfileImageEdit: (value: string | null) => void; // store profileImage from backend
  loading: boolean;
  setLoading: (value: boolean) => void;
  admin: Admin | null;
}

const ProfileSection = ({
  edit,
  setEdit,
  profileImage,
  setProfileImageEdit,
  uploadImageUrl,
  setUploadImageUrl,
  previewImage,
  setPreviewImage,
  loading,
  setLoading,
  admin,
}: ProfileProps) => {
  const [adminName, setAdminame] = useState("");
  const [email, setEmail] = useState("");

  // Handle preview image url and send to backend get url  back

  const handleProfileImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
    await UplaodFile(file);
  };
  // api call here for image url from the backend
  const UplaodFile = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    const token = localStorage.getItem("admin_token");

    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/admin/admin-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      setUploadImageUrl(data.url);
      setProfileImageEdit(data.url);
    } catch (error) {
      toast.error(`${error}` || "Fail to upload image");
    }
  };

  // upadate  user profile
  const onSubmit = async () => {
    setLoading(true);

    const token = localStorage.getItem("admin_token");
    if (!adminName.trim() && !email) {
      toast.error("Form can't be empty");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `${BACKENDAPI}/api/v1/admin/update-admin-profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            adminName,
            email,
            admin_image: uploadImageUrl,
          }),
        },
      );

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Failed to update profile", {
          className: "bg-red-600 text-white border-none",
        });
      } else {
        toast.success("Profile updated successfully!", {
          className: "bg-green-600 text-white border-none",
        });
        setProfileImageEdit(result.profileImage || null);
      }
    } catch (error) {
      toast.error(`${error}` || "Fail to upload image ", {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };
  const imageToShow = previewImage ?? admin?.admin_image ?? "/images/first.png";
  return (
    <section className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <div className="space-y-2 ">
        <div>
          <h2 className="text-lg font-semibold">Profile information</h2>
          <p className="text-sm text-muted-foreground">
            Keep your public details accurate for appointments.
          </p>
        </div>
        <div className="flex flex-col gap-1 lg:flex-row">
          <Button
            variant="outline"
            className="w-full lg:w-auto cursor-pointer"
            onClick={() => setEdit(true)}
          >
            Edit profile
          </Button>
          <Button
            type="submit"
            form="profile-form"
            className={`flex  items-center w-full lg:w-auto justify-center gap-1 z-10 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={!edit}
          >
            {loading ? (
              <>
                Updating your profile{" "}
                <Loader className="siz-3.5 animate-spin" />
              </>
            ) : (
              "Update profile"
            )}
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile details</CardTitle>
          <CardDescription>
            Update your name, email, and contact details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <form
            id="profile-form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="space-y-5"
          >
            {/* Profile Image + Upload */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {admin?.admin_image ? (
                <div className="h-20 w-20 relative overflow-hidden rounded-full border">
                  <Image
                    src={imageToShow}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                    fill
                  />
                </div>
              ) : (
                <div className="h-20 w-20 relative overflow-hidden rounded-full border">
                  <Image
                    src={
                      profileImage && admin?.admin_image
                        ? admin?.admin_image
                        : "/images/first.png"
                    }
                    alt="Profile preview"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    fill
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="profileImage">Profile image</Label>
                <Input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  disabled={!edit}
                  onChange={handleProfileImageChange}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Upload a square image (JPG or PNG), max 3MB.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="adminname">First name</Label>
                <Input
                  id="adminname"
                  placeholder="Ava"
                  value={adminName || admin?.adminName}
                  disabled={!edit}
                  onChange={(e) => setAdminame(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ava@healvora.com"
                  value={email || admin?.eamil}
                  disabled={!edit}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

interface PasswordProps {
  currentPassword: string;
  setCurrentPassword: (value: string) => void;
  newPassword: string;
  setNewPassword: (value: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}
// password change
const PasswordChange = ({
  currentPassword,
  newPassword,
  setCurrentPassword,
  setNewPassword,
  loading,
  setLoading,
}: PasswordProps) => {
  const handlePasswordChange = async () => {
    setLoading(true);

    const token = localStorage.getItem("user_token");

    try {
      const response = await fetch(
        `${BACKENDAPI}/api/v1/user/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: currentPassword,
            newPassword: newPassword,
          }),
        },
      );

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Failed change the password", {
          className: "bg-red-600 text-white border-none",
        });
      } else {
        toast.success("Password change  successfully!", {
          className: "bg-green-600 text-white border-none",
        });
      }
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error(`${error}` || "Fiail to change password ", {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold">Change password</h2>
          <p className="text-sm text-muted-foreground">
            Protect your account with a strong password.
          </p>
        </div>
        <Button
          onClick={handlePasswordChange}
          className={`flex    items-center justify-center gap-2 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {loading ? (
            <>
              Updating password
              <Loader className="size-3.5 animate-spin" />
            </>
          ) : (
            "Update password"
          )}
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Password update</CardTitle>
          <CardDescription>
            Choose a new password you have not used before.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current password</Label>
            <Input
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              id="currentPassword"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New password</Label>
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                id="newPassword"
                type="password"
                placeholder="Create new password"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Use at least 8 characters, including a number and symbol.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
// delete account section
const DeleteAccount = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  const handleDeleteAccount = async () => {
    if (confirmText !== "DELETE") {
      toast.error('Please type "DELETE" to confirm', {
        className: "bg-red-600 text-white border-none",
      });
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("user_token");

    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/admin/delete-admin`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Failed to delete account", {
          className: "bg-red-600 text-white border-none",
        });
      } else {
        toast.success("Account deleted successfully!", {
          className: "bg-green-600 text-white border-none",
        });

        localStorage.removeItem("user_token");
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}` || "Failed to delete account", {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
      setOpen(false);
      setConfirmText("");
    }
  };

  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold text-destructive">
              Danger zone
            </h2>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone.
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="destructive"
            className="w-full lg:w-auto text-white cursor-pointer"
          >
            Delete account
          </Button>
        </div>
        <Card className="border-destructive/40">
          <CardHeader>
            <CardTitle>Delete your account</CardTitle>
            <CardDescription>
              Permanently remove your profile, bookings, and saved records.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Before deleting, download any invoices or medical documents you
              need to keep.
            </p>
            <div className="rounded-lg border border-dashed border-destructive/40 bg-destructive/5 p-4 text-sm">
              You will lose access to appointments, messages, and personal
              history.
            </div>
          </CardContent>
        </Card>
      </section>

      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-destructive">
              Delete Account Confirmation
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove all your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="confirm">
                Type <span className="font-bold text-destructive">DELETE</span>{" "}
                to confirm
              </Label>
              <Input
                id="confirm"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="Type DELETE here"
                className="border-destructive/40 focus:border-destructive"
              />
            </div>
            <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-sm">
              <p className="font-semibold text-destructive mb-1">
                You will lose:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>All your appointments and bookings</li>
                <li>Medical history and records</li>
                <li>Messages and communications</li>
                <li>Profile and personal information</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false);
                setConfirmText("");
              }}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={loading || confirmText !== "DELETE"}
              className="text-white"
            >
              {loading ? (
                <>
                  Deleting...
                  <Loader className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Delete Account"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
