import { Button, SxProps } from '@mui/material';
import React from 'react';

const useStyles:SxProps = {
    buttonStyle:{
        fontSize:'16px',
        fontWeight:'500',
        width:'122px',
        height:'44px',
        color:'#22C870',
        borderColor:'black!important',
        textTransform:'none'
    }
}

const ReadNowButton = () => {
    return (
        <Button variant='outlined' sx={useStyles.buttonStyle}>
            Read now
        </Button>
    )
}

export default ReadNowButton
