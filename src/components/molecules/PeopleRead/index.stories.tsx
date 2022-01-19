import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PeopleRead from '.';

export default {
    title: 'Molecules/PeopleReading',
    component: PeopleRead,
} as ComponentMeta<typeof PeopleRead>;

const Template: ComponentStory<typeof PeopleRead> = (args) => <PeopleRead {...args} />;

export const PeopleReading = Template.bind({});
PeopleReading.args = {
    people:1.6
};