import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExploreMenu from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Organisms/ExploreMenu',
    component: ExploreMenu,

    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
      
} as ComponentMeta<typeof ExploreMenu>;

const Template: ComponentStory<typeof ExploreMenu> = (args) => <ExploreMenu {...args} />;

export const Explore_Menu = Template.bind({});
Explore_Menu.args = {
  open:false
};