import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
