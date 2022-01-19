import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExploreBar from '.';

export default {
    title: 'Molecules/Explore/ExploreBar',
    component: ExploreBar,
      
} as ComponentMeta<typeof ExploreBar>;

const Template: ComponentStory<typeof ExploreBar> = (args) => <ExploreBar {...args} />;

export const Explore_Bar = Template.bind({});
Explore_Bar.args = {
    list:(tab)=>{"Entrepreneur List"}
};