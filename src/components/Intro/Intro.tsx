import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Intro() {
  return (
    <section className="mx-auto max-w-md">
      <div className="mb-4 select-none space-y-6">
        <h1 className="sr-only">Introduction</h1>
        <p className="text-xl font-bold text-typography">
          {"Hi, I'm Leander! I'm a self-taught web developer based in London."}
        </p>
        <p className="font-medium text-typography">
          {
            "I'm currently looking for my first developer job. You can find some of my work below or contact me on LinkedIn."
          }
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
