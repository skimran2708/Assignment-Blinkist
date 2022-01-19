import { Grid, Typography } from "@mui/material";
import timeIcon from "../../../assets/icons/TimeIcon.png";
import Icon from "../../atoms/Icon";
import React from "react";

const useStyles = {
    typo:{
        width:'96px',
        height:'18px',
        color:'#6D787E',
        fontSize:'14px!important',
        lineHeight:'18px!important',
        fontWeight:'normal!important',
        fontFamily:"Cera Pro!important",
        textAlign:'left'
    }  
}

type timeProps = {
    time:number
    width:string
    height:string
}

function TimeRead(props:timeProps) {
    const {width='120px', height='20px'} = props
    return(
        <>
            <Grid container alignItems='center' justifyContent='space-between' width={props.width} height={props.height}>
                <Grid item display='flex' justifyContent='center' alignItems='center' width='20px' height='20px' >
                    <Icon name={timeIcon} />
                </Grid>
                <Grid item display='flex' alignItems='center' width='96px' height='18px' >
                    <Typography variant="caption" sx={useStyles.typo}>{props.time}-minute read</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default TimeRead;