import React from 'react';
import * as Styled from './Home.styles';
import { Button } from '@mantine/core';
// import { Modal as ModalComponent } from '@/components';
// import { Modal } from '@/components';

import dynamic from 'next/dynamic';
const Dialog = dynamic(() => import('@/components').then((components) => components.Dialog()), {
  ssr: false,
  loading: () => <div>loading...</div>
})

// const Modal = React.lazy(ModalComponent)

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
