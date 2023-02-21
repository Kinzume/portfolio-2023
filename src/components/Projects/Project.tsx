import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Settings } from "react-slick/index";

type ProjectProps = {
  images: StaticImageData[];
  title: string;
  skills: string[] | null;
  description: string;
  date: string;
  slug: string;
};
export function Project({
  images,
  title,
  skills,
  description,
  date,
  slug,
}: ProjectProps) {
  return (
    <div className="group max-w-[32rem] select-none">
      <Carousel images={images} />
      <Content
        title={title}
        skills={skills}
        description={description}
        date={date}
        slug={slug}
      />
    </div>
  );
}

type SmallProjectProps = {
  src: StaticImageData;
  title: string;
  skills: string[] | null;
  date: string;
  href: string;
};
export function SmallProject({
  src,
  title,
  skills,
  date,
  href,
}: SmallProjectProps) {
  return (
    <div className="group max-w-[32rem] select-none">
      <Item src={src} />
      <Content
        title={title}
        skills={skills}
        date={date}
        href={href}
      />
    </div>
  );
}

type ContentProps = {
  title: string;
  skills: string[] | null;
  description?: string;
  date: string;
  slug?: string;
  href?: string;
};
function Content({
  title,
  skills,
  description,
  date,
  slug,
  href,
}: ContentProps) {
  return (
    <Link
      href={`${slug ? `projects/${slug}` : href ? `${href}` : `/`}`}
      target={href && "_blank"}
      rel={href && "noopener noreferrer"}
    >
      <div className="relative z-30 cursor-pointer bg-[#5e5e5e5c] p-2 text-xs text-typography transition duration-150 ease-in-out group-hover:bg-[#8181815c] md:text-sm lg:text-base">
        <p className="mb-2 text-lg leading-tight lg:mb-3 lg:text-2xl">
          {title}
        </p>
        <div className="mb-2 flex space-x-2">
          {skills?.map((skill) => (
            <Chip
              key={skill}
              skill={skill}
            />
          ))}
        </div>
        <p className="mb-5">{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            {slug && (
              <>
                <p className="transition duration-150 ease-in-out group-hover:text-primary">
                  Read More
                </p>
                <Arrow />
              </>
            )}
            {href && (
              <>
                <p className="transition duration-150 ease-in-out group-hover:text-primary">
                  Visit Site
                </p>
                <OpenInNewIcon className="transition duration-150 ease-in-out group-hover:text-primary" />
              </>
            )}
          </div>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
function Chip({ skill }: { skill: string }) {
  return (
    <p className="mb-2 w-fit rounded-xl bg-[#ffffff] px-2 font-medium text-[#1e1e1e]">
      {skill}
    </p>
  );
}
function Arrow() {
  return (
    <svg
      className="fill-[#dadada] transition duration-150 ease-in-out group-hover:fill-[#6cefa4]"
      width="20px"
      height="20px"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z" />
    </svg>
  );
}

const initialState = {
  currentSlide: 0,
  nextSlide: 0,
};
function Carousel({ images }: { images: StaticImageData[] }) {
  const sliderRef = useRef<Slider>(null);
  const [active, setActive] = useState(initialState);
  const settings: Settings = {
    arrows: false,
    autoplay: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      const newState = {
        currentSlide: current,
        nextSlide: next,
      };
      setActive(newState);
    },
  };
  return (
    <Paper
      sx={{ position: "relative", borderRadius: 0 }}
      elevation={0}
    >
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {images?.map((src, index) => (
          <Item
            key={index}
            src={src}
          />
        ))}
      </Slider>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <IconButton
          aria-label="previous-slide"
          sx={{ color: "#ffffffcf" }}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          aria-label="next-slide"
          sx={{ color: "#ffffffcf" }}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
function Item({ src }: { src: StaticImageData }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        className="relative z-10 h-full"
        src={src}
        alt={"Preview"}
        width={1920}
        height={969}
      />
      <div className="absolute inset-0 z-20 h-full w-full bg-[#29292975] transition duration-150 ease-in-out group-hover:bg-[#3d3d3d75]"></div>
    </div>
  );
}
