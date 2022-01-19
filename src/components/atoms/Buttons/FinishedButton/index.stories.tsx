import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FinishedButton from '.';

export default {
    title: 'Atoms/Buttons/FinishedReading',
    component: FinishedButton,
} as ComponentMeta<typeof FinishedButton>;

const Template: ComponentStory<typeof FinishedButton> = (args) => <FinishedButton {...args} />


export const FinishedReading = Template.bind({});
FinishedReading.args = {
  onClicked: function(): void {throw new Error("Function not implemented");}
};