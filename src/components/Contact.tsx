import { Container, Divider, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import SocialIconBar from "./SocialIconBar";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
    <Divider/>
      <Container
      lg
      css={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center"
      }}
      id="contact"
    >
      <Image
        src={"/welcome.svg"}
        alt="product"
        width={150}
        height={150}
        style={{}}
      />
      <Text
        color={"$"}
        h4
        css={{ mt: "$5", letterSpacing: "$normal" }}
      >
        {`I'am Aung Myat Thu`}
      </Text>
      <Text
        color={"$"}
        p
        css={{ letterSpacing: "$normal", opacity: 0.8 }}
      >
        {`Follow me on`}
      </Text>
      <SocialIconBar/>
    </Container>
    </>
  );
};

export default Contact;
