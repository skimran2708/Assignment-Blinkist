import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    style:{
        fontSize:'16px!important',
        fontWeight:'500!important',
        width:'170px',
        height:'44px',
        color:'#03314B!important', 
        '&:hover': { 
            backgroundColor: '#2CE080',
        },
        boxShadow:'none!important'
    }
})

type buttonProps={
    onClicked:()=>void
}
  
const FinishedButton = (props: buttonProps) => {

    return (
        <Button variant='contained' onClick={props.onClicked} sx={{textTransform:'none'}} className={useStyles().style}>Finished Reading</Button>
    )
}

export default FinishedButton;
