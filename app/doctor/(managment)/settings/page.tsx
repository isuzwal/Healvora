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
import Link from "next/link";

export default function Page() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

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
            Keep your public details accurate .
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
            className={`flex  items-center w-full lg:w-auto justify-center gap-1 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={!edit}
          >
            {loading ? (
              <>
                Updating profile <Loader className="siz-3.5 animate-spin" />
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
                  value={email || admin?.email}
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
