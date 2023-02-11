import { Button, Card, Container, Divider, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Box } from "./Box";
import ScrollButton from "./ScrollButton";
import SocialIconBar from "./SocialIconBar";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container lg id="#" css={{ position: "relative" }}>
      <Grid.Container
        css={{ minHeight: "91vh" }}
        gap={2}
        alignItems="center"
        justify="center"
      >
        <Grid xs={12} md={6}>
          <Box>
            <Text h2 css={{ mt: 0, letterSpacing: "$normal" }}>
              {"MERN stack dev, UI/UX designer, CS student, Football fan"}
            </Text>
            <Text
              color={"$"}
              p
              css={{ mt: "$1", letterSpacing: "$wide", opacity: 0.8 }}
            >
              {`I'am Aung Myat Thu, a MERN stack web developer from Myawaddy, Kayin State, Myanmar. I am also a CS student currently studying in Yangon. `}
            </Text>

            <SocialIconBar />
            <Link style={{}} href="#about">
              <Button css={{mt:"$10"}} auto color="success" flat>
                {`Let's see more about me`}{" "}
                <BsChevronDoubleDown style={{ marginLeft: 10 }} size={25} />
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          css={{
            justifyContent: "center",
            marginTop: 30,
            "@lg": {
              marginTop: 0,
            },
          }}
          xs={12}
          md={6}
        >
          <Image
            src={"/welcome.svg"}
            alt="product"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "70%",
              height: "auto",
              borderRadius: 20,
              minWidth: "300px",
            }}
          />
        </Grid>
      </Grid.Container>
      <Divider/>
    </Container>
  );
};

export default Home;
