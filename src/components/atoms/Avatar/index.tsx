import { Avatar, SxProps } from "@mui/material";

const useStyles:SxProps = {
    avatar:{
        backgroundColor:'#69A6E3!important',
    }  
}

type avatarProps={
    letter:string
}

const AvatarIcon = (props:avatarProps) => {
    return <Avatar sx={useStyles.avatar}>{props.letter}</Avatar>
}

export default AvatarIcon;
