import {
    StyleSheet
  } from "react-native";
  
  const styles: any = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
    loadingContainer: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.5,
      },
      loadingIndicator: {
        flex: 1,
        alignItems: 'center',
      },
      header: {
        height:50,
        backgroundColor: "#263238",
        borderBottomColor: "white",
        borderBottomWidth: 5,
        marginBottom: 2
    },
  });
  export default styles;