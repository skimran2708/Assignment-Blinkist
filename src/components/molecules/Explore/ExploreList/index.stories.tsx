import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExploreList from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Molecules/Explore/ExploreList',
    component: ExploreList,

    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
      
} as ComponentMeta<typeof ExploreList>;

const Template: ComponentStory<typeof ExploreList> = (args) => <ExploreList {...args} />;

export const Explore_List = Template.bind({});
Explore_List.args = {
    open:"1"
};