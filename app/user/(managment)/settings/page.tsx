"use client";

import * as React from "react";
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

export default function Page() {
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);
  const [profileImageUrl, setProfileImageUrl] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    return () => {
      if (profileImageUrl) {
        URL.revokeObjectURL(profileImageUrl);
      }
    };
  }, [profileImageUrl]);

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      setProfileImageUrl(null);
      return;
    }

    const nextUrl = URL.createObjectURL(file);
    setProfileImageUrl((currentUrl) => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
      return nextUrl;
    });
  };

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
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
                onClick={() => setIsEditingProfile(true)}
              >
                Edit profile
              </Button>
              <Button
                className="w-full lg:w-auto text-white cursor-pointer"
                disabled={!isEditingProfile}
                onClick={() => setIsEditingProfile(false)}
              >
                Update profile
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {profileImageUrl ? (
                  <div className="h-20 w-20 overflow-hidden rounded-full border">
                    <Image
                      src={profileImageUrl}
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
                    disabled={!isEditingProfile}
                    onChange={handleProfileImageChange}
                    className=" cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload a square image (JPG or PNG), max 2MB.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    placeholder="Ava"
                    disabled={!isEditingProfile}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    placeholder="Johnson"
                    disabled={!isEditingProfile}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ava@healvora.com"
                    disabled={!isEditingProfile}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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
