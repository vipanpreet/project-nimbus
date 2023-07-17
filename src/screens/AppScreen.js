import { useState } from "react";
import Core from "../Components/core";

const AppScreen = () => {
  const [page, setpage] = useState({
    name: "name",
    url: "url",
    structure: [
      {
        id: "100",
        settings: {
          type: "standard",
          label: "",
        },
        styling: {
          main: {
            background: "#ffffff",
            paddingBottom: "30px",
          },
        },
        rows: [
          {
            id: "1111",
            containerId: "100",
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
              cols: {},
              type: "regular",
              bg: {
                position: "left",
                color1: "transparent",
                color2: "transparent",
              },
            },
            columns: [],
          },
        ],
      },
    ],
  });

  const saveHandler = () => {
    console.log("Save Handler Clicked");
  };
  return (
    <div className="w-screen">
      <Core page={page} loading={false} saveHandler={saveHandler} useMetrics />
    </div>
  );
};

export default AppScreen;
