import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Head from "next/head";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function PageHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
  );
}
export function Main({ children }: PropsWithChildren) {
  return (
    <main className="select-none bg-background bg-[linear-gradient(159deg,#6cefa40f,#1e1e1e)]">
      {children}
    </main>
  );
}
export function Article({ children }: PropsWithChildren) {
  return (
    <article className="mx-auto max-w-xl space-y-6 py-12 px-2 text-typography md:px-0">
      {children}
    </article>
  );
}
export function H1AndDate({ h1, date }: { h1: string; date: string }) {
  return (
    <div className="mb-4 space-y-1">
      <h1 className="text-4xl">{h1}</h1>
      <p className="text-lg">{date}</p>
    </div>
  );
}
export function ImageWithCaption({
  src,
  alt,
  caption,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
}) {
  return (
    <div className="group text-center text-[#dadadaba]">
      <Image
        className="w-full bg-[#6cefa560] opacity-70 transition duration-150 ease-in-out group-hover:opacity-100"
        src={src}
        alt={alt}
        width={1920}
        height={969}
      />
      <p className="mx-auto max-w-sm">{caption}</p>
    </div>
  );
}
export function H2({ h2 }: { h2: string }) {
  return <h2 className="text-2xl">{h2}</h2>;
}
export function H3({ h3 }: { h3: string }) {
  return <h3 className="text-xl">{h3}</h3>;
}
export function StyledLink({
  content,
  href,
}: {
  content: string;
  href: string;
}) {
  return (
    <Link
      className="font-medium text-primary hover:underline"
      href={href}
    >
      {content}
    </Link>
  );
}
export function A({ a, href }: { a: string; href: `https://${string}` }) {
  return (
    <a
      className="font-medium text-primary hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {a}
    </a>
  );
}
export function Section({ children }: PropsWithChildren) {
  return <section className="mb-1 space-y-1">{children}</section>;
}
export function CallToActions({
  siteHref,
  repoHref,
}: {
  siteHref: `https://${string}`;
  repoHref: `https://${string}`;
}) {
  return (
    <Stack
      sx={{ mb: 2 }}
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      <Button
        variant="outlined"
        endIcon={<OpenInNewIcon />}
        sx={{
          color: "#dadada",
          borderColor: "#dadada",
          "&:hover": {
            bgcolor: "#ffffff0f",
            border: "1px solid #6cefa4",
            "& .MuiButton-endIcon": {
              color: "#6cefa4",
            },
          },
        }}
        href={siteHref}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        View Live Site
      </Button>
      <Button
        variant="outlined"
        endIcon={<GitHubIcon />}
        sx={{
          color: "#dadada",
          borderColor: "#dadada",
          "&:hover": {
            bgcolor: "#ffffff0f",
            border: "1px solid #6cefa4",
            "& .MuiButton-endIcon": {
              color: "#6cefa4",
            },
          },
        }}
        href={repoHref}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Visit Repository
      </Button>
    </Stack>
  );
}
export function Return() {
  return (
    <div className="mx-auto mt-4 w-fit">
      <Link href="../">
        <Button
          variant="outlined"
          sx={{
            color: "#dadada",
            borderColor: "#dadada",
            "&:hover": {
              bgcolor: "#ffffff0f",
              border: "1px solid #6cefa4",
              "& .MuiButton-endIcon": {
                color: "#6cefa4",
              },
            },
            mb: 2,
          }}
        >
          Back to projects
        </Button>
      </Link>
    </div>
  );
}
