import { useEffect, useState } from "react";
import Accordion from "../../ElementBlob/Switches/resuables/Accordion";
import { ElInput, ElRange, ElSelect } from "../../inputs";

const Design = ({ setstyling, styling }) => {
  const [panel, setpanel] = useState("");

  return (
    <div>
      <Accordion panel="Padding" active={panel} setpanel={setpanel}>
        <ElRange
          label="Padding Top"
          min="0"
          max="300"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingTop: "5px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingTop: e.target.value + "px" },
            }))
          }
          value={styling?.main.paddingTop.replace("px", "")}
          name="paddingTop"
        />
        <ElRange
          label="Padding Bottom"
          min="0"
          max="300"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingBottom: "5px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingBottom: e.target.value + "px" },
            }))
          }
          value={styling?.main.paddingBottom?.replace("px", "")}
          name="paddingBottom"
        />
        <ElRange
          label="Padding Left"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingLeft: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingLeft: e.target.value + "px" },
            }))
          }
          value={styling?.main.paddingLeft?.replace("px", "")}
          name="paddingLeft"
        />
        <ElRange
          label="Padding Right"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingRight: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingRight: e.target.value + "px" },
            }))
          }
          value={styling?.main.paddingRight?.replace("px", "")}
          name="paddingRight"
        />
      </Accordion>

      <Accordion panel="Margin" active={panel} setpanel={setpanel}>
        <ElRange
          label="Margin Top"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginTop: "5px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginTop: e.target.value + "px" },
            }))
          }
          value={styling?.main.marginTop?.replace("px", "")}
          name="marginTop"
        />
        <ElRange
          label="Margin Bottom"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginBottom: "5px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginBottom: e.target.value + "px" },
            }))
          }
          value={styling?.main.marginBottom?.replace("px", "")}
          name="marginBottom"
        />
        <ElRange
          label="Margin Left"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginLeft: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginLeft: e.target.value + "px" },
            }))
          }
          value={styling?.main.marginLeft?.replace("px", "")}
          name="marginLeft"
        />
        <ElRange
          label="Margin Right"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginRight: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, marginRight: e.target.value + "px" },
            }))
          }
          value={styling?.main.marginRight?.replace("px", "")}
          name="marginRight"
        />
      </Accordion>
    </div>
  );
};

export default Design;
