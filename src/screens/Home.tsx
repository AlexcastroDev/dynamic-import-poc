import React from 'react';
import * as Styled from './Home.styles';
import { Button } from '@mantine/core';
import { Modal } from '@/components';
// import dynamic from 'next/dynamic';
// const Modal = dynamic(() => import('@/components').then((components) => components.default.Modal()), {
//   ssr: true,
// })

const Modal2 = React.lazy(Modal)

export default function HomeScreen() {
  return (
    <div>
      <Styled.Container1 />
      <Modal2 />
      <Button>teste 2</Button>
      <Styled.Button>teste 1</Styled.Button>
      <Styled.Container2 />
    </div>
  );
}
