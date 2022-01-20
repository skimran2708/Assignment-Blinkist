import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import book11 from "../../../assets/images/cover11.png";
import { currentlyReading, finishedReading } from "../../../db";
import TimeRead from "../../molecules/TimeRead";
import React from "react";
import Buttons from "../../atoms/Buttons";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const BookInfo = () => {

    const {title} = useParams();
    const navigator = useNavigate();
    var temp:any
    const onAdd = () => {
        temp = currentlyReading.find(book => book.title === title)
        temp.button = "Read again"
        const index = currentlyReading.indexOf(temp)
        currentlyReading.splice(index,1)
        finishedReading.push(temp)
        navigator("/")
    }
    console.log(temp)

    return(
        <>
            <Grid container width='938px' height='304px' justifyContent='space-between'>

                        <Grid item>
                            <Grid container direction="column">
                                <Grid item >
                                    <Typography variant='h1' sx={{color:'#03314B', textAlign:'left' }} >
                                        Beyond Entrepreneurship 2.0
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ marginTop: "24px" }}>
                                    <Typography variant='subtitle2' sx={{ fontWeight:'normal', fontSize:'20px', color:'#03314B', lineHeight:'25px', textAlign:'left' }} >
                                        Turning Your Business into an Enduring Great Company
                                    </Typography>
                                </Grid>

                                <Grid item textAlign='left' sx={{ marginTop: "24px" }}>
                                    <Typography variant='body1' sx={{ fontWeight:'normal', lineHeight:'20px', color:'#6D787E' }} >
                                        By Jim Collins and Bill Lazier
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ marginTop: "16px" }}>
                                    <TimeRead time={15} width="128px" height="24px" />
                                </Grid>

                                <Grid item sx={{ marginTop: "80px" }}>
                                    <Grid container columnSpacing="24px" justifyContent='left' >
                                        <Grid item>
                                            <Buttons name="Read now" variant="outlined" buttonStyle={{fontSize:'16px',fontWeight:'500',width:'122px',height:'44px',color:'#22C870',borderColor:'black',textTransform:'none'}} />
                                        </Grid>
                                        <Grid item>
                                            <Buttons name="Finished Reading" variant="contained" buttonStyle={{fontSize:'16px',fontWeight:'500',width:'170px',height:'44px',color:'#03314B', textTransform:'none','&:hover': { backgroundColor: '#2CE080'},boxShadow:'none'}} onClicked={onAdd} />
                                        </Grid>
                                        <Grid item>
                                            <Buttons name="Send to Kindle" variant="text" buttonStyle={{fontSize:'16px',width:'151px',height:'44px',color:'#6D787E', padding:'6px',textTransform:'none'}} endIcon={<ArrowForwardIcon />} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item>
                            <Card>
                                <CardMedia component="img" height="304px" width="304px" image={book11} alt="Book"/>
                            </Card> 
                        </Grid>

            </Grid>
        </>
    )
}

export default BookInfo;