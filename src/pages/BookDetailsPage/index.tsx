import { Grid, Typography } from "@mui/material";
import BookDetailsTab from "../../components/molecules/BookDetailsTab";
import BookInfo from "../../components/organisms/BookInfo";
import React from "react";

const BookDetailsPage = () => {

    return(
        <>
            <Grid container flexDirection="column" width='1440px' height='895px' padding='60px 238px 0px 264px'>

                <Grid item>
                    <Typography variant='body2' sx={{lineHeight:'20px', color:'#03314B', textAlign:'left'}}>Get the key ideas from</Typography>
                </Grid>

                <Grid item marginTop='40px'>
                    <BookInfo />
                </Grid>

                <Grid item width='600px' paddingTop='60px'>
                    <BookDetailsTab />
                </Grid>

                <Grid item>
                    <hr style={{border:'1px solid #E1ECFC', marginTop:'80px'}} />
                </Grid>

            </Grid>
        </>
    )
}

export default BookDetailsPage;