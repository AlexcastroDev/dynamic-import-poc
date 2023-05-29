import React from 'react';
import * as Styled from './Home.styles';
import { Button } from '@mantine/core';
import { Modal as ModalComponent } from '@/components';

const Modal = React.lazy(ModalComponent)

export default function HomeScreen() {
  return (
    <div>
      <Styled.Container1 />
      <Modal />
      <Button>teste 2</Button>
      <Styled.Button>teste 1</Styled.Button>
      <Styled.Container2 />
    </div>
  );
}
