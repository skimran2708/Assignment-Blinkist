import React from "react";
import { render, screen } from "@testing-library/react"
import Buttons from "."
import "@testing-library/jest-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

test("Test - Button 1", () => {
    render(<Buttons
        name="Read now" 
        variant="outlined" 
        buttonStyle={{fontSize:'16px',fontWeight:'500',width:'122px',height:'44px',color:'#22C870',borderColor:'black',textTransform:'none'}} 
    />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Read now");
})

test("Test - Button 2", () => {
    render(<Buttons
        name="Finished Reading" 
        variant="contained" 
        buttonStyle={{fontSize:'16px',fontWeight:'500',width:'170px',height:'44px',color:'#03314B', textTransform:'none','&:hover': { backgroundColor: '#2CE080'},boxShadow:'none'}} 
        onClicked={()=>{}} 
    />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Finished Reading");
})

test("Test - Button 3", () => {
    render(<Buttons
        name="Send to Kindle" 
        variant="text" 
        buttonStyle={{fontSize:'16px',width:'151px',height:'44px',color:'#6D787E', padding:'6px',textTransform:'none'}} 
        endIcon={<ArrowForwardIcon />}
    />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Send to Kindle");
})

test("Test - Button 4", () => {
    render(<Buttons
        variant="text" 
        name="Add to library" 
        startIcon={<AddIcon />} 
        onClicked={()=>{}} 
        buttonStyle={{fontSize:'16px', width:'284px', height:'52px', textTransform:'inherit', marginLeft:'-16px', border:'1px solid #E1ECFC', borderRadius: '0px 0px 8px 8px', color:'#0365F2', '&:hover':{color: '#FFFFFF',backgroundColor: '#0365F2'}}}
    />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Add to library");
})