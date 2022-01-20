import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Blinks from '.';

export default {
    title: 'Molecules/Blinks',
    component: Blinks,

    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof Blinks>;

export const Books = () => <Blinks />