import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/home.css';
const Course=({views,title,imageSrc,id, addToPlaylistHandler, creator, description,lectureCount})=>{
  return (
<VStack className='course' alignItems={["center", "flex-start"]}>
  <Image src={imageSrc} boxSize="60" objectFit={'contain'}/>
  <Heading textAlign={["center","left"]} size={'sm'} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} />

<Text noOfLines={2}  children={description}/>

<HStack>
  <Text noOfLines={2} children={creator} fontWeight={"bold"} textTransform="uppercase"/>
<Text fontFamily={'body'} textTransform="uppercase" children={creator}/>
</HStack>
<Heading textAlign={"center"} size='xs' children={`Lectures-${lectureCount}`} textTransform="uppercase"/>
<Heading size="xs" children={`Views - ${views}`} textTransform="uppercase" />

<Stack direction={["column","row"]} alignItems="center">
  <Link to={`/course/${id}`}>
    <Button  colorScheme="yellow">Watch Now</Button>
  </Link>
    <Button variant={"ghost"}  colorScheme="yellow" onClick={(id)=>{
      addToPlaylistHandler(id)
    }}>Add to playlist</Button>
</Stack>
</VStack>
  )
}


const Courses = () => {
  const [keyword, setKeyword]=useState("");
  const [category,setCategory]=useState("");
  const addToPlaylistHandler=()=>{
    console.log("added to paylist");
  }
  const categories=[
    "Web Development","Artificial Intellegence" ,"Data Science","App Develpment","Data Anaylist","Game Development"
  ]
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
<Heading children="All Courses" m={'8'}/>
    <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder='Search a course ...' type={'text'}
      focusBorderColor='yellow.500'
    />
    <HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{
      display:'none'
    }}}>
     {
      categories.map((item,index)=>(
        <Button key={{index}} onClick={()=>setCategory(item)} minW={'60'}>
        <Text children={item}/>
      </Button>
      ))
     }
    </HStack>

    <Stack
    direction={["column","row"]}
    flexWrap="wrap"
    justifyContent={["flex-start","space-evenly"]}
    alignItems={["center","flex-start"]}
    >

<Course title={"Sample"}
  description={"This is a sample course."}
  views={23}
  imageSrc={"samo"}
  creator={"sapf"}
  lectureCount={"2"}
  addToPlaylistHandler={addToPlaylistHandler}
/>

    </Stack>
    </Container>
  );
}

export default Courses