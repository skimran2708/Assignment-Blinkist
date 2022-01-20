import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavItem from '.';

export default {
    title: 'Molecules/Navitems',
    component: NavItem,
      
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const NavItem_bold = Template.bind({});
NavItem_bold.args = {
  text:'My Library',
  type:'bold'
};

export const NavItem_normal = Template.bind({});
NavItem_normal.args = {
  text:'Pricing',
  type:'normal'
};