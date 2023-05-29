import React from 'react';
import * as Styled from './Home.styles';
import { Button } from '@mantine/core';
import { Dialog } from '@/components/index2';

export default function HomeScreen() {
  return (
    <div>
      <Styled.Container1 />
      <Dialog />
      <Button>teste 2</Button>
      <Styled.Button>teste 1</Styled.Button>
      <Styled.Container2 />
    </div>
  );
}
