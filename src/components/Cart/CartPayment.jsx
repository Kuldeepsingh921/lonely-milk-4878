import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Select, Text } from '@chakra-ui/react'
import {AiFillQuestionCircle} from "react-icons/ai" 
import {MdPendingActions} from "react-icons/md"
import {GoThumbsup} from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'

export const CartPayment = () => {
  const cartItems=useSelector((store)=>store.cart.cart)
 const dispatch=useDispatch()
 const total=cartItems.reduce((acc,el)=>{
    return (el.price+acc)
 },0)
//  console.log("total",total);
  return (
    <Box p="4" >
        <Heading>Summary</Heading>
                    <Flex display="flex" justifyContent='space-between'>
                    <Flex>
                    <Box fontSize='18px' fontWeight='450' marginTop='20px'>Price </Box>
                    <Box marginTop='24px' alignSelf="center" ml="2"><AiFillQuestionCircle /></Box>
                    </Flex>
                    <Box fontSize='18px' fontWeight='450' marginTop='20px'> ₹ {total.toLocaleString("en-US")}</Box>
                    </Flex>
                   <Flex  display="flex" justifyContent='space-between' gap='20px' fontSize='18px' fontWeight='450' marginTop='20px'>
                   <Box >Estimated Delivery Charges</Box>
                    <Box>₹150.00</Box>
                   </Flex>
                   <Divider marginTop={'20px'}/>
                   <Flex display="flex" justifyContent='space-between' gap='40px' fontSize='22px' fontWeight='600' marginTop='20px'>
                   <Box>SubTotal</Box>
                   <Box>₹ {(total+150).toLocaleString("en-US")}</Box>
                   </Flex>
                   <Divider marginTop={'20px'} />
                   {/* BUTTON SECTION */}
                   <Box display={'flex'} alignItems='center' justifyContent='space-around' mb='10px' >
                   <Box>
                   <Button gap='10px' colorScheme='blackAlpha' color='white' backgroundColor='orange' height='50px'  borderRadius='20px' variant='solid' marginTop={'20px'}>
                    Pending <MdPendingActions />
                    </Button>
                   </Box>
                    <Box>
                    <Button gap='10px' colorScheme='blackAlpha' color='white' backgroundColor='green' height='50px'  borderRadius='20px' variant='solid' marginTop={'20px'}>
                    Approved <GoThumbsup />
                    </Button>
                    </Box>
                   </Box>
    </Box>
  )
}
