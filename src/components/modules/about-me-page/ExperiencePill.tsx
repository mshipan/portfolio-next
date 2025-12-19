import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditExperienceModal from "@/components/shared/modals/EditExperienceModal";
import { Button } from "@/components/ui/button";
import { MoveRight, Trash2 } from "lucide-react";

interface ExperiencePillProps {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ExperiencePill = ({
  title,
  company,
  startDate,
  endDate,
  description,
  onEdit,
  onDelete,
}: ExperiencePillProps) => {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start sm:justify-between bg-[#fdfdfd] dark:bg-[#090C11] p-4 sm:p-6 rounded-xl w-full transition-all duration-300 ease-in-out border border-gray-300 dark:border-gray-800 hover:border-[#9767E4]">
      <div className="flex-1">
        <h1 className="text-base sm:text-lg leading-7 font-semibold text-black dark:text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base leading-5 text-[#9767E4]">
          {company}
        </p>
        <p className="text-xs sm:text-sm leading-4 text-foreground inline-flex items-center gap-1">
          {startDate} <MoveRight className="w-3" />
          {endDate ? endDate : "Present"}
        </p>
        <p className="text-sm sm:text-base leading-6 text-muted-foreground mt-1">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 sm:mt-0">
        <EditExperienceModal />

        <DeleteConfirmModal
          title="Delete Experience"
          description="Are you sure you want to delete this experience? This action cannot be undone."
          onDelete={() => console.log("Experience deleted")}
          trigger={
            <Button
              variant="ghost"
              onClick={onDelete}
              className="transition-all duration-300 ease-linear cursor-pointer hover:bg-red-400 hover:text-red-700 p-2.5 sm:p-3 rounded-xl"
            >
              <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ExperiencePill;
