import { ComponentMeta } from '@storybook/react';
import React from 'react';
import BookDetailsPage from '.';

export default {
    title: 'Pages/BookDetailsPage',
    component: BookDetailsPage,
} as ComponentMeta<typeof BookDetailsPage>;

export const BookDetails_Page = () => <BookDetailsPage />