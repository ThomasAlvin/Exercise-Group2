import LoginPage from './login';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

export default function HomePage(props) {
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (props.user != 'chris') {
      }
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Center>
          <Spinner h={'100px'} w={'100px'} />
        </Center>
      ) : (
        <div style={{ display: 'flex' }}>
          <Navbar />
          <Sidebar />
        </div>
      )}
    </>
  );
}
