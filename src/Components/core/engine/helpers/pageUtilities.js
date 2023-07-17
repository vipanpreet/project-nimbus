// RESPONSIVE ARRAY BREAKPOINTS INDEXES
// [0 - 420, 1 - 720, 2 - full]

export const newContainer = () => {
  let randomId = String(Math.floor(100 * Math.random() * 100));
  let container = {
    id: randomId,
    settings: {
      type: "fluid",
      label: "",
    },
    styling: {
      main: {
        background: "#ffffff",
        paddingTop: "0px",
        paddingBottom: "30px",
        paddingLeft: "0px",
        paddingRight: "0px",
      },
    },
  };
  container["rows"] = [newRow(container)];
  return container;
};

export const newRow = (container) => {
  let randomId = String(Math.floor(Math.random() * 1000000));
  let row = {
    id: randomId,
    containerId: typeof container === "string" ? container : container.id,
    classes: {},
    styling: {
      main: {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginTop: "5px",
        marginBottom: "5px",
        marginLeft: "0px",
        marginRight: "0px",
        backgroundSize: "cover",
        backgroundPosition: "left",
      },
    },
    settings: {
      cols: "",
      type: "regular",
      bg: {
        position: "left",
        color1: "transparent",
        color2: "transparent",
      },
    },
    columns: [],
  };
  return row;
};

export const newColumn = (row, rowId) => {
  let randomId = String(Math.floor(Math.random() * 10000000));
  let column = {
    id: randomId,
    containerId: row.containerId,
    rowId: rowId ? rowId : row.id,

    classes: {
      // normal classes related to design
    },
    settings: {
      type: "",
    },
    elements: [],
  };
  if (rowId) {
    console.log("Parser=>", row.columnId);
    column["innerRowId"] = row.id;
    column["columnId"] = row.columnId;
  }
  return column;
};

export const newInnerRow = async (element, id) => {
  let row = {
    id,
    containerId: element.containerId,
    rowId: element.rowId,
    columnId: element.id,
    classes: {},
    element: "InnerRow",
    styling: {
      main: {
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        backgroundSize: "cover",
        backgroundPosition: "left",
      },
    },
    settings: {
      cols: "",
      type: "regular",
      bg: {
        position: "left",
        color1: "transparent",
        color2: "transparent",
      },
    },
    columns: [],
  };
  return row;
};
export const newElement = async (type, column, id, inner) => {
  // let randomId = id;
  let element = {
    settings: {
      link: "",
      linkTarget: "same",
      label: "",
      genericLocation: "bottom",
    },
    styling: {},
  };

  element.id = id;
  element.columnId = inner ? column.columnId : column.id;
  element.rowId = column.rowId;
  element.containerId = column.containerId;

  if (inner) {
    element.innerRowId = column.innerRowId;
    element.innerColumnId = column.id;
  }

  switch (type) {
    case "Image":
      return await newImage(element);
    case "Text":
      return await newText(element);
    case "IconText":
      return await newIconText(element);
    case "Button":
      return await newButton(element);
    case "Product":
      return await newProduct(element);
    case "Slider":
      return await newSlider(element);
    case "Wysiwyg":
      return await newWysiwyg(element);
    case "CustomWysiwyg":
      return await newCustomWysiwyg(element);
    case "ImageHotspot":
      return await newImageHotspot(element);
    case "Seperator":
      return await newSeperator(element);
    default:
      return element;
  }
};

