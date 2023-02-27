import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Select, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {RiDeleteBinLine} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { DeleteCartItem, getCartData } from '../../redux/cart/cart.actions'



export default function CartTable({id,price,description,title,image,location}) {
     const dispatch=useDispatch()
     
     const handleDelete=()=>{
      dispatch(DeleteCartItem(id))
      dispatch(getCartData())
      console.log("deleted")
     }
   
  return (
    <div>
         <Box w='100%' boxShadow= "lg">
          <Box display='flex' justifyContent='space-between'  >
           <Box> <img style={{height:"150px",width:"130px"}}  src={image} alt="" /></Box>
           <Box width="80%" marginLeft='10px' lineHeight={'25px'} padding="5px">
            <Box display="flex" justifyContent={'space-between'}>
            <Box fontSize={'17px'} fontWeight='500' width='70%'> {description} </Box>
            <Box fontSize={'17px'} fontWeight='500'>MRP: ₹ {price.toLocaleString("en-US")} </Box>
            </Box>
            <Text color='gray' mt='10px'> <span style={{color:"black",fontSize:'17px',fontWeight:'500'}}>Category:</span> {title}</Text>
            <Text color='gray'> <span style={{color:"black",fontSize:'17px',fontWeight:'500'}}>Location:</span> {location}</Text>
                <Flex gap='20px' fontSize='25px' marginTop='20px' marginBottom='10px' cursor='pointer'>
                <MdOutlineFavoriteBorder />
                 <Box onClick={handleDelete}><RiDeleteBinLine /></Box>
                </Flex>
                <Divider />
           </Box>
           </Box>
           </Box> 
           
    </div>
  )
}
