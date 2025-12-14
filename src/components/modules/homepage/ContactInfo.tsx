import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactData = {
    email: "developer@example.com",
    phone: "01xxxxxxxxx",
    location: "Dhaka, Bangladesh",
  };
  return (
    <div className="bg-[#fafafa] dark:bg-[#11192c] space-y-8 p-8 rounded-xl border border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl leading-8 font-bold text-black dark:text-white">
        Contact Information
      </h1>

      <div className="flex flex-col items-start gap-6">
        {contactData.email && (
          <div className="flex items-center gap-2">
            <div className="p-3 bg-[#9767e45e] dark:bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
              <Mail color="#9767e4" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <h6 className="text-sm leading-5 font-normal text-ring">Email</h6>
              <p className="text-base leading-6 font-semibold text-black dark:text-white">
                {contactData.email}
              </p>
            </div>
          </div>
        )}

        {contactData.phone && (
          <div className="flex items-center gap-2">
            <div className="p-3 bg-[#9767e45e] dark:bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
              <Phone color="#9767e4" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <h6 className="text-sm leading-5 font-normal text-ring">Phone</h6>
              <p className="text-base leading-6 font-semibold text-black dark:text-white">
                {contactData.phone}
              </p>
            </div>
          </div>
        )}
        {contactData.location && (
          <div className="flex items-center gap-2">
            <div className="p-3 bg-[#9767e45e] dark:bg-[#2c2951] rounded-full mr-1 md:mr-4 shrink-0 mt-1">
              <MapPin color="#9767e4" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <h6 className="text-sm leading-5 font-normal text-ring">
                Location
              </h6>
              <p className="text-base leading-6 font-semibold text-black dark:text-white">
                {contactData.location}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
