import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditEducationModal from "@/components/shared/modals/EditEducationModal";
import { Button } from "@/components/ui/button";
import { useDeleteEducationMutation } from "@/redux/features/education/education.api";
import { IEducation } from "@/redux/rtkTypes/education.type";
import { MoveRight, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface EducationPillProps {
  education: IEducation;
}

const EducationPill = ({ education }: EducationPillProps) => {
  const { id, degree, institution, startYear, endYear, description } =
    education;

  const [deleteEducation, { isLoading }] = useDeleteEducationMutation();

  const handleDelete = async () => {
    if (!education.id) return;

    const toastId = toast.loading("Deleting education...");

    try {
      await deleteEducation(id).unwrap();
      toast.success("Education deleted successfully.", {
        id: toastId,
      });
    } catch (error: any) {
      toast.error(error?.data?.message || "Delete failed", {
        id: toastId,
      });
    }
  };
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start sm:justify-between bg-[#fdfdfd] dark:bg-[#090C11] p-4 sm:p-6 rounded-xl w-full transition-all duration-300 ease-in-out border border-gray-300 dark:border-gray-800 hover:border-[#9767E4]">
      <div className="flex-1">
        <h1 className="text-base sm:text-lg leading-7 font-semibold text-black dark:text-white">
          {degree}
        </h1>
        <p className="text-sm sm:text-base leading-5 text-[#9767E4]">
          {institution}
        </p>
        <p className="text-xs sm:text-sm leading-4 text-foreground inline-flex items-center gap-1">
          {startYear} <MoveRight className="w-3" />
          {endYear ? endYear : "Present"}
        </p>
        <p className="text-sm sm:text-base leading-6 text-muted-foreground mt-1">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 sm:mt-0">
        <EditEducationModal education={education} />

        <DeleteConfirmModal
          title="Delete Education"
          description="Are you sure you want to delete this education? This action cannot be undone."
          onDelete={handleDelete}
          trigger={
            <Button
              variant="ghost"
              disabled={isLoading}
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

export default EducationPill;
