import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FooterItem from '.';

export default {
    title: 'Atoms/FooterItem',
    component: FooterItem,
} as ComponentMeta<typeof FooterItem>;

const Template: ComponentStory<typeof FooterItem> = (args) => <FooterItem {...args} />;

export const Footer_item = Template.bind({});
Footer_item.args = {
  text:"Footer Item",
};