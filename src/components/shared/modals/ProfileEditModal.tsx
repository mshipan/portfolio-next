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
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateOrUpdateAboutMutation,
  useGetAboutQuery,
} from "@/redux/features/about/about.api";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type AboutFormValues = {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  address?: string;
  photo: File | null;
  github?: string;
  linkedIn?: string;
};

const ProfileEditModal = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { data } = useGetAboutQuery(undefined);

  const form = useForm<AboutFormValues>({
    defaultValues: {
      name: "",
      title: "",
      bio: "",
      email: "",
      phone: "",
      address: "",
      github: "",
      linkedIn: "",
      photo: null,
    },
  });

  const [createOrUpdateAbout, { isLoading }] = useCreateOrUpdateAboutMutation();

  useEffect(() => {
    if (data?.data) {
      const about = data.data;

      form.reset({
        name: about.name ?? "",
        title: about.title ?? "",
        bio: about.bio ?? "",
        email: about.email ?? "",
        phone: about.phone ?? "",
        address: about.address ?? "",
        github: about.github ?? "",
        linkedIn: about.linkedIn ?? "",
        photo: null,
      });

      setPreview(about.photo ?? "/images/user.png");
    }
  }, [data, form]);

  const onSubmit = async () => {
    const values = form.getValues();

    const formData = new FormData();

    const aboutData = {
      name: values.name,
      title: values.title,
      bio: values.bio,
      email: values.email,
      phone: values.phone,
      github: values.github,
      linkedIn: values.linkedIn,
      address: values.address,
    };

    formData.append("data", JSON.stringify(aboutData));

    if (values.photo) {
      formData.append("file", values.photo);
    }

    const toastId = toast.loading("Saving profile information...");

    try {
      await createOrUpdateAbout(formData).unwrap();

      toast.success("Profile updated successfully!", {
        id: toastId,
      });

      form.reset();
      setPreview(null);
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile", {
        id: toastId,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-ring bg-white shrink-0">
                  <Image
                    src={preview || "/images/user.png"}
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black dark:text-white">
                      Upload a new profile photo
                    </FormLabel>
                    <FormControl>
                      <Input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        className="border-gray-300 dark:border-gray-800 file:text-black dark:file:text-white file:mr-4"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          field.onChange(file);

                          if (file) {
                            setPreview(URL.createObjectURL(file));
                          } else {
                            setPreview("/images/user.png");
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
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

              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      Github
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Github Profile URL"
                        className="border-gray-300 dark:border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black dark:text-white">
                      LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your LinkedIn Profile URL"
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
                disabled={isLoading}
                className="w-full sm:w-4/5 btn-gradient cursor-pointer"
              >
                {isLoading ? "Saving..." : "Save Changes"}
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
