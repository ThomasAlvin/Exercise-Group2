import '../css/navbar.css';
import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { CgProfile, CgSmileNone } from 'react-icons/cg';
import { Select } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Test from '../asset/Exercise';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const userSelector = useSelector(state => state.auth);
  return (
    <div>
      <div className="navbarnya">
        <div className="navbarbox">
          <div className="recentlylogin">
            <div className="arrows">
              <div style={{ paddingLeft: '30px' }}>
                <Icon
                  as={IoIosArrowBack}
                  style={{
                    color: 'grey',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50px',
                    backgroundColor: 'black',
                  }}
                />
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Icon
                  as={IoIosArrowForward}
                  style={{
                    color: 'grey',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50px',
                    backgroundColor: 'black',
                  }}
                />
              </div>
            </div>
            <div className="upgradeprofile">
              <Button
                borderColor={'grey'}
                colorScheme="grey"
                variant="outline"
                borderRadius={'100px'}
                size={'sm'}
                fontSize={'14px'}
                fontWeight={'bold'}
                backgroundColor={'black'}
              >
                Upgrade
              </Button>
              <div className="account">
                <Icon
                  className="profilelogo"
                  as={CgProfile}
                  style={{ width: '25px', height: '25px' }}
                />
                <Select
                  borderColor={'blackAlpha.50'}
                  className="buttonaccount"
                  size={'sm'}
                  placeholder={userSelector.password}
                >
                  <option value="option1">{userSelector.email}</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <Test />
      </div>
    </div>
  );
}
