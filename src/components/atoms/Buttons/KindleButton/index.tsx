import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, SxProps } from '@mui/material';
import React from 'react';

const useStyles:SxProps = {
    buttonStyle:{
        fontSize:'16px',
        width:'151px',
        height:'44px',
        color:'#6D787E', 
        padding:'6px',
        textTransform:'none'
    }
}

const KindleButton = () => {
    return (
        <Button variant='text' sx={useStyles.buttonStyle} endIcon={<ArrowForwardIcon/>} >
            Send to Kindle
        </Button>
    )
}

export default KindleButton;
