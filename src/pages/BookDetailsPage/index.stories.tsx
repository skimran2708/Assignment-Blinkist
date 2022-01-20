import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BookDetailsPage from '.';

export default {
    title: 'Pages/BookDetailsPage',
    component: BookDetailsPage,
    
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof BookDetailsPage>;

export const BookDetails_Page = () => <BookDetailsPage />