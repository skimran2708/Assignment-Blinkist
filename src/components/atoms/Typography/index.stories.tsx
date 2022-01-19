import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '.';

export default {
    title: 'Atoms/Typography',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Typography = Template.bind({});
Typography.args = {
    variant:'h1',
    text:"Text"
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
    variant:'subtitle1',
    text:"Subtitle"
};

export const Body1 = Template.bind({});
Body1.args = {
    variant:'body1',
    text:"Body"
};

export const Caption = Template.bind({});
Caption.args = {
    variant:'caption',
    text:"Caption"
};