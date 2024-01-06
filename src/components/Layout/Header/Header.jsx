import React from 'react'
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import  {RiDashboardFill, RiLogoutBoxFill, RiMenu5Fill} from "react-icons/ri"
import { Link } from 'react-router-dom';
const LinkButton=({url="/",title="Home",onClose})=>(
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
);
const Header = () => {
    const isAuthentication=false;
    const user={
        role:'admin',
    }
    const logoutHandler=()=>{
        console.log("logout");
        onClose();
    }
    const {isOpen, onOpen, onClose}=useDisclosure();
  return (
    <>
        <ColorModeSwitcher/>
        <Button onClick={onOpen} colorScheme={"yellow"} width="12" height={'12'} rounded="full"
        position={'fixed'} top="6" left="6"
        > 
            <RiMenu5Fill/>
            </Button>
            <Drawer placement='left'  isOpen={isOpen} >
            <DrawerOverlay backdropFilter={'blur(3px)'}/>
            <DrawerContent>
                <DrawerHeader onClick={onClose} borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
         <DrawerBody >
            <VStack  spacing={'4'} alignItems={"flex-start"}>
               <LinkButton onClose={onClose} url='/' title="Home"/>
               <LinkButton  onClose={onClose} url='/courses' title="Browse All Couses"/>
               <LinkButton onClose={onClose} url='/request' title="Request a COurse"/>
               <LinkButton onClose={onClose} url='/contact' title="Contact Us"/>
               <LinkButton onClose={onClose} url='/about' title="About"/>
            <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">

            {isAuthentication?(<>
<VStack>
    <HStack>
    <Link onClick={onClose} to="/profile">
                    <Button  variant={"ghost"} colorScheme={"yellow"}>
                        Profile
                    </Button>
                </Link> 
                <Button variant={"ghost"} onClick={logoutHandler}>
                        <RiLogoutBoxFill/>
                        Logout
                    </Button>
    </HStack>
    {
        user && user.role==="admin" && <Link onClick={onClose} to="/admin/dashboard">
            <Button  colorScheme={"purple"}  variant="ghost">
                <RiDashboardFill onClick={onClose} style={{margin:'4px'}}/>
DashBoard
            </Button>
        </Link>
    }
</VStack>

            </>):(<>

                <Link onClick={onClose} to="/login">
                    <Button colorScheme={"yellow"}>
                        Login
                    </Button>
                </Link>
<p>OR</p>

                <Link onClick={onClose} to="/register">
                    <Button colorScheme={"yellow"}>
                        Sign Up
                    </Button>
                </Link>
            </>)}


            </HStack>
            </VStack>


         </DrawerBody>

            </DrawerContent>

            </Drawer>
   
    </>
    
  )
}

export default Header;
