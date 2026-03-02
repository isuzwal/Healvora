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
import Image from "next/image";
import { BACKENDAPI } from "@/types/url";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { User } from "@/types";

export default function Page() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const { user } = useUserStore();
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
          user={user}
        />

        <Separator />

        <section className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-semibold">Change password</h2>
              <p className="text-sm text-muted-foreground">
                Protect your account with a strong password.
              </p>
            </div>
            <Button className="w-full lg:w-auto text-white cursor-pointer">
              Update password
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
                  id="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Create new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repeat new password"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use at least 8 characters, including a number and symbol.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

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
  user: User | null;
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
  user,
}: ProfileProps) => {
  const [username, setUsername] = useState("");
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
    const token = localStorage.getItem("user_token");

    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/user/user-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      setUploadImageUrl(data.url); // ← save URL here
      setProfileImageEdit(data.url); // ← optional, if you want to update preview
    } catch (error) {
      console.error(error);
      toast.error(`${error}` || "Fail to upload image");
    }
  };

  // upadate  user profile
  const onSubmit = async () => {
    setLoading(true);

    const token = localStorage.getItem("user_token");

    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/user/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          profileImage: uploadImageUrl,
        }),
      });
      console.log("Data", username, email, uploadImageUrl);
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
      console.error(error);
      toast.error(`${error}` || "Fail to upload image ", {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };
  const imageToShow = previewImage ?? user?.image ?? "/images/first.png";
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
            className={`flex    items-center justify-center gap-2 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
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
              {user?.image ? (
                <div className="h-20 w-20 relative overflow-hidden rounded-full border">
                  <Image
                    src={imageToShow}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                    fill
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-muted text-sm font-medium text-muted-foreground">
                  Avatar
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
                <Label htmlFor="username">First name</Label>
                <Input
                  id="username"
                  placeholder="Ava"
                  value={username || user?.username}
                  disabled={!edit}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ava@healvora.com"
                  value={email || user?.email}
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
