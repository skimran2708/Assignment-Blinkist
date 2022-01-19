import { Button, Grid } from "@mui/material";
import { useState } from "react";

const styles = {
    selected:{
        alignText: 'left', 
        margin:'0px',
        color: '#116BE9',
        fontSize: '16px',
        height:'20px',
        fontWeight:'bold',
        lineHeight:'20px',
        textTransform:'unset',
        padding:'0px'
    },
    unselected:{
        alignText: 'left',
        margin:'0px',
        color: '#6D787E',
        fontSize: '16px',
        height:'20px',
        fontWeight:500,
        lineHeight:'20px',
        textTransform:'unset',
        padding:'0px'
    }     
}

type barProps={
    list:(tab:string)=>any
}

function ExploreBar(props:barProps) {

    const [buttonId, setButtonId] = useState("1")

const handleClick = (event:any) => {
    setButtonId(event.target.id)
    props.list(event.target.id)
}

    return(
        <>
            <Grid container justifyContent='space-between' width='723px'>
                <Button id="1" variant="text" disableRipple={true} sx={buttonId==="1" ? styles.selected : styles.unselected} onClick={handleClick}>Explore by category</Button>
                <Button id="2" variant="text" disableRipple={true} sx={buttonId==="2" ? styles.selected : styles.unselected} onClick={handleClick}>See recently added titles</Button>
                <Button id="3" variant="text" disableRipple={true} sx={buttonId==="3" ? styles.selected : styles.unselected} onClick={handleClick}>See popular titles</Button>
            </Grid>
        </>
    )
}

export default ExploreBar;