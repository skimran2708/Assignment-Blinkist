import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Footer from '.';

export default {
    title: 'Organisms/Footer',
    component: Footer,
      
} as ComponentMeta<typeof Footer>;

export const footer = () => <Footer />