import { ComponentMeta } from '@storybook/react';
import React from 'react';
import AddToLibrary from '.';

export default {
    title: 'Atoms/Buttons/Add',
    component: AddToLibrary,
} as ComponentMeta<typeof AddToLibrary>;

export const Add = () => <AddToLibrary />
