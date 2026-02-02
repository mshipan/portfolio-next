"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Clock10, ExternalLink, Eye, Github, Star } from "lucide-react";

import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "@/redux/features/project/project.api";

type Props = {
  slug: string;
};

const ViewSingleProjectModal = ({ slug }: Props) => {
  const [open, setOpen] = useState(false);

  const { data: project } = useGetSingleProjectQuery(slug);
  const [editProject, { isLoading }] = useUpdateProjectMutation();

  const techStack = project?.techStack || [];
  const features = project?.features || [];

  const handlePublish = async () => {
    if (!project?.slug) return;

    const toastId = toast.loading("Publishing project...");

    try {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          published: true,
        }),
      );

      await editProject({
        slug: project.slug,
        formData,
      }).unwrap();

      setOpen(false);
      toast.success("Project published successfully", { id: toastId });
    } catch (error: any) {
      toast.error(error?.message || "Failed to publish project", {
        id: toastId,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all duration-300 ease-linear cursor-pointer p-2.5 sm:p-3 rounded-xl hover:bg-[#47cfeb]"
        >
          <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:cursor-pointer text-black dark:text-white border-gray-800 w-[95vw] max-w-[95vw] sm:max-w-lg md:max-w-2xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto space-y-3">
        <DialogHeader className="pb-0">
          <DialogTitle className="text-base sm:text-lg font-thin">
            View Project
          </DialogTitle>
        </DialogHeader>

        <div className="w-full flex flex-col gap-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Thumbnail */}
            <div className="relative flex-1 aspect-4/3 md:aspect-auto md:h-auto rounded-lg overflow-hidden bg-muted">
              <Image
                src={project?.thumbnail || "/images/user.png"}
                alt="project thumbnail"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Details */}
            <div className="flex-2 flex justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl line-clamp-2 mb-4">
                  {project?.title}
                </h1>

                {techStack.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {techStack.map((tech: string, index: number) => (
                      <Badge
                        key={index}
                        className="border-[#29A3FE] bg-[#29A3FE] text-white text-xs capitalize"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="flex-none self-start capitalize flex flex-col gap-2">
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 text-white ${
                    project?.published ? "bg-[#9767e4]" : "bg-gray-500"
                  }`}
                >
                  <Clock10 size={14} />
                  {project?.published ? "Published" : "Draft"}
                </Badge>

                {project?.featured && (
                  <Badge className="bg-transparent border-[#9767e4] text-black dark:text-white flex gap-1">
                    <Star size={14} color="#9767e4" /> Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="flex flex-col gap-4">
            {project?.shortDescription && (
              <div className="flex flex-col gap-1">
                <h1 className="text-lg capitalize">Short Description</h1>
                <p className="text-sm text-ring">{project.shortDescription}</p>
              </div>
            )}

            {project?.description && (
              <div className="flex flex-col gap-1">
                <h1 className="text-lg capitalize">Description</h1>
                <p className="text-sm text-ring">{project.description}</p>
              </div>
            )}

            {features.length > 0 && (
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-semibold capitalize">Features</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <Star size={16} className="text-[#9767e4]" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(project?.liveUrl || project?.repoUrl) && (
              <div className="flex flex-wrap gap-3 mt-2">
                {project?.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 bg-[#29A3FE] hover:bg-[#00b4ff] text-white dark:bg-[#1c3f5a] dark:hover:bg-[#1a3350]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Link>
                )}

                {project?.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                  >
                    <Github size={14} />
                    Repository
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Footer Actions */}
        <div className="flex items-center justify-between">
          {!project?.published ? (
            <div className="btn-gradient p-px rounded-md">
              <Button
                type="button"
                className="bg-white hover:bg-white dark:bg-[#0d1322] dark:hover:bg-[#0d1322] flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-md text-black dark:text-white"
                onClick={handlePublish}
                disabled={isLoading}
              >
                {isLoading ? "Publishing..." : "Publish Project"}
              </Button>
            </div>
          ) : (
            <Link
              href={`/projects/${project?.slug}`}
              className="btn-gradient flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer rounded-md"
            >
              View Live Project
            </Link>
          )}

          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="w-full sm:w-auto hover:bg-[#47cfeb] cursor-pointer"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewSingleProjectModal;
