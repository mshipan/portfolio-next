import { IEducation } from "./education.type";
import { IExperience } from "./experience.type";
import { ISkill } from "./skill.type";

export interface IAboutPayload {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  github?: string | null;
  linkedIn?: string | null;
}

export interface ICreateAboutSuccess<T> {
  statusCode: number;
  success: true;
  message: string;
  data: T;
}

export interface ICreateAboutError {
  success: false;
  message: string;
}

export interface IGetAbout {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  github?: string | null;
  linkedIn?: string | null;
  photo: string | null;
  skills?: ISkill[];
  experiences?: IExperience[];
  educations?: IEducation[];
}

export interface IGetAboutResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IGetAbout;
}
