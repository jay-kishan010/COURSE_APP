import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutube,TiSocialInstagramCircular, TiSocialYoutubeCircular} from "react-icons/ti";
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={'10vh'}>
  <Stack direction={["column", "row"]}>
   <VStack align={["center","flex-start"]} width="full" >
<Heading children="All rights Reserved" color={"white"}/>
<Heading children="@ J" fontFamily={"body"} size="sm" color={"yellow.400"}/>

   </VStack>
  <HStack spacing={["2","10"]} justifyContent="center" color={"white"} fontSize={50}>
  <a href='https://youtube.com/' target={'blank'}>
    <TiSocialYoutubeCircular/>

  </a>
  <a href='https://instagram.com/' target={'blank'}>
  <TiSocialInstagramCircular/>

  </a>
  <a href='https://github.com/' target={'blank'}>
    <DiGithub/>

  </a>
  <a href='https://social.com/' target={'blank'}>
    <TiSocialYoutube/>

  </a>
    
  </HStack>
  </Stack>
    </Box>
  )
}

export default Footer