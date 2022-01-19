import { Grid } from "@mui/material";
import BookCard from "../BookCard";
import { currentlyReading, finishedReading } from "../../../db";

type panelProps = {
    value:number
}

const TabPanel = (props:panelProps) =>{
    var books;
    if(props.value===0)
        books = currentlyReading
    else
        books = finishedReading
    return(
        <>
            <Grid container width='912px' rowGap='30px' columnGap='27px' padding='30px 0px 111px 0px' >
                {books.map(book => 
                    <BookCard cover={book.cover} title={book.title} author={book.author} time={book.time} people={book.people} button={book.button} onClicked={()=>{}}/>
                    )}
            </Grid>

        </>
    )
}

export default TabPanel;