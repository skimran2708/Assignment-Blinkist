import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, SxProps } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../../App";

const useStyles:SxProps = {
    buttonStyle:{
        fontSize:'16px',
        fontWeight:500,
        width:'79px',
        height:'23.33px',
        color:'#03314B', 
        textTransform:'none',
        border:'1px solid #FFFFFF',
        transition:'unset',
        padding:'0px 0px 3.33px 0px',
        borderRadius: '0px',
        ":hover":{
            border:'1px solid #FFFFFF',
        }
    }
}

const ExploreButton = () => {

    const [isOpen, setModal] = useState(false);

    const clicked = useContext(UserContext)

    const openExploreMenu=()=>{
        setModal(!isOpen)
        clicked()
    }

    var dropDown: any;
    var bdrClr: string;

    if(isOpen)
    {
        dropDown = <KeyboardArrowUpIcon sx={{width:'20px', height:'20px', margin:'0px'}} />
        bdrClr = "#2CE080"
    }

    else
    {
        dropDown = <KeyboardArrowDownIcon sx={{width:'20px', height:'20px', margin:'0px'}} />
        bdrClr = "#FFFFFF"
    }

    return(
        <>
            <Button variant='outlined' disableRipple={true} onClick={openExploreMenu}
                sx={[useStyles.buttonStyle, {borderBottomColor:bdrClr,":hover":{border:'1px solid #FFFFFF',borderBottomColor:bdrClr,}}]} 
                endIcon={dropDown} >
                Explore
            </Button>
        </>
    )
}

export default ExploreButton;