import { Button, Container, Divider, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Box } from "./Box";
import EducationTable from "./EducationTable";

type Props = {};

const About = (props: Props) => {
  return (
    <Container lg id="about" css={{ position: "relative" }}>
      <Grid.Container
        css={{ minHeight: "91vh" }}
        gap={2}
        alignItems="center"
        justify="center"
      >
        
        <Grid
          css={{
            justifyContent: "center",
            marginTop: 30,
            "@lg": {
              marginTop: 0,
            },
          }}
          xs={12}
          md={5}
        >
          <Image
            src={"/pf.jpg"}
            alt="product"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "50%",
              height: "auto",
              borderRadius: 20,
              minWidth: "300px",
            }}
          />
        </Grid>
        <Grid css={{"@xs":{
          p:0
        }}} xs={12} md={7}>
          <Box css={{width:"100%"}}>
            <Text h2 css={{ mt: 0, letterSpacing: "$normal" }}>
              {"Who am I?"}
            </Text>
            <Text
              color={"$"}
              p
              css={{ mt: "$1", letterSpacing: "$normal", opacity: 0.8 }}
            >
              {`I'm a Front-End Developer from Myanmar. I am freelancer , CS student and football lover. I love creating mobile and web UI. I also love working with backend framework such as Node.js.`}
            </Text>

            <Text h4 css={{ mt: "$10",pb:"$5", letterSpacing: "$normal" }}>
              {"My Education"}
            </Text>
            
            <EducationTable/>

            {/* <SocialIconBar /> */}
            <Link style={{}} href="#projects">
              <Button css={{ mt: "$10" }} auto color="success" flat>
                {`Let's see my projects`}{" "}
                <BsChevronDoubleDown style={{ marginLeft: 10 }} size={25} />
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid.Container>
      <Divider/>
    </Container>
  );
};

export default About;
