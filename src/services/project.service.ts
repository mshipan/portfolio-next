import { fetcher } from "@/lib/fetcher";
import { IApiResponse } from "@/redux/rtkTypes/api.type";
import { Project } from "@/redux/rtkTypes/project.type";

export const getProjects = async (): Promise<IApiResponse<Project[]>> => {
  return fetcher<IApiResponse<Project[]>>("/project");
};
