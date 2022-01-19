import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book1 from "../../../assets/images/cover1.png";
import BookCard from '.';

export default {
    title: 'Molecules/Bookcard',
    component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard {...args} />;

export const Bookcard1 = Template.bind({});
Bookcard1.args = {
    cover:book1,
    title:"Bring Your Human To Work",
    author:"Erica Keswin",
    time:13,
    people:12,
    onClicked:()=>{}
};

export const Bookcard2 = Template.bind({});
Bookcard2.args = {
    cover:book1,
    title:"Bring Your Human To Work",
    author:"Erica Keswin",
    time:13,
    people:12,
    button:"add",
    onClicked:()=>{}
};

export const Bookcard3 = Template.bind({});
Bookcard3.args = {
    cover:book1,
    title:"Bring Your Human To Work",
    author:"Erica Keswin",
    time:13,
    people:12,
    button:"Finished",
    onClicked:()=>{}
};

export const Bookcard4 = Template.bind({});
Bookcard4.args = {
    cover:book1,
    title:"Bring Your Human To Work",
    author:"Erica Keswin",
    time:13,
    people:12,
    button:"Read again",
    onClicked:()=>{}
};