import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import EntrepreneurshipPage from '.';

export default {
    title: 'Pages/EntrepreneurshipPage',
    component: EntrepreneurshipPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof EntrepreneurshipPage>;

export const Entrepreneurship_Page = () => <EntrepreneurshipPage />