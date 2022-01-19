import React from 'react';
import { ComponentMeta } from '@storybook/react';
import TabsBar from '.';

export default {
    title: 'Molecules/StatusTabs',
    component: TabsBar,
      
} as ComponentMeta<typeof TabsBar>;

export const StatusTabs = () => <TabsBar />