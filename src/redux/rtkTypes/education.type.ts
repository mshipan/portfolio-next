export interface IEducation {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear?: string;
  description?: string;
}

export interface ICreateEducationPayload {
  degree: string;
  institution: string;
  startYear: string;
  endYear?: string;
  description?: string;
}

export interface ICreateEducationSuccess<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ICreateEducationError {
  success: false;
  message: string;
}

export interface IGetEducationResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: IEducation[];
}

export interface EducationQueryParams {
  search?: string;
  page?: number;
  limit?: number;
  sortOrder?: "asc" | "desc";
}
