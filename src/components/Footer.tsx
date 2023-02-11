import { Divider, Text } from '@nextui-org/react'
import React from 'react'
import { Box } from './Box'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <Divider/>
    <Box css={{height:80,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Text small css={{color:"$gray600"}}>© 2023 Aung Myat Thu. All rights reserved.</Text>
    </Box>
    </>
  )
}

export default Footer