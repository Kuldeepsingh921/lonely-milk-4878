import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {RiDeleteBinLine} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai" 
import {MdPendingActions} from "react-icons/md"
import {GoThumbsup} from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import CartTable from './CartTable'
import { CartPayment } from './CartPayment'
import { getCartData } from '../../redux/cart/cart.actions'
import { useNavigate } from 'react-router-dom'

export const Cart = () => { 
 const cartItems=useSelector((store)=>store.cart.cart)
 const dispatch=useDispatch()
 const navigate = useNavigate();
 
  useEffect(()=>{
   dispatch(getCartData())
  },[])
  // console.log("cart",cartItems)

  if (cartItems.length === 0) {
    return (
      <Box textAlign="center">
        <Heading p="4">Your cart is Empty !</Heading>
        <Button onClick={() => navigate("/products")} colorScheme="linkedin">Discover more</Button>
      </Box>
    )
  }

  return (
    <div>
      
      <Flex direction={{base:"column",md:"row"}} display='flex' width='85%' margin='auto' gap='20px' marginTop='20px' >
       
        {/* First box */}
        <Box>
          {cartItems?.map((el)=>
          <CartTable key={el.id} {...el}  />
          )}
        </Box>
           {/* Second box */}
          
                <Box w="50%" boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p='8px' height='350px'>
                 {cartItems.length > 0 && <CartPayment />}
                </Box>
                
           </Flex>
    </div>
  )
}