const newImage = async (element) => {
  element["element"] = "Image";
  element["content"] = {
    image: {
      url: "https://arktastic.s3.ap-southeast-2.amazonaws.com/extras/sigma-image-placeholder.jpeg",
      // urlHover:
      //   "https://images.unsplash.com/photo-1490401476932-bbc58979db84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      alt: "alt text",
    },

    text: {
      data: "",
      url: "",
    },
  };
  element.styling = {
    main: {
      paddingTop: ["0px", "0px", "0px"],
      paddingBottom: ["0px", "0px", "0px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
      // margin
      marginTop: ["0px", "0px", "0px"],
      marginBottom: ["0px", "0px", "0px"],
      marginLeft: ["0px", "0px", "0px"],
      marginRight: ["0px", "0px", "0px"],
      // remaning
      width: ["100%", "100%", "100%"],

      height: "auto",
      borderRadius: "0px",
      overflow: "hidden",
    },
    text: {
      fontSize: ["14px", "16px", "16px"],
      lineHeight: ["16px", "18px", "18px"],
      letterSpacing: ["0px", "0px", "0px"],
      fontWeight: ["400", "400", "400"],

      // DONE
      top: "90%",
      left: "50%",
      color: "#454545",
      // ---- TO BE ADDED ON SPOT TO SAVE UNNECESSARY CSS ---
      // background: "transparent",
      // transitionDuration: "0.3s",
      // "&:hover": {
      //   color: "#ffffff",
      // },

      // Padding
      paddingTop: ["0px", "0px", "0px"],
      paddingBottom: ["0px", "0px", "0px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
    },
  };

  return element;
};

const newImageHotspot = async (element) => {
  element["element"] = "ImageHotspot";
  element["content"] = {
    image: {
      url: "https://arktastic.s3.ap-southeast-2.amazonaws.com/extras/sigma-image-placeholder.jpeg",
      alt: "alt text",
    },
    text: {
      data: "",
      url: "",
    },
    spots: {
      A01: {
        heading: "Item 1",
        text: "wow! this is text",
        top: "50%",
        left: "30%",
        type: "Text",
      },
    },
  };
  element.styling = {
    main: {
      paddingTop: ["0px", "0px", "0px"],
      paddingBottom: ["0px", "0px", "0px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
      // margin
      marginTop: ["0px", "0px", "0px"],
      marginBottom: ["0px", "0px", "0px"],
      marginLeft: ["0px", "0px", "0px"],
      marginRight: ["0px", "0px", "0px"],
      // remaning
      width: ["100%", "100%", "100%"],

      height: "auto",
      borderRadius: "0px",
      overflow: "hidden",
    },
    text: {
      fontSize: ["14px", "16px", "16px"],
      lineHeight: ["16px", "18px", "18px"],
      letterSpacing: ["0px", "0px", "0px"],
      fontWeight: ["400", "400", "400"],

      // DONE
      top: "90%",
      left: "50%",
      color: "#454545",
      // ---- TO BE ADDED ON SPOT TO SAVE UNNECESSARY CSS ---
      // background: "transparent",
      // transitionDuration: "0.3s",
      // "&:hover": {
      //   color: "#ffffff",
      // },

      // Padding
      paddingTop: ["0px", "0px", "0px"],
      paddingBottom: ["0px", "0px", "0px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
    },
    dot: {
      width: "16px",
      height: "16px",
      background: "#ffffff",
      borderRadius: "20px",
      scale: 1,
    },
  };

  return element;
};

const newText = (element) => {
  element["element"] = "Text";
  element["content"] = { text: "Edit ME, I am Text", link: "", linkTarget: "" };
  element["settings"] = {
    ...element.settings,
    tag: "div",
  };
  element.styling = {
    main: {
      paddingTop: ["5px", "5px", "5px"],
      paddingBottom: ["5px", "5px", "5px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
      fontSize: ["14px", "16px", "16px"],
      lineHeight: ["16px", "18px", "18px"],
      letterSpacing: ["0px", "0px", "0px"],
      fontWeight: ["300", "300", "300"],
      width: ["100%", "100%", "100%"],
      textDecoration: "none",
      textAlign: ["left", "left", "left"],
      background: "transparent",
      fontFamily: "Roboto",
    },
  };

  return element;
};

const newIconText = (element) => {
  element["element"] = "IconText";
  element["content"] = { text: "Edit ME, I am Text", link: "", linkTarget: "", icon: "" };
  element["settings"] = {
    ...element.settings,
    tag: "div",
  };
  element.styling = {
    main: {
      paddingTop: ["5px", "5px", "5px"],
      paddingBottom: ["5px", "5px", "5px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
      fontSize: ["14px", "16px", "16px"],
      lineHeight: ["16px", "18px", "18px"],
      letterSpacing: ["0px", "0px", "0px"],
      fontWeight: ["300", "300", "300"],
      width: ["100%", "100%", "100%"],
      textDecoration: "none",
      textAlign: ["left", "left", "left"],
      background: "transparent",
      fontFamily: "Roboto",
    },
    icon: {
      color: "#3f3f46",
      marginTop: "0px",
      marginBottom: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      borderRadius: "0px",
      width: "24px",
      fontSize: "18px",
      height: "24px",
      background: "transparent",
    },
    div: {
      flexDirection: "row",
      background: "transparent",
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
      borderRadius: "0px",
    },
  };

  return element;
};

const newWysiwyg = (element) => {
  element["element"] = "Wysiwyg";
  element["content"] = { data: "" };
  element["settings"] = {
    ...element.settings,
  };
  element.styling = {
    main: {
      paddingTop: ["5px", "5px", "5px"],
      paddingBottom: ["5px", "5px", "5px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
    },
  };

  return element;
};
const newCustomWysiwyg = (element) => {
  element["element"] = "CustomWysiwyg";
  element["content"] = { data: "Custom EDITOR" };
  element["settings"] = {
    ...element.settings,
  };
  element.styling = {
    main: {
      paddingTop: ["5px", "5px", "5px"],
      paddingBottom: ["5px", "5px", "5px"],
      paddingLeft: ["0px", "0px", "0px"],
      paddingRight: ["0px", "0px", "0px"],
    },
  };

  return element;
};

const newButton = (element) => {
  element["element"] = "Button";
  element["content"] = { button: "Click here" };
  element.styling = {
    div: {
      marginTop: ["5px", "5px", "5px"],
      marginBottom: ["5px", "5px", "5px"],
      marginLeft: ["0px", "0px", "0px"],
      marginRight: ["4px", "4px", "4px"],
      textAlign: ["left", "left", "left"],
    },
    main: {
      fontSize: "16px",
      background: "#1F2937",
      letterSpacing: "0px",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "30px",
      paddingRight: "30px",
      borderRadius: "4px",
      color: "#ffffff",
      fontWeight: 400,
      borderWidth: "1px",
      borderColor: "#1F2937",
    },
  };

  return element;
};
const newSeperator = (element) => {
  element["element"] = "Seperator";
  element["content"] = {};
  element.styling = {
    div: {
      justifyContent: "flex-start",
    },
    main: {
      marginTop: "10px",
      marginBottom: "10px",
      marginLeft: "0px",
      marginRight: "0px",
      width: "100%",
      borderWidth: "1px",
      borderStyle: "solid",
      height: "2px",
      borderColor: "#707070",
      borderRadius: "0px",
    },
  };

  return element;
};

const newProduct = (element) => {
  element["element"] = "Product";
  element["content"] = {
    query: {
      category: {
        value: "watches",
      },
      itemType: {
        value: "",
      },
      brandSlug: {
        value: "",
      },
      // sort, direction, brand(s), custom (ask Developer)
    },
  };
  element["settings"] = {
    type: "normal",
    // normal, slider, catalogue?

    rows: "1",
    columns: "4",

    // 3 cols, 4 cols, 2 cols, 1 col on mobile, 2 col on mobile
  };

  element.styling = {
    div: {
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "0px",
      paddingRight: "4px",
    },
    main: {
      // main
    },
    arrows: {
      background: "#ffffff",
      borderRadius: "0px",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      paddingRight: "5px",
      marginLeft: "0px",
      marginRight: "0px",
    },
    arrowsContainer: {
      top: "40%",
    },
  };

  return element;
};
// todo -- add dots in slider & autoplay setting
const newSlider = (element) => {
  element["element"] = "Slider";
  element["content"] = {
    images: [],
  };
  element["settings"] = {
    slidesLg: 1,
    slidesSm: 1,
  };
  element.styling = {
    div: {
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    main: {
      // main
    },
    arrows: {
      background: "#ffffff",
      borderRadius: "0px",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      paddingRight: "5px",
      marginLeft: "0px",
      marginRight: "0px",
    },
    arrowsContainer: {
      top: "50%",
    },
  };

  return element;
};
