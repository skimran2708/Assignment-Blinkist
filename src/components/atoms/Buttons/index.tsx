import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";

type buttonProps = {
    name:string,
    variant:"text"|"contained"|"outlined"
    startIcon?:ReactNode,
    endIcon?:ReactNode,
    buttonStyle:SxProps
    onClicked?:()=>void
}

const Buttons = (props:buttonProps) => {
    return(
        <>
        <Button variant={props.variant} startIcon={props.startIcon} sx={props.buttonStyle} endIcon={props.endIcon} onClick={props.onClicked} >
            {props.name}
        </Button>
        </>
    )
}

export default Buttons;