import { Container, Divider, Grid } from "@nextui-org/react";
import React from "react";
import { Box } from "./Box";
import ProjectCard from "./ProjectCard";

type Props = {};

const proArr = [
  {
    demoUrl: "https://next-yote-shin.vercel.app/",
    sourceLink: "https://github.com/Antony4ung/next-yote-shin",
    name: "Yote Shin Suggest",
    imageUrl: "/next-yote-shin.png",
    des:"Movie suggest app .TMDB api, Nextjs and Redux are used.",
  },
  {
    demoUrl: "https://color-generator22.netlify.app",
    sourceLink: "https://github.com/Aung67890/color-generator",
    name: "Color generator",
    imageUrl: "/color.png",
    des:"This is a color generator. THis is coded with values.js.",
  },
  {
    demoUrl: "https://myanmar-2d.vercel.app/",
    sourceLink: "https://github.com/Aung67890/2d",
    name: "2D app",
    imageUrl: "/2d.png",
    des:"This is 2D live api. Api reference from thaistock2d.com .",
  },
  {
    demoUrl: "https://yt-clone-amt.vercel.app",
    sourceLink: "https://github.com/Aung67890/yt-clone",
    name: "YouTube Clone",
    imageUrl: "/youTube.png",
    des:"Youtube clone with Nextjs, Typescript, Redux and Google API",
  },
  {
    demoUrl: "https://crypto-checker-by-amt.netlify.app/",
    sourceLink: "https://github.com/Antony4ung/cryptoChecker",
    name: "Crypto Checker",
    imageUrl: "crypto.png",
    des:"This is a crypto checker website which is used Reactjs and coingecko api.",
  },
  {
    demoUrl: "https://sportwear-frontend.vercel.app/",
    sourceLink: "https://github.com/Antony4ung/sportwearFrontend",
    name: "Aung Sport wear",
    imageUrl: "shop.png",
    des:"This is an mini ecommerce website.",
  },
];

const Projects = (props: Props) => {
  return (
    <>
    <Box
      id="projects"
      css={{
        position: "relative",
        marginRight: "$2",
        marginLeft: "$2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@md": {
          margin: "0 $20",
        },
      }}
    >
      <Grid.Container
        css={{ minHeight: "100vh" }}
        gap={2}
        alignItems="center"
        justify="center"
      >
        {proArr.map((item, index) => (
          <Grid xs={12} md={4} key={index}>
            <ProjectCard
              demoUrl={item.demoUrl}
              sourceLink={item.sourceLink}
              name={item.name}
              imageUrl={item.imageUrl}
              des={item.des}
            />
          </Grid>
        ))}
      </Grid.Container>
      
    </Box>
    <Divider/>
    </>
  );
};

export default Projects;
