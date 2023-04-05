import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import logo from '../img/spotify-logo2.png';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { TbAlertCircleFilled } from 'react-icons/tb';
import '../css/Login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const nav = useNavigate();

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('ada ketikan password baru');
  }, [account.password]);

  function inputHandler(event) {
    const { value, id } = event.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }

  const [seePassword, setSeePassword] = useState(false);

  function login() {
    nav('/');
  }

  return (
    <>
      <Center flexDir={'column'} w="100vw" gap={'30px'}>
        <Center
          w="100%"
          paddingTop={'25px'}
          pb={'12px'}
          borderBottom={'1px solid #D9DADC'}
        >
          <Image src={logo} w={'143px'} h={'44px'}></Image>
        </Center>

        <Center
          flexDir={'column'}
          w="100%"
          maxW={'450px'}
          fontSize={'14px'}
          gap={'10px'}
          color={'white'}
          paddingX={'10px'}
        >
          <Center
            w="100%"
            bgColor={'#1877F2'}
            h="48px"
            borderRadius={'25px'}
            fontWeight={'700'}
            gap={'10px'}
            cursor={'pointer'}
          >
            <Icon w="20px" h="20px" as={BsFacebook}></Icon>
            CONTINUE WITH FACEBOOK
          </Center>
          <Center
            w="100%"
            bgColor={'black'}
            h="48px"
            borderRadius={'25px'}
            fontWeight={'700'}
            gap={'10px'}
            cursor={'pointer'}
          >
            <Icon w="20px" h="20px" as={BsApple}></Icon>
            CONTINUE WITH APPLE
          </Center>
          <Center
            w="100%"
            bgColor={'white'}
            h="48px"
            borderRadius={'25px'}
            fontWeight={'700'}
            gap={'10px'}
            color={'grey'}
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            <Icon w="20px" h="20px" as={FcGoogle}></Icon>
            CONTINUE WITH GOOGLE
          </Center>
          <Center
            w="100%"
            bgColor={'white'}
            h="48px"
            borderRadius={'25px'}
            fontWeight={'700'}
            gap={'10px'}
            color={'grey'}
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            CONTINUE WITH PHONE NUMBER
          </Center>
          <Center
            w={'100%'}
            h={'48px'}
            color={'black'}
            gap={'10px'}
            fontWeight={'600'}
          >
            <Center w={'100%'}>
              <Box h={'1px'} w={'100%'} bgColor={'#09DADC'}></Box>
            </Center>
            OR
            <Center w={'100%'}>
              <Box h={'1px'} w={'100%'} bgColor={'#09DADC'}></Box>
            </Center>
          </Center>

          <Flex
            w="100%"
            maxW={'450px'}
            pt={'20px'}
            gap={'10px'}
            flexDir={'column'}
            color={'black'}
          >
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Email address or username</Box>
              <Input
                onChange={inputHandler}
                id="email"
                className="input"
                fontSize={'14px'}
                type={'text'}
                placeholder="Email address or username"
              ></Input>
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Password</Box>
              <InputGroup>
                <Input
                  onChange={inputHandler}
                  id="password"
                  className="input"
                  w="100%"
                  placeholder="Password"
                  type={seePassword ? 'text' : 'password'}
                  fontSize={'14px'}
                ></Input>
                <InputRightElement paddingTop={'18px'} paddingEnd={'10px'}>
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
                <Box color={'red'}>Password minimal 8</Box>
              ) : null}
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box
                textDecoration={'underline'}
                fontSize={'10'}
                fontWeight={'hairline'}
                cursor={'pointer'}
              >
                Forgot your password?
              </Box>
              <Flex
                flexDir={'row'}
                gap={'5px'}
                justifyContent={'space-between'}
              >
                <Flex alignItems={'flex-start'} gap={'10px'}></Flex>
                <Checkbox colorScheme={'green'}>Remember Me</Checkbox>
              </Flex>
              <Center
                borderRadius={'25px'}
                fontWeight={'600'}
                bgColor={'#1ED760'}
                color={'white'}
                h={'48px'}
                w={'121px'}
                cursor={'pointer'}
                onClick={login}
              >
                LOG IN
              </Center>
            </Flex>
            <Center w="100%">
              <Box h="1px" w={'100%'} bgColor={'#D9DADC'}></Box>
            </Center>

            <Center
              w="100%"
              bgColor={'white'}
              h="48px"
              fontWeight={'700'}
              gap={'10px'}
              color={'black'}
            >
              Don't have an account?
            </Center>
          </Flex>
          <Center
            w="100%"
            bgColor={'white'}
            h="48px"
            borderRadius={'25px'}
            fontWeight={'700'}
            gap={'10px'}
            color={'grey'}
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            CONTINUE WITH PHONE NUMBER
          </Center>
        </Center>
      </Center>
    </>
  );
}
