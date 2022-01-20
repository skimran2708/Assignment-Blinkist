import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Buttons from '.';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
    title: 'Atoms/Buttons',
    component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

export const AddToLibrary = Template.bind({});
AddToLibrary.args = {
    variant:"text", 
    name:"Add to library", 
    startIcon:<AddIcon />, 
    onClicked:()=>{},
    buttonStyle:{fontSize:'16px', width:'284px', height:'52px', textTransform:'inherit', marginLeft:'-16px', border:'1px solid #E1ECFC', borderRadius: '0px 0px 8px 8px', color:'#0365F2', '&:hover':{color: '#FFFFFF',backgroundColor: '#0365F2'}}
};

export const ReadNow = Template.bind({});
ReadNow.args = {
    variant:"outlined", 
    name:"Read now", 
    buttonStyle:{fontSize:'16px',fontWeight:'500',width:'122px',height:'44px',color:'#22C870',borderColor:'black',textTransform:'none'}
};

export const FinishedReading = Template.bind({});
FinishedReading.args = {
    variant:"contained", 
    name:"Finished Reading", 
    buttonStyle:{fontSize:'16px',fontWeight:'500',width:'170px',height:'44px',color:'#03314B', textTransform:'none','&:hover': { backgroundColor: '#2CE080'},boxShadow:'none'},
    onClicked:()=>{}
};

export const Kindle = Template.bind({});
Kindle.args = {
    variant:"text", 
    name:"Send to Kindle", 
    buttonStyle:{fontSize:'16px',width:'151px',height:'44px',color:'#6D787E', padding:'6px',textTransform:'none'},
    endIcon:<ArrowForwardIcon />
};