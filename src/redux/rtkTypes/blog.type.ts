export interface IBlogPayload {
  id: string;
  authorId: string;
  title: string;
  slug: string;
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
