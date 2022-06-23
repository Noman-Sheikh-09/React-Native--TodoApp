import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        marginLeft:30,
        fontSize:16,
      },
      buttonsContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        position:"relative",
        top:20
      },
      modalText: {
        marginBottom: 15,
        fontSize:16,
      },
})