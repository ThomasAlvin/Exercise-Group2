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
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import logo from '../asset/spotify-logo2.png';
import { BsApple, BsFacebook, BsGift, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { useNavigate, Link } from 'react-router-dom';
import { useState, React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth_types } from '../redux/types';
import { useSelector } from 'react-redux';
import { TbAlertCircleFilled, TbCheck } from 'react-icons/tb';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import YupPassword from 'yup-password';
// import { tb } from 'react-icons/tb';

export default function RegisterPage() {
  YupPassword(Yup);
  const userselector = useSelector(state => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const month = [
    {
      name: 'January',
      number: 1,
    },
    {
      name: 'February',
      number: 2,
    },
    {
      name: 'March',
      number: 3,
    },
    {
      name: 'April',
      number: 4,
    },
    {
      name: 'May',
      number: 5,
    },
    {
      name: 'June',
      number: 6,
    },
    {
      name: 'July',
      number: 7,
    },
    {
      name: 'August',
      number: 8,
    },
    {
      name: 'September',
      number: 9,
    },
    {
      name: 'October',
      number: 10,
    },
    {
      name: 'November',
      number: 11,
    },
    {
      name: 'December',
      number: 12,
    },
  ];

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      email2: '',
      password: '',
      password2: '',
      name: '',
      day: 0,
      month: 0,
      year: 0,
      gender: '',
      marketingmessage: '',
      datamarketing: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('You need to enter your email')
        .email(
          "This email is invalid. Make sure it's written like example@email.com"
        ),
      email2: Yup.string()
        .required('You need to confirm your email')
        .oneOf([Yup.ref('email'), null], "The email addresses don't match"),
      name: Yup.string().required('You need to enter your email'),
      password: Yup.string()
        .required(
          <Flex>
            <Center>Please enter your password</Center>
          </Flex>
        )
        .minUppercase(
          1,
          'Your password needs atleast 1 uppercase letter, 1 number, and 1 symbol with atleast 8 characters'
        )
        .minNumbers(
          1,
          'Your password needs atleast 1 uppercase letter, 1 number, and 1 symbol with atleast 8 characters'
        )
        .minSymbols(
          1,
          'Your password needs atleast 1 uppercase letter, 1 number, and 1 symbol with atleast 8 characters'
        )
        .min(
          8,
          'Your password needs atleast 1 uppercase letter, 1 number, and 1 symbol with atleast 8 characters'
        ),
      password2: Yup.string()
        .required('You need to confirm your password')
        .oneOf([Yup.ref('password'), null], "the passwords don't match"),
      name: Yup.string().required('You need to enter your username'),
      day: Yup.number()
        .lessThan(32, 'Must be less than 32')
        .moreThan(
          0,
          <Flex>
            <Center>
              {' '}
              <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
              <Box>Enter a valid date</Box>
            </Center>
          </Flex>
        ),

      month: Yup.number().required('whre ur motnh'),
      year: Yup.number()
        .lessThan(2023, 'Must be less than 32')
        .moreThan(
          0,
          <Flex>
            <Center>
              {' '}
              <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
              <Box>Enter a valid date</Box>
            </Center>
          </Flex>
        ),
      datamarketing: Yup.string().required('yes no?'),
    }),
    onSubmit: () => {
      // console.log(formik.values);
      const user = { ...formik.values };
      user.birthdate = new Date(user.year, user.month, user.day);
      console.log(user);
    },
  });

  function inputHandler(event) {
    const { value, id } = event.target;
    console.log(value);
    // const tempAccount = { ...account };
    // tempAccount[id] = value;
    // setAccount(tempAccount);
    formik.setFieldValue(id, value);
  }
  function numberHandler(event) {
    var { value, id, maxLength } = event.target;
    if (value.length > maxLength) {
      event.target.value = value.slice(0, maxLength);

      formik.setFieldValue(id, value);
    } else {
      formik.setFieldValue(id, value);
    }
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
          paddingTop={'32px'}
          pb={'32px'}
          borderBottom={'1px solid #D9DaDC'}
          color={'whiteAlpha.800'}
          gap={'20px'}
        >
          <Image src={logo} w={'130px'} h={'40px'} />
        </Center>

        <Center
          w={'100%'}
          maxW={'450px'}
          fontSize={'13px'}
          color={'RGBA(255, 255, 255, 0.92)'}
          flexDir={'column'}
          gap="15px"
          paddingX={'24px'}
        >
          <Center
            display={'flex'}
            fontWeight={'light'}
            fontSize={'24px'}
            fontFamily={'circularspstyle'}
            paddingBottom={'20px'}
            paddingTop={'20px'}
            color={'black'}
          >
            {' '}
            Sign up for free to start listening
          </Center>

          <Center
            _hover={{
              w: '110%',
              h: '52px',
              maxW: '400px',
              bgColor: 'facebook.800',
            }}
            fontSize={'15px'}
            w={'100%'}
            maxW={'394px'}
            bgColor={'facebook.600'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            value="male"
            border={'1px solid #A5A5A5'}
            cursor={'pointer'}
          >
            <Icon w={'20px'} h={'20px'} as={BsFacebook}></Icon>
            <Center>Sign up with Facebook</Center>
          </Center>

          <Center
            fontSize={'15px'}
            w={'100%'}
            maxW={'394px'}
            h={'48px'}
            fontWeight={'700'}
            borderRadius={'25px'}
            gap={'10px'}
            value="male"
            color={'#535353'}
            border={'2px solid #535353'}
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
                  {formik.errors.email}
                  <Box
                    display={
                      !formik.errors.email && !formik.values.email
                        ? 'block'
                        : 'none'
                    }
                  >
                    <Center>
                      <Icon
                        as={TbAlertCircleFilled}
                        w={'16px'}
                        h={'16px'}
                      ></Icon>
                      You need to enter your Email
                    </Center>
                  </Box>

                  <Flex color={'red'}>
                    <Center>
                      <Icon
                        display={
                          !formik.errors.email && formik.values.email
                            ? 'block'
                            : 'none'
                        }
                        as={TbCheck}
                        w={'16px'}
                        h={'16px'}
                        color={'green'}
                      ></Icon>
                      <Box
                        color={'green'}
                        display={
                          !formik.errors.email && formik.values.email
                            ? 'block'
                            : 'none'
                        }
                      >
                        {' '}
                        Email is viable
                      </Box>
                    </Center>
                  </Flex>
                </Center>
              </Flex>
              <Box color={'#117A37'} textDecor={'underline'}>
                <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                  Use your number instead
                </Link>
              </Box>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Confirm your email</Box>
              <Input
                onChange={inputHandler}
                id="email2"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Enter Your Email again."
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
              <Flex color={'red'} gap={'5px'}>
                {formik.errors.email2}
                <Box
                  display={
                    !formik.errors.email2 && !formik.values.email2
                      ? 'block'
                      : 'none'
                  }
                >
                  <Center>
                    <Icon as={TbAlertCircleFilled} w={'16px'} h={'16px'}></Icon>
                    You need to enter your email
                  </Center>
                </Box>

                <Flex color={'green'}>
                  <Center>
                    <Icon
                      display={
                        !formik.errors.email2 && formik.values.email2
                          ? 'block'
                          : 'none'
                      }
                      as={TbCheck}
                      w={'16px'}
                      h={'16px'}
                      color={'green'}
                    ></Icon>
                    <Box
                      display={
                        !formik.errors.email2 && formik.values.email2
                          ? 'block'
                          : 'none'
                      }
                      color={'green'}
                    >
                      Email is viable
                    </Box>
                  </Center>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Create a Password</Box>
              <InputGroup>
                <Input
                  id="password"
                  onChange={e => {
                    inputHandler(e);
                  }}
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

              <Flex color={'red'} gap={'5px'}>
                <Center>
                  {formik.errors.password}
                  <Box
                    display={
                      !formik.errors.password && !formik.values.password
                        ? 'block'
                        : 'none'
                    }
                  >
                    <Center>
                      <Icon
                        as={TbAlertCircleFilled}
                        w={'16px'}
                        h={'16px'}
                      ></Icon>
                      You need to enter your Password
                    </Center>
                  </Box>

                  <Flex color={'red'}>
                    <Center>
                      <Icon
                        display={
                          !formik.errors.password && formik.values.password
                            ? 'block'
                            : 'none'
                        }
                        as={TbCheck}
                        w={'16px'}
                        h={'16px'}
                        color={'green'}
                      ></Icon>
                      <Box
                        color={'green'}
                        display={
                          !formik.errors.password && formik.values.password
                            ? 'block'
                            : 'none'
                        }
                      >
                        {' '}
                        Password is viable
                      </Box>
                    </Center>
                  </Flex>
                </Center>
              </Flex>
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Confirm you're Password</Box>
              <InputGroup>
                <Input
                  id="password2"
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

              <Flex color={'red'} gap={'5px'}>
                <Center>
                  {formik.errors.password2}
                  <Box
                    display={
                      !formik.errors.password2 && !formik.values.password2
                        ? 'block'
                        : 'none'
                    }
                  >
                    <Center>
                      <Icon
                        as={TbAlertCircleFilled}
                        w={'16px'}
                        h={'16px'}
                      ></Icon>
                      You need to confirm your Password
                    </Center>
                  </Box>

                  <Flex color={'red'}>
                    <Center>
                      <Icon
                        display={
                          !formik.errors.password2 && formik.values.password2
                            ? 'block'
                            : 'none'
                        }
                        as={TbCheck}
                        w={'16px'}
                        h={'16px'}
                        color={'green'}
                      ></Icon>
                      <Box
                        color={'green'}
                        display={
                          !formik.errors.password2 && formik.values.password2
                            ? 'block'
                            : 'none'
                        }
                      >
                        {' '}
                        Password is viable
                      </Box>
                    </Center>
                  </Flex>
                </Center>
              </Flex>
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>What should we call you?</Box>
              <Input
                onChange={inputHandler}
                id="name"
                paddingLeft={'12px'}
                className="emailAddress"
                placeholder="Enter you're username."
                h={'40px'}
                borderRadius={'3px'}
                cursor={'text'}
              ></Input>
              <Flex color={'red'} gap={'5px'}>
                <Center>
                  {formik.errors.name}
                  <Box
                    display={
                      !formik.errors.name && !formik.values.name
                        ? 'block'
                        : 'none'
                    }
                  >
                    <Center>
                      <Icon
                        as={TbAlertCircleFilled}
                        w={'16px'}
                        h={'16px'}
                      ></Icon>
                      Please to enter your username
                    </Center>
                  </Box>

                  <Flex color={'red'}>
                    <Center>
                      <Icon
                        display={
                          !formik.errors.name && formik.values.name
                            ? 'block'
                            : 'none'
                        }
                        as={TbCheck}
                        w={'16px'}
                        h={'16px'}
                        color={'green'}
                      ></Icon>
                      <Box
                        color={'green'}
                        display={
                          !formik.errors.name && formik.values.name
                            ? 'block'
                            : 'none'
                        }
                      >
                        {' '}
                        Username is viable
                      </Box>
                    </Center>
                  </Flex>
                </Center>
              </Flex>
            </Flex>

            <Flex flexDir={'column'} gap={'5px'}>
              <Flex flexDir={'column'} gap={'5px'}>
                <Box fontWeight={'700'}>What's your date of birth</Box>
                <Flex gap={'10px'} value="male">
                  <Input
                    type="number"
                    maxLength={2}
                    onChange={numberHandler}
                    id="day"
                    width={'100%'}
                    maxWidth={'88px'}
                    paddingLeft={'12px'}
                    className="emailAddress"
                    placeholder="DD."
                    h={'40px'}
                    borderRadius={'3px'}
                    cursor={'text'}
                  />

                  <Select id={'month'} onChange={inputHandler}>
                    <option value="" style={{ display: 'none' }} color="grey">
                      Month
                    </option>
                    {month.map(val => {
                      return <option value={val.number}> {val.name}</option>;
                    })}
                  </Select>
                  <Input
                    onChange={numberHandler}
                    type="number"
                    maxLength={4}
                    id="year"
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
                <Flex color={'red'}>
                  <Center>{formik.errors.day}</Center>
                  <Box
                    display={
                      !formik.errors.day && !formik.values.day
                        ? 'block'
                        : 'none'
                    }
                  >
                    <Center>
                      <Icon
                        as={TbAlertCircleFilled}
                        w={'16px'}
                        h={'16px'}
                      ></Icon>
                      Enter a valid date
                    </Center>
                  </Box>
                </Flex>
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    {formik.errors.month}
                    <Box
                      display={
                        !formik.errors.month && !formik.values.month
                          ? 'block'
                          : 'none'
                      }
                    >
                      <Center>
                        <Icon
                          as={TbAlertCircleFilled}
                          w={'16px'}
                          h={'16px'}
                        ></Icon>
                        Enter a valid month
                      </Center>
                    </Box>
                  </Center>
                </Flex>
                <Flex color={'red'} gap={'5px'}>
                  <Center>
                    {formik.errors.year}
                    <Box
                      display={
                        !formik.errors.year && !formik.values.year
                          ? 'block'
                          : 'none'
                      }
                    >
                      <Center>
                        <Icon
                          as={TbAlertCircleFilled}
                          w={'16px'}
                          h={'16px'}
                        ></Icon>
                        Enter a valid year
                      </Center>
                    </Box>

                    <Flex color={'red'}>
                      <Center>
                        <Icon
                          display={
                            !formik.errors.day &&
                            formik.values.day &&
                            formik.values.month &&
                            formik.values.year
                              ? 'block'
                              : 'none'
                          }
                          as={TbCheck}
                          w={'16px'}
                          h={'16px'}
                          color={'green'}
                        ></Icon>
                      </Center>
                    </Flex>
                  </Center>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir={'column'} gap={'5px'}>
              <Box fontWeight={'700'}>Whats your gender</Box>
              <RadioGroup id="gender" defaultValue="Male" colorScheme="green">
                <Flex
                  w={'100%'}
                  flexWrap={'wrap'}
                  rowGap={'10px'}
                  columnGap={'20px'}
                >
                  <Radio value="Male" onChange={inputHandler}>
                    male
                  </Radio>

                  <Radio value="female" onChange={inputHandler}>
                    female
                  </Radio>

                  <Radio value="nonbinary" onChange={inputHandler}>
                    non-binary
                  </Radio>

                  <Radio value="other" onChange={inputHandler}>
                    other
                  </Radio>

                  <Radio value="nottosay" onChange={inputHandler}>
                    prefer not to say
                  </Radio>
                </Flex>
              </RadioGroup>
            </Flex>
            <Flex
              pt={'10px'}
              h={'40px'}
              fontSize={'14px'}
              alignItems={'flex-start'}
            >
              <Checkbox colorScheme="green">
                <Box h={'100%'} fontSize={'14px'} padding={'12px'}>
                  i would prefer not to receive marketing message from spotify
                </Box>
              </Checkbox>
            </Flex>
            <Checkbox
              colorScheme="green"
              onChange={inputHandler}
              value={'lol'}
              id="datamarketing"
            >
              {formik.errors.datamarketing}
              <Box h={'100%'} fontSize={'14px'} padding={'12px'}>
                share my registration data with spotify's content provider for
                marketing purposes
              </Box>
            </Checkbox>
            <Center fontSize={'11px'} gap={'3px'}>
              by clicking on sign-up, you agree to spotify
              <Flex color={'green'} textDecor={'underline'}>
                terms and condition of use
              </Flex>
            </Center>
            <Center fontSize={'11px'} gap={'3px'}>
              by clicking on sign-up, you agree to the
              <Flex color={'green'} textDecor={'underline'}>
                spotify privacy policy.
              </Flex>
            </Center>
            <Center>
              <Button
                h={'50px'}
                w={'130px'}
                borderRadius={'100px'}
                colorScheme="whatsapp"
                color={'black'}
                cursor={'pointer'}
                onClick={formik.handleSubmit}
              >
                SIGN UP
              </Button>
            </Center>
            <Center fontSize={'15px'} gap={'3px'}>
              Have An Account?
              <Link to={'/login'}>
                <Flex color={'green'} textDecor={'underline'}>
                  Log in
                </Flex>
              </Link>
            </Center>
            <Center w={'100%'} h={'200px'}></Center>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
