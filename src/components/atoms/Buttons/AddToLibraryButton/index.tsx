import AddIcon from '@mui/icons-material/Add';
import { Button, SxProps } from "@mui/material";

const useStyles:SxProps = {
    buttonStyle:{
        fontSize:'16px',
        width:'284px', 
        height:'52px', 
        textTransform:'inherit', 
        marginLeft:'-16px', 
        border:'1px solid #E1ECFC', 
        borderRadius: '0px 0px 8px 8px', 
        '&:hover':{
            color: '#FFFFFF',
            backgroundColor: '#0365F2'
        }
    }
}

const AddToLibrary = () => {
    return(
        <>
        <Button variant="text" startIcon={<AddIcon />} sx={useStyles.buttonStyle}>
        Add to library
        </Button>
        </>
    )
}

export default AddToLibrary;