"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ProfileEditModal = () => {
  const [preview, setPreview] = useState("/images/user.png");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const form = useForm();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
          <SquarePen size={16} />
          Edit Info
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer [&>button]:text-foreground [&>button]:hover:text-primary [&>button]:transition-colors text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-6">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-semibold text-black dark:text-white">
            Edit Profile Information
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-ring bg-white shrink-0">
                  <Image
                    src={preview}
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="w-full">
                <Input
                  ref={fileRef}
                  id="profile-photo"
                  type="file"
                  accept="image/*"
                  onChange={onChange}
                  className="
                    w-full rounded-md border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white
                    file:text-black dark:file:text-white file:mr-4
                  "
                />
                <Label
                  htmlFor="profile-photo"
                  className="block mt-1 text-xs text-muted-foreground"
                >
                  Upload a new profile photo
                </Label>
              </div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Full Name"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Title"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="text-black dark:text-white">
                      Bio
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Your Bio"
                        className="min-h-28 border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Email"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Phone Number"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="text-black dark:text-white">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Address"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                className="w-full sm:w-4/5 btn-gradient cursor-pointer"
              >
                Save Changes
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full sm:w-1/5 cursor-pointer text-black dark:text-white hover:bg-[#47cfeb]"
                >
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditModal;
