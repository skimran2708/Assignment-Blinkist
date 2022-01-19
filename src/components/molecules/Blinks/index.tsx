import { Grid, SxProps, Typography } from "@mui/material";
import BookCard from "../BookCard";
import { trendingBlinks, justAddedBlinks, audioBlinks } from "../../../db";
import { useNavigate } from "react-router-dom";
import React from "react";

const styles:SxProps = {
    fontStyle:'normal',
    color:'#03314B',
    textAlign:'left',
}

const Blinks = () =>{
    const categoryName = ["Trending Blinks", "Just added", "Featured audio blinks"]
    const categoryType = [trendingBlinks, justAddedBlinks, audioBlinks]
    var index=0;

    const navigator = useNavigate();

    const onClick = (title:string) => {
        navigator("/bookDetails/"+title)
    }

    return(
        <>
        {categoryType.map(books => (
            <>
                <Grid item marginTop='80px'>
                    <Typography variant="h3" sx={styles}>{categoryName[index++]}</Typography>
                </Grid>  
                <Grid container width='912px' rowGap='30px' paddingTop='30px' justifyContent='space-between'>          
                    {books.map(book => 
                        <BookCard cover={book.cover} title={book.title} author={book.author} time={book.time} people={book.people} button={book.button} onClicked={onClick}/>
                    )}
                </Grid>
            </>
        ))}
        </>
    )
}

export default Blinks;