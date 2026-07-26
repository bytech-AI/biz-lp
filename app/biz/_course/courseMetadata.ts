import type { Metadata } from "next";

type CourseMetadataInput = {
  title: string;
  description: string;
  socialDescription: string;
  path: `/${string}`;
};

const OGP_IMAGE = {
  url: "/biz/assets/img/common/ogp-v3.jpg",
  width: 1200,
  height: 695,
  alt: "バイテック法人AI研修｜業務の自動化を当たり前にする個別コンサル型AI研修",
};

export function buildCourseMetadata({
  title,
  description,
  socialDescription,
  path,
}: CourseMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "バイテック法人AI研修",
      title,
      description: socialDescription,
      locale: "ja_JP",
      images: [OGP_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: socialDescription,
      images: [OGP_IMAGE.url],
    },
  };
}
