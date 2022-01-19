import { InputAdornment, TextField } from "@mui/material";
import searchIcon from "../../../assets/icons/SearchIcon.png";
import Icon from "../../atoms/Icon";

const SearchBar = () => {
    return (
        <>
            <TextField variant="standard" placeholder="Search by title or author "
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <Icon name={searchIcon} width={23.7} height={23.7}/>
                        </InputAdornment>
                    ),
                    style:{
                        fontSize:'24px',
                        fontWeight:'700',
                        color:'black',
                        height: '46px',
                        width:'658px',
                        fontFamily:'unset',
                    }
                }}

                inputProps={{
                    style:{
                        marginLeft:'24px',
                        padding:'0px'
                    }
                }}

                

            />
        </>
    )
}

export default SearchBar;