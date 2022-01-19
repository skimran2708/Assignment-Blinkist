import React from 'react';
import { ComponentMeta } from '@storybook/react';
import SearchBar from '.';

export default {
    title: 'Organisms/SearchBar',
    component: SearchBar,
      
} as ComponentMeta<typeof SearchBar>;

export const searchBar = () => <SearchBar/>