import { Grid, Typography } from "@mui/material";
import personIcon from "../../../assets/icons/PersonIcon.png";
import Icon from "../../atoms/Icon";
import React from "react";

const useStyles = {
    style:{
        width:'96px',
        height:'18px',
        color:'#6D787E',
        fontSize:'14px',
        lineHeight:'18px',
        fontFamily:"Cera Pro",
        textAlign:'left'
    }  
}

type peopleProps = {
    people?:number
}

function PeopleRead(props:peopleProps) {
    return(
        <>
            <Grid container alignItems='self-end' justifyContent='space-between' width='88px' height='20px'>
                <Grid item display='flex' alignItems='center' width='20px' height='20px' >
                    <Icon name={personIcon} />
                </Grid>
                <Grid item display='flex' alignItems='center' width='68px' height='18px' >
                    <Typography variant="caption" sx={useStyles.style}>{props.people}k reads</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default PeopleRead;