export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectPayload {
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  featured?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  published?: boolean;
}

export interface ICreateProjectSuccess<T> {
  statusCode: number;
  success: true;
  message: string;
  data: T;
}

export interface ICreateProjectError {
  success: false;
  message: string;
}

export interface ProjectQueryParams {
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  limit?: number;
  page?: number;
  featured?: boolean | string;
}

export interface IGetProjectResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Project[];
}

export interface ICreateProjectError {
  success: false;
  message: string;
}

export interface IGetSingleProjectResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: Project;
}
