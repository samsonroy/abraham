import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {useEffect} from 'react';
import logo from '../../assets/logo.png';

const WelcomeMessage = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const Image = styled.Image`
  height: 190px;
  width: 220px;
`;

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 3000);
  }, []);

  return (
    <WelcomeMessage>
      <Image source={logo} />
      <Text>Welcome Rikith Mark</Text>
    </WelcomeMessage>
  );
};

export default Splash;
