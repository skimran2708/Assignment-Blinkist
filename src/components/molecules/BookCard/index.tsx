import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import TimeRead from "../TimeRead";
import PeopleRead from "../PeopleRead";
import moreIcon from "../../../assets/icons/MoreIcon.png";
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';
import Buttons from "../../atoms/Buttons";

const useStyles = makeStyles({
    cardStyle:{
        background: '#FFFFFF',
        width: '284px',
        height: '466px',
        borderRadius:'8px!important',
        border: '1px solid #E1ECFC',
        boxShadow:'none!important',
        // margin:'30px 30px 0px 0px'
    },

    cardDetails:{
        textAlign:'left',
        marginBottom:'16px!important',
    },

    subtitle1:{
        height:'23px',
        color:'#03314B',
        fontSize:'18px!important',
        fontWeight:'bold!important',
        fontFamily:"unset!important",          
    },

    body2:{
        color: '#6D787E',
        fontSize: '16px!important',
        height:'20px',
        fontFamily:"unset!important",
        lineHeight:'20px!important'
    },

    readBoxempty:{
        position:'absolute',
        marginLeft:'-16px',
        width:'283px',
        height:'15px',
        backgroundColor:'#F1F6F4',
        borderRadius:'0px 0px 8px 8px', 
        border:'1px solid #E1ECFC',
    },

    readBoxfilled:{
        position:'absolute',
        marginLeft:'-16px',
        width:'88px',
        height:'15px',
        backgroundColor:'#E1ECFC',
        borderRadius:'0px 0px 0px 8px', 
        border:'1px solid #E1ECFC',
    },

});

type bookProps = {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
    onClicked:Function
}

function BookCard(props: bookProps){
    const classes=useStyles();
    var readDetails:any;
    var cardBottom:any;
    var bottomMargin='20px'
    if(props.people)
    {
        readDetails=<PeopleRead people={props.people} />
    }

    if(props.button==="add")
    {
        bottomMargin='11px'
        cardBottom=(
            <Buttons variant="text" name="Add to library" startIcon={<AddIcon />} onClicked={()=>props.onClicked(props.title)} buttonStyle={{fontSize:'16px', width:'284px', height:'52px', textTransform:'inherit', marginLeft:'-16px', border:'1px solid #E1ECFC', borderRadius: '0px 0px 8px 8px', color:'#0365F2', '&:hover':{color: '#FFFFFF',backgroundColor: '#0365F2'}}} />
        )
    }
    else if(props.button==="Read again" || props.button==="Finished")
    {
        bottomMargin='0px'
        cardBottom=(
            <>
            <Button variant="text" sx={{fontSize:'16px', width:'284px', height:'46px', textTransform:'inherit', marginLeft:'-16px', color:'#0365F2'}}>
                {props.button}
            </Button>
            <Box sx={{backgroundColor:'#E1ECFC'}} className={classes.readBoxempty} />
            </>
        )
    }
    else
    {
        cardBottom=(
            <>
                <img src={moreIcon} alt="More" style={{bottom:'37px', left:'247px', margin:'0px 0px 20px 230px'}} />
                <Box className={classes.readBoxempty} />
                <Box className={classes.readBoxfilled} />
            </>
        )
    }
    
    return(
        <>
            <Card className={classes.cardStyle}>
                <CardMedia
                    component="img"
                    width="294.1"
                    height="292"
                    image={props.cover}
                    alt="Book Cover"
                />
                <CardContent>
                        <Typography variant="subtitle1" className={clsx(classes.cardDetails,classes.subtitle1)} >{props.title}</Typography>
                        <Typography variant="body2" className={clsx(classes.cardDetails,classes.body2)}>{props.author}</Typography>
                        <Grid container alignItems='center' justifyContent='space-between' height='20px' marginBottom={bottomMargin}>
                            <Grid item display='flex' alignItems='center' width='120px' height='20px' >
                                <TimeRead time={props.time} width="120px" height="20px"/>
                            </Grid>
                            <Grid item display='flex' alignItems='center' width='88px' height='20px' >
                                {readDetails}
                            </Grid>
                        </Grid>
                        {cardBottom}
                </CardContent>
            </Card>
        </>
    )
}

export default BookCard;