import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExploreItem from '.';
import entrepreneurshipIcon from "../../../../assets/icons/EntrepreneurshipIcon.png";

export default {
    title: 'Molecules/Explore/ExploreItem',
    component: ExploreItem,
      
} as ComponentMeta<typeof ExploreItem>;

const Template: ComponentStory<typeof ExploreItem> = (args) => <ExploreItem {...args} />;

export const Explore_Item = Template.bind({});
Explore_Item.args = {
    iconName:entrepreneurshipIcon,
    categoryName:"Entrepreneurship",
    onClick:()=>{}
};