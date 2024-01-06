import { Avatar, Box, Button, ButtonSpinner, Container, HStack, Heading,  Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import intro from "../../assets/videos/video.mp4"
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from "../../assets/docs/termsAndCondition"
const Founder=()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={'8'}>


    <VStack>
        <Avatar src='https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png' boxSize={["40", "48"]}/>
        <Text children="Co-Founder" opacity={0.7}/>

    </VStack>
    <VStack justifyItems={"center"} alignItems={["center","flex-start"]}>
      <Heading children="JAy" size={["md","xl"]}/>
      <Text textAlign={["center","left"]} children={`Hi, I am a full-stack developer. Our mission is to provide quality content at resonable price.`}/>
    </VStack>


    </Stack>
);

const TandC=({termsAndCondition})=>{
  <Box>
    <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my="4"/>
    <Box h="sm" p="4" >
    <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndCondition}</Text>
<Heading my="4" size={"xs"}  children="Refund only appplicable for cancellation within 7  days."/> 
    </Box>
  </Box>
}
const VideoPlayer=()=>(
  <Box>
   <video autoPlay loop muted src={intro}  
    controls  controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback
    ></video>
  </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16"  boxShadow={'lg'}>
    <Heading children=" About Us" textAlign={["center", "left"]}/>
     
    <Founder />

  <Stack m="8" direction={["column","row"]} alignItems="center" >

    <Text fontFamily={"cursive"} m='8' textAlign={["center","left"]}>
      We are a video streaming plateform with some premium courses avaiable only for premium users.
    </Text>
    <Link to="/subscribe">
      <Button variant={"ghost"} colorScheme='yellow'>
        CheckOut Our Plan
      </Button>
    </Link>
  </Stack>
<VideoPlayer/>
{/* <TandC termsAndCondition={termsAndConditions}/> */}
<Box>
    <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my="4"/>
    <Box h="sm" p="4" overflowY={"scroll"} >
    <Text  fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndConditions}</Text>
<Heading my="4" size={"xs"}  children="Refund only appplicable for cancellation within 7  days."/> 
    </Box>
  </Box>
  <HStack m="4" p={"4"}>
    <RiSecurePaymentFill/>
    <Heading size={"xs"} fontFamily="sans-serif" textTransform={'uppercase'} children={"Payment is secured by Razorpay"}/>
  </HStack>
 
    </Container>
  )
}

export default About