import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h="90vh" p="16" >
         <Heading children="Welcome" my="8" textAlign={'center'}/>
         <VStack boxShadow={"lg"} alignItems="stretch" borderRadius={'lg'} spacing="0">
<Box bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
    <Text color={"black"} children={`Pro Pack -Rs299.00`}/>
</Box>

<Box p="4">
    <VStack textAlign={"center"} px="8" mt={"4"} spacing ="8">
        <Text color={'black'} children={`Join Pro Pack and get access to all content.`}/>
    <Heading size="md" 
    </VStack>
</Box>
         </VStack>
    </Container>
  )
}

export default Subscribe