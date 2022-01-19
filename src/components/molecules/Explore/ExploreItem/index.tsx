import { Button, SxProps } from "@mui/material";
import Icon from "../../../atoms/Icon";

const styles:SxProps = {
    buttonStyle:{
        marginLeft:'4px',
        fontSize:'16px',
        fontWeight:500,
        width:'310px',
        height:'24px',
        color:'#6D787E', 
        textTransform:'none',
        padding:'0px',
        justifyContent:'flex-start',
        ":hover":{
            color:'#0365F2'
        }
    }
}

type categoryProps = {
    iconName: string
    categoryName: string
    onClick?:() => any
}

const ExploreItem = (props:categoryProps) => {
    return(
        <>
        <Button variant="text" disableRipple={true} onClick={props.onClick} sx={styles.buttonStyle} startIcon={<Icon name={props.iconName} />}>
            {props.categoryName}
        </Button>
        </>
    )
}

export default ExploreItem;