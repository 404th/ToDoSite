import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  cover:{
    width:'100%',
    height:'100vh',
  },
  first:{
    width:'100%',
    height:'30%',
  },
  second:{
    width:'100%',
    height:'70%',
  },
  firstGrid:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-around",
    width:"100%",
    height:"100%",
  },
  secondGrid:{
    width:'100%',
    height:'100%',
  },
  buttonlar:{
    width:"20%",
    height:"45%",
    fontSize:"6vh",
    color:"white",
    borderRadius:"8px",
    border:"none",
    userSelect:"none",
    transition:".3s",
    boxShadow:" 0 0 28px -12px rgba( 0 , 0 , 0 , .5 ) ",
    background:"linear-gradient( to right , rgba( 0 , 0 , 0 , .8 )  , rgba( 0 , 0 , 0 , .4 )  )",
    '&:hover':{
      color:"white",
      transform:"scale( 1.023 )",
    },
    '&:active':{
      color:"black",
      boxShadow:" 0 0 28px -12px rgba( 0 , 0 , 0 , .7 )",
      transform:"scale( .95 )",
      background:"linear-gradient( to right , rgba( 0 , 0 , 0 , .4 ) , rgba( 0 , 0 , 0 , .7 ) )",
    }
  },
  item:{
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:"8px",
    backgroundColor:"rgba( 0 , 0 , 0 , .8 )",
  },
  work:{
    width:"60%",
    backgroundColor:"white",
    minHeight:"40px",
    padding:"4px",
    textAlign:"center",
    borderRadius:"4px",
    boxShadow:"0 0 20px -10px rgba( 0 , 0 , 0 , .5 )",
    userSelect:"none",
  },
  firstDiv:{
    width:"100%",
    height:"100%",
  },
  roww:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
  },
  one:{
    width:"85%",
    height:"100%",
    padding:"2px",
  },
  oneInside:{
    width:"100%",
    height:"100%",
    overflowWrap:"break-word",
  },
  two:{
    width:"15%",
    height:"100%",
    padding:"2px",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"row",
  },
  twoButton:{
    width:"60%",
    height:"50%",
    borderRadius:"6px",
    border:"none",
    color:"white",
    backgroundColor:"blue",
    textDecoration:"none",
    '&:hover':{
      color:"blue",
      backgroundColor:"white"
    },
    '&:active':{
      backgroundColor:"red",
    },
    '&:focus':{
      outline:"none",
    }
  },
  textValue:{
    minHeight:"160px",
    width:"90%",
    boxShadow:"0 0 10px -22px rgba( 0 , 0 , 0 , .5 )",
    borderRadius:"5px",
    outline:"none",
    margin:"4px auto",
  },
  root: {
    display: "flex",
    backgroundColor:"rgba( 0 , 0 , 0 , .5 )",
  },
  hide: {
    display: "none",
  },
  drawer: {
    height: "20%",
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor:'rgba( 0 , 0 , 0 , .4 )',
    width: "15%",
  },
  content: {
    flexGrow: 1,
    marginTop: "-20%",
  },
  contentShift: {
    marginTop: 0,
  },
  btnCover:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    flexWrap:"no-wrap",
    justifyContent:"space-around",
    alignItems:'center',
    textDecoration:"none",
  },
  btnCoverbtn:{
    width:"20%",
    border:"none",
    outline:"none",
    borderRadius:"3px",
    textDecoration:"none",
    color:"white",
    textAlign:"center",
    backgroundColor:'#6495ED',
    '&:hover':{
      textDecoration:"none",
    },
  },
  appBar:{
    backgroundColor:"rgba( 0 , 0 , 0 , .6 ) !important"
  },
  x:{
    color:"white",
    outline:"none",
    border:"none",
    "&:active":{
      border:"none",
      outline:"none"
    },
    "&:hover":{
      backgroundColor:"initial"
    }
  }

})