import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import book11 from "../../../assets/images/cover11.png";
import { currentlyReading, finishedReading } from "../../../db";
import FinishedButton from "../../atoms/Buttons/FinishedButton";
import KindleButton from "../../atoms/Buttons/KindleButton";
import ReadNowButton from "../../atoms/Buttons/ReadNowButton";
import TimeRead from "../../molecules/TimeRead";



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
                                            <ReadNowButton />
                                        </Grid>
                                        <Grid item>
                                            <FinishedButton onClicked={onAdd} />
                                        </Grid>
                                        <Grid item>
                                            <KindleButton />
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