import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
  ButtonGroup,
  InputRightElement,
  InputGroup,
  Alert,
} from '@chakra-ui/react';
import logo from '../asset/spotify-logo2.png';
import { BsApple, BsFacebook, BsGift, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Link, useNavigate } from 'react-router-dom';
import { useState, React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth_types } from '../redux/types';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { tb } from 'react-icons/tb';

export default function LoginPage() {
  const userselector = useSelector(state => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user?.email && user?.password) {
  //     return nav('/');
  //   }
  // }, []);
  function inputHandler(event) {
    const { value, id } = event.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }
  async function login() {
    await axios
      .get('http://localhost:2000/user', {
        params: { email: account.email, password: account.password },
      })
      .then(res => console.log(res));

    // if (account.email && account.password) {
    //   dispatch({ type: auth_types.login, payload: account });
    //   localStorage.setItem('user', JSON.stringify(account));

    //   return nav('/');
    // }
    // alert('harus masukin email dan password');
  }

  const [seePassword, setSeePassword] = useState(false);
  return (
    <>
      <Favicon url="https://www.freeiconspng.com/uploads/spotify-icon-0.png" />
      <Center flexDir={'column'} w={'100%'} gap={'40x'}>
        <Center
          width={'100%'}
          paddingTop={'15px'}
          pb={'12px'}
          borderBottom={'1px solid #D9DaDC'}
          color={'whiteAlpha.800'}
          gap={'20px'}
        >
          <Image src={logo} w={'143px'} h={'44px'} />
        </Center>

        <Center
          w={'100%'}
          maxW={'450px'}
          fontSize={'13px'}
          color={'RGBA(255, 255, 255, 0.92)'}
          flexDir={'column'}
          gap="10px"
          paddingX={'10px'}
        >
          <Center
            fontWeight={'light'}
            fontSize={'14px'}
            paddingTop={'40px'}
            color={'black'}
          >
            {' '}
            To continue, log in to Spotify
          </Center>
          <a style={{ width: '100%' }} href="/sidebar">
            <Center
              w={'100%'}
              bgColor={'#1877F2'}
              h={'48px'}
              fontWeight={'700'}
              borderRadius={'25px'}
              gap={'10px'}
              border={'1px solid #A5A5A5'}
              cursor={'pointer'}
            >
              <Icon w={'20px'} h={'20px'} as={BsFacebook}></Icon>
              <Center
                fontFamily={
                  'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, sans-serif'
                }
                fontSize={'14px'}
              >
                CONTINUE WITH FACEBOOK
              </Center>
            </Center>
          </a>
          <Center
            w={'100%'}
            bgColor={'black '}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            <Icon w={'20px'} h={'20px'} as={BsApple}></Icon>
            <Center>CONTINUE WITH APPLE</Center>
          </Center>

          <Center
            w={'100%'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            color={'rgba(0,0,0,0.5)'}
            border={'1px solid #A5A5A5'}
            bgColor={'white'}
            cursor={'pointer'}
          >
            <Icon w={'20px'} h={'20px'} as={FcGoogle}></Icon>
            <Center>CONTINUE WITH GOOGLE</Center>
          </Center>

          <Center
            w={'100%'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            color={'rgba(0,0,0,0.5)'}
            border={'1px solid #A5A5A5'}
            bgColor={'white'}
            cursor={'pointer'}
          >
            <Center>CONTINUE WITH PHONE NUMBER</Center>
          </Center>

          <Center
            w={'100%'}
            h={'48px'}
            color={'black'}
            gap={'12px'}
            fontWeight={'700'}
          >
            <Center w={'100%'}>
              <Box h="1px" w={'100%'} bgColor={'#D9DADC'}></Box>
            </Center>
            OR
            <Center w={'100%'}>
              <Box h="1px" w={'100%'} bgColor={'#D9DADC'}></Box>
            </Center>
          </Center>

          <Flex
            w={'100%'}
            pt={'20px'}
            gap={'20px'}
            flexDir={'column'}
            color={'black'}
          >
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Email address or username</Box>
              <Input
                onChange={inputHandler}
                id="email"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Email address or username"
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Password</Box>
              <InputGroup>
                <Input
                  id="password"
                  onChange={inputHandler}
                  type={seePassword ? 'text' : 'password'}
                  paddingLeft={'12px'}
                  className="password"
                  placeholder="Password"
                  h={'40px'}
                  borderRadius={'3px'}
                  cursor={'text'}
                ></Input>
                <InputRightElement width={'3.5rem'}>
                  <Icon
                    as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                    color={'#A5A5A5'}
                    w={'24px'}
                    h={'24px'}
                    cursor={'pointer'}
                    onClick={() => setSeePassword(!seePassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <a href="/forgotpassword">
                <Box
                  cursor={'pointer'}
                  textDecoration={'underline'}
                  fontWeight={'700'}
                  fontSize={'15px'}
                >
                  Forgot your password?
                </Box>
              </a>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Checkbox colorScheme="green" />
                <Box paddingLeft={'10px'}>Remember me</Box>
              </Box>

              <Box>
                <Button
                  onClick={login}
                  h={'50px'}
                  w={'130px'}
                  borderRadius={'100px'}
                  colorScheme="whatsapp"
                  color={'black'}
                  cursor={'pointer'}
                >
                  LOG IN
                </Button>
              </Box>
            </Flex>
            <Flex borderBottom={'1px grey solid'}></Flex>
            <Flex
              flexDir={'column'}
              justifyContent={'center'}
              textAlign={'center'}
              fontSize={'18px'}
              paddingBottom={'15px'}
            >
              {' '}
              Don't have an account?
            </Flex>
            <Flex pb={'200px'} justifyContent={'center'}>
              <Box w={'100%'}>
                <Link to={'/registerpage'} width={'100%'}>
                  <Button
                    w={'100%'}
                    borderRadius={'20px'}
                    colorScheme="whiteAlpha"
                    color={'grey'}
                    variant={'outline'}
                    fontWeight={'550'}
                    cursor={'default'}
                  >
                    <Flex textDecor={'underline'}>SIGN UP FOR SPOTIFY</Flex>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
}

// componentwillmount => sebelum render
// componentdidmount => setelah render
// componentdidupdate => ada terjadi perubahan pada variable tertentu
// componentwillunmount => meninggalkan component
// useEffect(()=>{}) //willmount =>
// useEffect(()=>{},[]) //component didmount
// useEffect(()=>{},[a])//component did update
