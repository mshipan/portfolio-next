import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-[#11192c] space-y-8 p-8 rounded-xl border border-gray-700">
      <h1 className="text-2xl leading-8 font-bold">Contact Information</h1>

      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
            <Mail color="#9767e4" />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <h6 className="text-sm leading-5 font-normal text-ring">Email</h6>
            <p className="text-base leading-6 font-semibold">
              developer@example.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-3 bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
            <Phone color="#9767e4" />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <h6 className="text-sm leading-5 font-normal text-ring">Phone</h6>
            <p className="text-base leading-6 font-semibold">01xxxxxxxxx</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-3 bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
            <MapPin color="#9767e4" />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <h6 className="text-sm leading-5 font-normal text-ring">
              Location
            </h6>
            <p className="text-base leading-6 font-semibold">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
