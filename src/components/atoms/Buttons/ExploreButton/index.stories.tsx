import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExploreButton from '.';

export default {
    title: 'Atoms/Buttons/Explore',
    component: ExploreButton,
} as ComponentMeta<typeof ExploreButton>;

export const Explore = () => <ExploreButton />
