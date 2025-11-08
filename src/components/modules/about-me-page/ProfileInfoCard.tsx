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

const ProfileInfoCard = () => {
  return (
    <Card className="w-full bg-[#0B111E] border border-gray-800 text-white">
      <CardHeader className="flex flex-col lg:flex-row items-center justify-between pb-2">
        <div className="flex flex-col items-center lg:items-start">
          <CardTitle className="font-inter text-lg font-semibold text-white">
            Profile Information
          </CardTitle>
          <CardDescription className="text-sm text-gray-400 text-center">
            My basic information and contact details
          </CardDescription>
        </div>

        <ProfileEditModal />
      </CardHeader>

      <CardContent className="px-4">
        <div className="flex flex-col lg:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-3 w-full md:w-1/3">
            <ProfileImageUploader />

            <div className="flex flex-col items-center mt-3">
              <h1 className="text-lg font-bold">John Doe</h1>
              <p className="text-sm text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-5 pl-0 pt-4 md:pt-0 md:pl-8">
            <div className="flex items-start gap-3">
              <FileText
                className="text-[#9CA3AF] mt-[2px] shrink-0"
                size={20}
              />
              <div>
                <h2 className="text-base font-medium mb-1">Bio</h2>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                  Passionate developer with 5+ years of experience in building
                  web applications. Specialized in React, Node.js, and cloud
                  technologies.
                </p>
              </div>
            </div>

            <hr className="border-gray-800" />

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
              <div className="flex items-center gap-3">
                <Mail className="text-[#9CA3AF]" size={18} />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#9CA3AF]" size={18} />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm font-medium">+880 1322 456678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#9CA3AF]" size={18} />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium">San Francisco, CA</p>
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
