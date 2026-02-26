export interface ISkill {
  id: string;
  name: string;
  category?: string | null;
  photo?: string | null;
}

export interface ICreateSkillPayload {
  name: string;
  category?: string | null;
  photo?: string | null;
}

export interface ICreateSkillSuccess<T> {
  statusCode: number;
  success: true;
  message: string;
  data: T;
}

export interface ICreateSkillError {
  success: false;
  message: string;
}

export interface IGetSkillResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: ISkill[];
}

export interface SkillQueryParams {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}

export interface IGetSingleSkillResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: ISkill;
}
