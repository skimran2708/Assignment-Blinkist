import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BookInfo from '.';

export default {
    title: 'Organisms/BookInfo',
    component: BookInfo,

    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof BookInfo>;

export const Book_Info = () => <BookInfo />