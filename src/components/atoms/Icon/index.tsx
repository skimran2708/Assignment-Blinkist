import React from "react";

type iconProps = {
    name: string
    width?: number
    height?: number
}

function Icon(props: iconProps) {
    return <img src={props.name} style={{width:props.width , height:props.height}} alt={props.name} />;
}

export default Icon;