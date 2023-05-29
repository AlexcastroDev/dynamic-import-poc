import StateProvider from '@/screens/about/provider';
import dynamic from 'next/dynamic';
import React from 'react';

const AboutScreen = dynamic(() => import('@/screens/about'), {
    ssr: true,
})

export default function About() {
    return (
        <StateProvider>
            <AboutScreen />
        </StateProvider>
    )
}