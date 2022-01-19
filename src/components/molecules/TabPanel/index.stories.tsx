import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TabPanel from '.';

export default {
    title: 'Molecules/TabPanel',
    component: TabPanel,
      
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = (args) => <TabPanel {...args} />;

export const Tab_Panel = Template.bind({});
Tab_Panel.args = {
  value:0
};