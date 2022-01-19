import { ComponentMeta } from '@storybook/react';
import React from 'react';
import KindleButton from '.';

export default {
    title: 'Atoms/Buttons/Kindle_Button',
    component: KindleButton,
} as ComponentMeta<typeof KindleButton>;

export const Kindle_Button = () => <KindleButton />