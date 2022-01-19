import { Typography } from "@mui/material";
import React from "react";

type textProps={
    text:string
    variant:"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit"
    fontFamily:""
    width?:number
    height?:number
}

function Text(props:textProps){
    return(
        <>
        <Typography variant={props.variant} sx={{fontFamily:props.fontFamily, width:props.width, height:props.height}}>{props.text}</Typography>
        </>
    )
}

export default Text;