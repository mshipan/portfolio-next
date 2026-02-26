"use client";
import { Input } from "@/components/ui/input";
import { useUploadAboutPhotoMutation } from "@/redux/features/about/about.api";
import { ImageUp, Loader2 } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface Props {
  photo?: string | null;
}

const ProfileImageUploader = ({ photo }: Props) => {
  const [image, setImage] = useState<string>("/images/user.png");
  const [uploadPhoto, { isLoading }] = useUploadAboutPhotoMutation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (photo) {
      setImage(photo);
    } else {
      setImage("/images/user.png");
    }
  }, [photo]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2MB.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);

    const formData = new FormData();
    formData.append("file", file);

    const toastId = toast.loading("Uploading profile photo...");

    try {
      await uploadPhoto(formData).unwrap();

      toast.success("Profile photo updated successfully!", { id: toastId });
    } catch (error: any) {
      toast.error(error.message || "Failed to upload profile photo.", {
        id: toastId,
      });

      setImage(photo || "/images/user.png");
    }
  };

  const handleClick = () => {
    if (!isLoading) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="group relative w-32 h-32 rounded-full border-4 border-ring overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt="Profile image"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div
        onClick={handleClick}
        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {isLoading ? (
          <Loader2 className="animate-spin text-white" size={28} />
        ) : (
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <ImageUp size={26} className="text-white" />
          </div>
        )}
      </div>

      <Input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfileImageUploader;
