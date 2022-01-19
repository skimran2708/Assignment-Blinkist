import React from 'react';
import { ComponentMeta } from '@storybook/react';
import BookDetailsTab from '.';

export default {
    title: 'Molecules/BookDetails/Tabs',
    component: BookDetailsTab,
      
} as ComponentMeta<typeof BookDetailsTab>;

export const Tabs = () => <BookDetailsTab />