import { Link, useTheme } from "@nextui-org/react";
import React from "react";
import { ImFacebook2,ImGithub } from "react-icons/im";
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import { Box } from "./Box";
type Props = {
};

const listArr = [
    {
        href:"https://www.facebook.com/offaung.offaung/",
        icon:<ImFacebook2 size={22}/>
    },
    {
        href:"https://github.com/Antony4ung",
        icon:<ImGithub size={22}/>
    },
    {
        href:"mailto:thua0524@gmail.com",
        icon:<MdOutlineMailOutline size={24}/>
    },
    {
        href:"https://www.instagram.com/antony_aung2/",
        icon:<FaInstagram size={24}/>
    },
]

const SocialIconBar = ({}: Props) => {
  const { theme } = useTheme();
  return (
    <Box
      css={{ display: "flex", alignItems: "center",mt:"$10" }}
    >
      

      {
        listArr.map((item,index)=><Link css={{marginRight:"$5",marginLeft:"$5",color:"$secondary"}} href={item.href} key={index}>
            {
                item.icon
            }
        </Link>)
      }
    </Box>
  );
};

export default SocialIconBar;
