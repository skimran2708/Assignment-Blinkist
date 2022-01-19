import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavItem from '.';

export default {
    title: 'Molecules/Navitems',
    component: NavItem,
      
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const Explore = Template.bind({});
Explore.args = {
  name:'Explore',
  icon:true
};

export const MyLibrary = Template.bind({});
MyLibrary.args = {
  name:'My Library',
  icon:true
};