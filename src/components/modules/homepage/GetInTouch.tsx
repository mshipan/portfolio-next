import GetInTouchForm from "@/components/forms/GetInTouchForm";
import HeaderSection from "@/components/shared/HeaderSection";

const GetInTouch = () => {
  return (
    <div className="px-6 py-20 sm:py-28 md:py-36">
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
        <HeaderSection
          titleFirstPart="get in"
          titleSecondPart="touch"
          subTitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div>
          <GetInTouchForm />
          {/* Others div and Grid layout goes here for contact form */}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
