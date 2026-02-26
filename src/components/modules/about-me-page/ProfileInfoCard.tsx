"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FileText, Mail, MapPin, Phone } from "lucide-react";
import ProfileImageUploader from "./ProfileImageUploader";
import ProfileEditModal from "@/components/shared/modals/ProfileEditModal";
import { useGetAboutQuery } from "@/redux/features/about/about.api";

const ProfileInfoCard = () => {
  const { data } = useGetAboutQuery();

  const aboutData = data?.data;

  return (
    <Card className="w-full bg-[#fdfdfd] dark:bg-[#0B111E] border border-gray-300 dark:border-gray-800 text-white hover:shadow-xl transition-shadow duration-500 ease-out">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between pb-2">
        <div className="flex flex-col items-center md:items-start">
          <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
            Profile Information
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground text-center">
            My basic information and contact details
          </CardDescription>
        </div>

        <ProfileEditModal />
      </CardHeader>

      <CardContent className="px-4">
        <div className="flex flex-col lg:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-3 w-full md:w-1/3">
            <ProfileImageUploader photo={aboutData?.photo} />

            <div className="flex flex-col items-center mt-3">
              <h1 className="text-lg font-bold text-black dark:text-white">
                {aboutData?.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {aboutData?.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-5 pl-0 pt-4 md:pt-0 md:pl-8">
            <div className="flex items-start gap-3">
              <FileText className="text-[#9CA3AF] mt-0.5 shrink-0" size={20} />
              <div>
                <h2 className="text-base font-medium mb-1 text-black dark:text-white">
                  Bio
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {aboutData?.bio}
                </p>
              </div>
            </div>

            <hr className="border-gray-300 dark:border-gray-800" />

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
              <div className="flex items-center gap-3">
                <Mail className="text-[#9CA3AF] shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-black dark:text-white">
                    {aboutData?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#9CA3AF]" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-black dark:text-white">
                    {aboutData?.phone
                      ? `+880 ${aboutData.phone.slice(1, 5)} ${aboutData.phone.slice(5)}`
                      : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#9CA3AF]" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-black dark:text-white">
                    {aboutData?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInfoCard;
