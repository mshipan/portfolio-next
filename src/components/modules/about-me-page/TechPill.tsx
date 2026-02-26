import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditSkillModal from "@/components/shared/modals/EditSkillModal";
import { useDeleteSkillMutation } from "@/redux/features/skill/skill.api";
import { ISkill } from "@/redux/rtkTypes/skill.type";
import Image from "next/image";
import { toast } from "sonner";

interface TechPillProps {
  skill: ISkill;
}

const TechPill = ({ skill }: TechPillProps) => {
  const [deleteSkill, { isLoading }] = useDeleteSkillMutation();

  const handleDelete = async () => {
    if (!skill.id) return;

    const toastId = toast.loading("Deleting skill...");

    try {
      await deleteSkill(skill.id).unwrap();
      toast.success("Skill deleted successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to delete skill.", { id: toastId });
    }
  };
  return (
    <div
      className="
        group flex items-center justify-between gap-6 bg-[#f7f1f1] dark:bg-[#0D121A] 
        p-3 rounded-full
        transition-all duration-300 ease-in-out
        border border-transparent hover:border-[#47cfeb] hover:shadow-md hover:shadow-[#47cfeb]
      "
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          {skill?.photo ? (
            <Image
              src={skill?.photo}
              alt={`${skill?.name} logo`}
              fill
              className="absolute top-0 object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600">
              N/A
            </div>
          )}
        </div>
        <h1 className="text-sm leading-5 font-medium text-black dark:text-white">
          {skill?.name}
        </h1>
      </div>

      <div
        className="
          flex items-center gap-3 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
        "
      >
        <EditSkillModal skill={skill} />

        <DeleteConfirmModal
          title="Delete Skill"
          description="Are you sure you want to delete this skill? This action cannot be undone."
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default TechPill;
