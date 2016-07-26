export var styles = {
  errorBox: {
    fontFamily: "sans-serif",
    borderWidth: 1,
    borderColor: "#FF3131",
    borderStyle: "dashed",
    padding: 3,
    borderRadius: 3,
    background: "#FFF2F2",
    position: "relative",
    top: 8,
    left: 6,
  },
  logos: {
    toolbar: {
      height: 36,
      marginTop: 2,
      alignSelf: "center",
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  spinners: {
    toolbar: {
      height: 30,
    },
    window: {
    },
  },
  toolbar: {
    base: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#C0C0C0",
      flexBasis: 40,
      flexShrink: 0,
    },
    tools: {
      display: "flex",
      justifyContent: "flex-start",
    },
    controls: {
      height: "inherit",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  forms: {
    width: 194,
  },
  buttons: {
    base: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: 150,
      borderWidth: 0,
      fontSize:"15px",
      fontFamily: "sans-serif",
      color: "white",
    },
    toolbar: {
      width: 100,
      marginLeft: 2,
      backgroundColor: "gray",
    },
    run: {
      waiting: {
        backgroundColor: "#317BCF"
      },
      running: {
        color: "gray",
      },
    },
    stop: {
      stopping: {
        backgroundColor: "#FF0000",
        color: "white",
      },
      waiting: {
        color: "gray",
      },
    },
    more: {
      moreButton:{
        height: 40,
        width: 75,
        position: "absolute",
        marginLeft: 3,
        justifyContent: "center",
      },
      menuContainer: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        marginTop: 40,
        marginLeft: 3,
        zIndex: 1,
      },
      menuItems: {
        justifyContent: "space-between",
        fontSize: 16,
        height: 40,
        width: 180,
        color: "black",
        backgroundColor: "#EFEFEF",
        textDecoration: "none",
      },
      fontButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#DDDDDD",
        height: 40,
        fontFamily: "sans-serif",
        borderStyle: "solid",
        borderWidth: "1.5px",
        borderColor: "rgba(0,0,0,0.1)",
        borderRightWidth: 0,
        borderLeftWidth: 0,
      },
      fontSizeButtons: {
        color: "black",
        width: 36,
        height: "inherit",
        borderStyle: "solid",
        borderWidth: "1.5px",
        borderColor: "rgba(0,0,0,0.1)",
        borderTopWidth: 0,
        borderBottomWidth: 0,
      },
    },
    googleDrive: {
      float: "left",
      width: 194,
      backgroundColor: "gray"
    },
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
};
