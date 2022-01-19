import { Grid } from "@mui/material";
import React from "react";
import searchIcon from "../../../assets/icons/SearchIcon.png";
import logo from "../../../assets/images/BlinkistLogo.png";
import ExploreButton from "../../atoms/Buttons/ExploreButton";
import Icon from "../../atoms/Icon";
import Image from "../../atoms/Image";
import AvatarNavItem from "../../molecules/AvatarNavItem";
import NavItem from "../../molecules/NavItem";

const useStyles = {
    container: {
        width:'1440px',
        height:'86px',
        alignItems: 'center',
        padding:'0px 250px'
    }
}

function Header() {
    return (
        <>
            <Grid container sx={useStyles.container}>
                <Grid item marginRight='42.91px'>
                    <Image name={logo} />
                </Grid>
                <Grid item marginRight='40px'>
                    <Icon name={searchIcon}/ >
                </Grid>
                <Grid item margin='3.33px 36px 0px 0px'>
                    <ExploreButton /> 
                </Grid>
                <Grid item>
                    <NavItem name="My Library" icon={false} />
                </Grid>
                <Grid item marginLeft='auto'>
                    <AvatarNavItem user='S' />
                </Grid>
            </Grid>
        </>
    )
}

export default Header;