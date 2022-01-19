import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarNavItem from '.';

export default {
    title: 'Molecules/Navitems',
    component: AvatarNavItem,
      
} as ComponentMeta<typeof AvatarNavItem>;

const Template: ComponentStory<typeof AvatarNavItem> = (args) => <AvatarNavItem {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  user:'A'
};