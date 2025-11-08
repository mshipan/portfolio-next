"use client";
import { Input } from "@/components/ui/input";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ProfileImageUploader = () => {
  const [image, setImage] = useState("/images/user.png");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
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
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
          <ImageUp size={26} className="text-white" />
        </div>
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
