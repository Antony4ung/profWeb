import React from 'react'
import { Box } from './Box'

type Props = {
    width:string,
    height:string
}

const UnderLine = ({width,height}: Props) => {
  return (
    <Box css={{width,height,backgroundColor:"$secondary"}}/>
  )
}

export default UnderLine