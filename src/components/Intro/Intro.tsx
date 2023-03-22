import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Intro() {
  return (
    <section className="mx-auto max-w-xl pt-6">
      <h1 className="sr-only">Introduction</h1>
      <div className="mb-4 select-none space-y-6">
        <p className="text-3xl font-bold text-typography lg:text-4xl">
          {"Hi, I'm Leander!"}
        </p>
        <p className="text-2xl font-bold text-typography lg:text-3xl">
          {"I'm a self-taught web developer based in London."}
        </p>
        <p className="text-lg font-medium text-typography lg:text-xl">
          {"You can find some of my work below or contact me on LinkedIn."}
        </p>
      </div>
      <Contact />
    </section>
  );
}
function Contact() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      <Button
        variant="outlined"
        endIcon={<LinkedInIcon />}
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
        href={"https://www.linkedin.com/in/leanderabaya/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Contact Me
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
        href={"https://github.com/kinzume"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Find My Source Code
      </Button>
    </Stack>
  );
}
