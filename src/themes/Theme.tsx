import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily:"unset",
        h1:{
            // fontFamily:"Cera Pro",
            fontSize:'36px',    //used in bookdetails
            lineHeight:'45px',
            fontStyle:'normal',
            fontWeight:'bold',
            color:'#353430',
        },

        h3:{
            // fontFamily:"Cera Pro",
            fontSize:'24px',
            lineHeight:'30px',
            fontStyle:'normal',
            fontWeight:'bold',
            color:'#353430',
        },

        subtitle1:{
            // fontFamily:"Cera Pro",
            fontSize:'24px', 
            lineHeight:'32px',
            fontStyle:'normal',
            fontWeight:500,
            color:'#353430',
        },

        subtitle2:{
            // fontFamily:"Cera Pro",
            fontSize:'18px',
            lineHeight:'23px', //used in banner
            fontStyle:'normal',
            fontWeight:'bold',
            color:'#353430',
        },

        body1:{
            // fontFamily:"Cera Pro",
            fontSize:'16px',
            lineHeight:'24px',      //used in bookdetails &..
            fontStyle:'normal',
            fontWeight:'bold',
            color:'#353430',
        },

        body2:{
            // fontFamily:"Cera Pro",
            fontSize:'16px',
            lineHeight:'24px',      //used in bookdetails synopsis
            fontStyle:'normal',
            fontWeight:'normal',
            color:'#353430',
        },
        

        caption:{
            fontFamily:'',
            fontStyle:'normal', //used in footer don't change
            fontSize:'14px',
            fontWeight:'normal',
            lineHeight:'22px',
            color:'#6D787E',
            textAlign:'left'
        },
        
    },

    palette:{
        primary:{
            main:'#2CE080'
        },

        secondary:{
            main:'#0365F2'
        }
    },

    components:{
        MuiButton:{
            styleOverrides:{
                textPrimary:'#0365F2'
            }
        }
    }

});

export default theme;





// const theme = createTheme({
//     typography: {
//         h1:{
//             fontFamily:"Cera Pro",
//             fontSize:'36px',
//             lineHeight:'45px',
//             fontStyle:'normal',
//             width:'178px',
//             height:'45px',
//             fontWeight:'bold',
//             color:'#03314B',
//         },

//         h2:{
//             fontWeight:'500px',
//             fontSize:'18px',
//             textAlign: 'center',
//             color: 'white',
//             margin:'10px 0px 0px 420px',
//             alignItems: 'center'
//         },

//         body1:{
//             display: 'flex',
//             alignItems: 'center', 
//             color: '#03314B',
//             fontSize: '16px',
//             height:'20px',
//             fontFamily:"",
//             fontWeight:500,
//             lineHeight:'20px'
//         },

//         subtitle1:{
//             display: 'flex',
//             textAlign: 'left',
//             color: '#0365F2',
//             fontSize: '24px',
//             // width:'378px',
//             height:'64px',
//             lineHeight:'32px',
//             fontFamily:"",
//             fontWeight:500
//         },

//         caption:{
//             fontFamily:'',
//             fontStyle:'normal',
//             fontSize:'14px',
//             fontWeight:'normal',
//             lineHeight:'22px',
//             color:'#6D787E',
//             textAlign:'left'
//         },

//         body2:{
//             alignItems: 'center', 
//             color: '#6D787E',
//             fontSize: '16px',
//             height:'20px',
//             fontFamily:"",
//             fontWeight:'normal',
//             lineHeight:'20px',
//             margin:'0px',
//             textAlign:'left'
//         },
        
//     }

// });