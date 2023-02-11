import { Button } from "@nextui-org/react";
import React from "react";
import { Box } from "./Box";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";
const ScrollButton = () => {
  return (
    <Box
      css={{
        position: "absolute",
        bottom: "$20",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Link href="#about">
        <Button auto color="success" rounded flat>
          {`Let's see more about me`} <BsChevronDoubleDown style={{marginLeft:10}} size={25} />
        </Button>
      </Link>
    </Box>
  );
};

export default ScrollButton;
