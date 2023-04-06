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
  Select,
} from '@chakra-ui/react';
import logo from '../asset/spotify-logo2.png';
import { BsApple, BsFacebook, BsGift, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { useNavigate } from 'react-router-dom';
import { useState, React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth_types } from '../redux/types';
import { useSelector } from 'react-redux';
import { TbAlertCircleFilled } from 'react-icons/tb';
// import { tb } from 'react-icons/tb';

export default function RegisterPage() {
  const userselector = useSelector(state => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const month = [
    {
      name: 'january',
      number: 1,
    },
    {
      name: 'february',
      number: 2,
    },
    {
      name: 'march',
      number: 3,
    },
    {
      name: 'april',
      number: 4,
    },
    {
      name: 'may',
      number: 5,
    },
    {
      name: 'june',
      number: 6,
    },
    {
      name: 'july',
      number: 7,
    },
    {
      name: 'august',
      number: 8,
    },
    {
      name: 'september',
      number: 9,
    },
    {
      name: 'october',
      number: 10,
    },
    {
      name: 'november',
      number: 11,
    },
    {
      name: 'december',
      number: 12,
    },
  ];

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
  function login() {
    if (account.email && account.password) {
      dispatch({ type: auth_types.login, payload: account });
      localStorage.setItem('user', JSON.stringify(account));

      return nav('/');
    }
    alert('harus masukin email dan password');
  }

  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setConfirmSeePassword] = useState(false);
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
          paddingX={'24px'}
        >
          <Center
            display={'flex'}
            fontWeight={'light'}
            fontSize={'24px'}
            fontWeight={'bold'}
            fontFamily={'circularspstyle'}
            paddingBottom={'20px'}
            paddingTop={'20px'}
            color={'black'}
          >
            {' '}
            Sign up for free to start listening
          </Center>

          <Center
            w={'100%'}
            maxW={'312px'}
            bgColor={'#1877F2'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            <Icon w={'20px'} h={'20px'} as={BsFacebook}></Icon>
            <Center>Sign up with Facebook</Center>
          </Center>

          <Center
            w={'100%'}
            maxW={'312px'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            color={'#535353'}
            border={'1px solid #A5A5A5'}
            bgColor={'white'}
            cursor={'pointer'}
          >
            <Icon w={'20px'} h={'20px'} as={FcGoogle}></Icon>
            <Center>Sign up with Google</Center>
          </Center>

          <Center
            w={'100%'}
            h={'48px'}
            color={'#7f7f7f'}
            gap={'12px'}
            fontSize={'16px'}
            fontWeight={'700'}
          >
            <Center w={'100%'}>
              <Box h="1px" w={'100%'} bgColor={'#7f7f7f'}></Box>
            </Center>
            or
            <Center w={'100%'}>
              <Box h="1px" w={'100%'} bgColor={'#7f7f7f'}></Box>
            </Center>
          </Center>

          <Flex w={'100%'} gap={'20px'} flexDir={'column'} color={'black'}>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>What's your email?</Box>
              <Input
                onChange={inputHandler}
                id="email"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Enter Your Email."
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
              <Flex color={'red'} gap={'5px'}>
                <Center>
                  <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                  You need to enter your Email
                </Center>
              </Flex>
              <Box color={'#117A37'} textDecor={'underline'}>
                {' '}
                Use your number instead
              </Box>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Confirm your email</Box>
              <Input
                onChange={inputHandler}
                id="confirm-email"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Enter Your Email again."
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
              <Flex color={'red'} gap={'5px'}>
                <Center>
                  <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                  You need to enter your Email
                </Center>
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Create a Password</Box>
              <InputGroup>
                <Input
                  id="password"
                  onChange={inputHandler}
                  type={seePassword ? 'text' : 'password'}
                  paddingLeft={'12px'}
                  className="password"
                  placeholder="Create a Password."
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
              {account.password.length < 8 ? (
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                    You need to enter your Password
                  </Center>
                </Flex>
              ) : null}
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Confirm you're Password</Box>
              <InputGroup>
                <Input
                  id="confirm-password"
                  onChange={inputHandler}
                  type={seeConfirmPassword ? 'text' : 'password'}
                  paddingLeft={'12px'}
                  className="password"
                  placeholder="Confirm you're Password."
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
                    onClick={() => setConfirmSeePassword(!seeConfirmPassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>
              {account.password.length < 8 ? (
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                    You need to enter your Password
                  </Center>
                </Flex>
              ) : null}
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>What should we call you?</Box>
              <Input
                onChange={inputHandler}
                id="profile"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Enter you're username."
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
              <Flex color={'red'} gap={'5px'}>
                <Center>
                  <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                  You need to enter your Username
                </Center>
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Flex flexDir={'column'} gap={'5px'}>
                <Box fontWeight={'700'}>What's your date of birth</Box>
                <Flex gap={'10px'}>
                  <Input
                    onChange={inputHandler}
                    id="confirm-email"
                    width={'100%'}
                    maxWidth={'88px'}
                    paddingLeft={'12px'}
                    className="emailAddress"
                    placeholder="DD."
                    h={'40px'}
                    borderRadius={'3px'}
                    cursor={'text'}
                  ></Input>

                  <Select placeholder="Month" id="month">
                    {month.map(val => {
                      return <option value={val.number}> {val.name}</option>;
                    })}
                  </Select>
                  <Input
                    onChange={inputHandler}
                    id="confirm-email"
                    width={'100%'}
                    maxWidth={'88px'}
                    paddingLeft={'12px'}
                    className="emailAddress"
                    placeholder="YYYY."
                    h={'40px'}
                    borderRadius={'3px'}
                    cursor={'text'}
                  ></Input>
                </Flex>
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                    Enter a valid day of the month
                  </Center>
                </Flex>
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                    Enter a valid year
                  </Center>
                </Flex>
              </Flex>
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
            <Flex>
              <Button
                w={'100%'}
                borderRadius={'20px'}
                colorScheme="whiteAlpha"
                color={'grey'}
                variant={'outline'}
                fontWeight={'550'}
              >
                {' '}
                SIGN UP FOR SPOTIFY
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
