import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarIcon from '.';

export default {
    title: 'Atoms/Avatar',
    component: AvatarIcon,
} as ComponentMeta<typeof AvatarIcon>;

// export const Avatar = () => <AvatarIcon letter="A"/>

const Template: ComponentStory<typeof AvatarIcon> = (args) => <AvatarIcon {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  letter:"A",
};