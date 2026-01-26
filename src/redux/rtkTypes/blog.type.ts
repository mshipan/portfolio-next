export interface IBlogPayload {
  id: string;
  authorId: string;
  title: string;
  // slug: string;
  summary: string;
  content: string;
  published: boolean;
  coverUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateBlogSuccess<T> {
  statusCode: number;
  success: true;
  message: string;
  data: T;
}

export interface ICreateBlogError {
  success: false;
  message: string;
}

export interface ICreateBLogInput {
  title: string;
  summary: string;
  content: string;
  published?: boolean;
}

export interface ICreateBlogArgs {
  data: ICreateBLogInput;
  file?: File;
}

export interface IAuthor {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export interface IGetBlog {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  published: boolean;
  coverUrl: string;
  createdAt: string;
  updatedAt: string;
  author: IAuthor;
}

export interface IGetBlogMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface IGetBlogResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: IGetBlogMeta;
  data: IGetBlog[];
}

export interface IGetBlogParams {
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
  published?: boolean | string;
}

export interface IGetSingleBlogResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IGetBlog;
}
