import { ComponentMeta } from '@storybook/react';
import React from 'react';
import BookInfo from '.';

export default {
    title: 'Organisms/BookInfo',
    component: BookInfo,
} as ComponentMeta<typeof BookInfo>;

export const Book_Info = () => <BookInfo />