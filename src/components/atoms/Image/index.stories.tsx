import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Image from '.';
import logo from '../../../assets/images/BlinkistLogo.png';

export default {
    title: 'Atoms/Image',
    component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Logo = Template.bind({});
Logo.args = {
    name:logo,
};