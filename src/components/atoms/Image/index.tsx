import React from "react";

type imageProps = {
    name: string
    width?: number
    height?: number
}

function Image(props: imageProps) {
    return <img src={props.name} style={{width:props.width , height:props.height}} alt={props.name} />;
}

export default Image;