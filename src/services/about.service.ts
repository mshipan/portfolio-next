import { fetcher } from "@/lib/fetcher";
import { IGetAbout } from "@/redux/rtkTypes/about.type";
import { IApiResponse } from "@/redux/rtkTypes/api.type";
import { IEducation } from "@/redux/rtkTypes/education.type";
import { IExperience } from "@/redux/rtkTypes/experience.type";
import { ISkill } from "@/redux/rtkTypes/skill.type";

export const getAbout = async (): Promise<IApiResponse<IGetAbout>> => {
  return fetcher<IApiResponse<IGetAbout>>("/about");
};

export const getSkills = async (): Promise<IApiResponse<ISkill[]>> => {
  return fetcher<IApiResponse<ISkill[]>>("/about/skill");
};

export const getExperiences = async (): Promise<
  IApiResponse<IExperience[]>
> => {
  return fetcher<IApiResponse<IExperience[]>>("/about/experience");
};

export const getEducations = async (): Promise<IApiResponse<IEducation[]>> => {
  return fetcher<IApiResponse<IEducation[]>>("/about/education");
};
