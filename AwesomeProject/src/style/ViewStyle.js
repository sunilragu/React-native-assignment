import { StatusBar, StyleSheet } from "react-native";

const textStyle = StyleSheet.create({

    baseText:{
        fontFamily:'Cochin'

    },
    titleText:{
        fontSize:20,
        fontWeight:'bold'
    }
});

const textInputStyle = StyleSheet.create({

    input:{
        height:20,
        margin:20,
        padding:20,
        borderWidth:1,
    },
});

const imageStyle = StyleSheet.create({
    imgView:{
        paddingTop :20,
    },
    logo:{
        width:50,
        height:50,
    },
});

const scrollViewstyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      width:'80%',
      maxHeight:'30%',  
      backgroundColor: 'yellow',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });

  const modelStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });


export {textInputStyle,textStyle,imageStyle,scrollViewstyles,modelStyles};
