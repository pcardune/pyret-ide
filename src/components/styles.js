export var styles = {
  errorBox: {
    fontFamily: "sans-serif",
    border: 1,
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
    container: {
      display: "flex",
      height: "inherit",
    },
    toolbar: {
      height: "80%",
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
      paddingTop: 110,
      paddingBottom: 80,
      height: 50,
      width: "auto",
      margin: "auto",
      display: "flex",
    },
  },
  toolbar: {
    base: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#C0C0C0",
      height: 40,
    },
    tools: {
      height: "inherit",
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
      border: "none",
      fontSize:"15px",
      fontFamily: "sans-serif",
      color: "white",
      marginLeft: 3,
    },
    toolbar: {
      width: 120,
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
    googleDrive: {
      float: "left",
      width: 194,
      backgroundColor: "gray"
    },
  }
};
