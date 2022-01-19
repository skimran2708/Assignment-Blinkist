import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeRead from '.';

export default {
    title: 'Molecules/ReadingTime',
    component: TimeRead,
} as ComponentMeta<typeof TimeRead>;

const Template: ComponentStory<typeof TimeRead> = (args) => <TimeRead {...args} />;

export const ReadingTime = Template.bind({});
ReadingTime.args = {
    time:13,
    width:'120px',
    height:'20px'
};