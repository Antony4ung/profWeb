import {
  Navbar,
  Button,
  Link,
  Text,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { Layout } from "./Layout";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Box } from "./Box";

const navItems = [
  { id: 0, title: "Home", href: "#" },
  { id: 1, title: "About", href: "#about" },
  { id: 3, title: "Projects", href: "#projects" },
  { id: 5, title: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState(0);
  const [toggleOpen, setToggleOpen] = useState(false);

  const { setTheme } = useNextTheme();
  const { isDark, type,theme } = useTheme();

  
  return (
    <Layout>
      <Navbar disableShadow shouldHideOnScroll isBordered variant="floating">
        <Navbar.Toggle
          showIn={"md"}
          isSelected={toggleOpen}
          // hideIn="lg"
          onClick={()=>setToggleOpen(!toggleOpen)}
          css={{}}
          
          aria-label="toggle navigation"
        />
        <Navbar.Brand>
          {/* <AcmeLogo /> */}

          <Image
            style={{ marginRight: 10 }}
            src={"/logo.png"}
            width={40}
            height={40}
            alt="logo"
          />
          <Text b color="inherit">
            A.M.Thu
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn={"md"} variant="underline">
          {navItems.map((item) => (
            <Navbar.Link
              onClick={() => setActiveItem(item.id)}
              isActive={activeItem === item.id}
              activeColor="secondary"
              variant={"underline-rounded"}
              key={item.id}
              href={item.href}
            >
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Box css={{ alignItems: "center", display: "flex" }}>
              {isDark ? (
                <MdOutlineDarkMode size={22} />
              ) : (
                <MdOutlineLightMode size={22} />
              )}
              <Switch
                css={{ marginLeft: 10 }}
                color="secondary"
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
            </Box>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse isOpen={toggleOpen} css={{}} disableAnimation>
          {navItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item.id}
              activeColor="error"
              css={
                {
                  // color: index === collapseItems.length - 1 ? "$error" : "",
                }
              }
              isActive={item.id === activeItem}
            >
              <Link
                onClick={() => {
                  setActiveItem(item.id);
                  setToggleOpen(false);
                }}
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.href}
              >
                {item.title}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
