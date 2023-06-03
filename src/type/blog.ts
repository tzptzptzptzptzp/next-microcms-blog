export type Blog = {
  id: string;
  title: string;
  thumbnail: { width: number; height: number; url: string };
  category: [string];
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
