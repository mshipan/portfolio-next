export interface IExperience {
  id: string;
  jobTitle: string;
  company: string;
  startYear: string;
  endYear?: string;
  description?: string;
  achievements?: string[];
}

export interface ICreateExperiencePayload {
  jobTitle: string;
  company: string;
  startYear: string;
  endYear?: string;
  description?: string;
}

export interface ICreateExperienceSuccess<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ICreateExperienceError {
  success: false;
  message: string;
}

export interface IGetExperienceResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: IExperience[];
}

export interface ExperienceQueryParams {
  search?: string;
  page?: number;
  limit?: number;
}
