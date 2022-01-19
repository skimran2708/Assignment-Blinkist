import { ComponentMeta } from '@storybook/react';
import React from 'react';
import LandingPage from '.';

export default {
    title: 'Pages/LandingPage',
    component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

export const Entrepreneurship_Page = () => <LandingPage />