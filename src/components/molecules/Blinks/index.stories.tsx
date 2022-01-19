import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Blinks from '.';

export default {
    title: 'Molecules/Blinks',
    component: Blinks,
} as ComponentMeta<typeof Blinks>;

export const Books = () => <Blinks />