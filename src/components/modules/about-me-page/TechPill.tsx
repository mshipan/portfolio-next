import DeleteConfirmModal from "@/components/shared/modals/DeleteConfirmModal";
import EditSkillModal from "@/components/shared/modals/EditSkillModal";
import Image from "next/image";

interface TechPillProps {
  name: string;
  image: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const TechPill = ({ name, image, onEdit, onDelete }: TechPillProps) => {
  return (
    <div
      className="
        group flex items-center justify-between gap-6 bg-[#0D121A] 
        p-3 rounded-full
        transition-all duration-300 ease-in-out
        border border-transparent hover:border-[#47cfeb] hover:shadow-md hover:shadow-[#47cfeb]
      "
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <Image
            src={image}
            alt={`${name} logo`}
            fill
            className="absolute top-0 object-contain"
          />
        </div>
        <h1 className="text-sm leading-5 font-medium text-white">{name}</h1>
      </div>

      <div
        className="
          flex items-center gap-3 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
        "
      >
        <EditSkillModal />

        <DeleteConfirmModal
          title="Delete Skill"
          description="Are you sure you want to delete this skill? This action cannot be undone."
          onDelete={() => console.log("Skill deleted")}
        />
      </div>
    </div>
  );
};

export default TechPill;
