import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExploreMenu from '.';

export default {
    title: 'Organisms/ExploreMenu',
    component: ExploreMenu,
      
} as ComponentMeta<typeof ExploreMenu>;

const Template: ComponentStory<typeof ExploreMenu> = (args) => <ExploreMenu {...args} />;

export const Explore_Menu = Template.bind({});
Explore_Menu.args = {
  open:false
};