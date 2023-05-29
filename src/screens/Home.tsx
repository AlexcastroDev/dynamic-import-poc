import React from 'react';
import * as Styled from './Home.styles';
import { Button } from '@mantine/core';
import Components from '@/components';

export default function HomeScreen() {
  return (
    <div>
      <Styled.Container1 />
      <Components.Modal />
      <Button>teste 2</Button>
      <Styled.Button>teste 1</Styled.Button>
      <Styled.Container2 />
    </div>
  );
}
