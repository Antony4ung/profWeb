import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { FiLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

type Props = {
  name: string;
  imageUrl: string;
  sourceLink: string;
  demoUrl: string;
  des:string
};

const ProjectCard = ({ name, imageUrl, sourceLink, demoUrl,des }: Props) => (
  <Card css={{ w: "100%", minHeight:"300px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageUrl}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row align="center">
        <Col>
          <Row>
            <Col>
              <Text color="#d1d1d1" size={17}>
                {name || `Breathing App`}
              </Text>
              <Text  size={12}>
                {des}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href={demoUrl}>
              <Button flat auto css={{ mr: "$5" }} color={"secondary"}>
                <FiLink />
              </Button>
            </Link>

            <Link href={sourceLink}>
              <Button flat auto css={{ color: "#94f9f0", bg: "#94f9f026" }}>
                <BsGithub />
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default ProjectCard;
