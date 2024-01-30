export const MetaData: MetaDataType = {
  title: "WEBのあれこれ | WEBのGOODな情報を発信中！",
  description:
    "コピペで使えるJavaScriptレシピ(TypeScript対応)やよりサイト制作を行いやすくなるノウハウを発信中",
  canonical: "https://xn--l8j8a4kb.website/",
  og: {
    title: "WEBのあれこれ | WEBのGOODな情報を発信中！",
    description:
      "コピペで使えるJavaScriptレシピ(TypeScript対応)やよりサイト制作を行いやすくなるノウハウを発信中",
    image: "https://xn--l8j8a4kb.website/img/ogp.jpg",
    type: "website",
    siteName: "WEBのあれこれ",
  },
  twitter: { card: "summary_large_image" },
};

type MetaDataType = {
  title: string;
  description: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    image: string;
    type: "website" | "article" | "book" | "profile" | undefined;
    siteName: string;
  };
  twitter: {
    card: "summary_large_image" | "summary" | "player" | "app" | undefined;
  };
};
