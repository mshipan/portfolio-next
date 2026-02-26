export interface IApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface IBlogGrowth {
  month: string;
  count: number;
}

export interface IBlogsStats {
  total: number;
  published: number;
  drafts: number;
  monthlyTrend: Record<string, number>;
  blogGrowth: IBlogGrowth[];
}

export interface ITechStackCount {
  tech: string;
  count: number;
}

export interface IProjectsStats {
  total: number;
  featured: number;
  nonFeatured: number;
  techStackCount: ITechStackCount[];
}

export interface IAboutStats {
  totalSkills: number;
  totalExperiences: number;
  totalEducations: number;
}

export interface IDashboardStats {
  blogs: IBlogsStats;
  projects: IProjectsStats;
  about: IAboutStats;
}

export interface IExperienceTimeline {
  company: string;
  start: string;
  end: string;
  duration: number;
}

export interface ILatestBlog {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  published: boolean;
  coverUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ILatestProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  featured: boolean;
  repoUrl: string;
  liveUrl: string;
  thumbnail: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IDashboardOverview {
  stats: IDashboardStats;
  experienceTimeline: IExperienceTimeline[];
  latestBlogs: ILatestBlog[];
  latestProjects: ILatestProject[];
}
