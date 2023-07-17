import { useState } from "react";
import Accordion from "../../ElementBlob/Switches/resuables/Accordion";
import { ElColor, ElInput, ElRange } from "../../inputs";

const Design = ({ setstyling, styling }) => {
  const [panel, setpanel] = useState("");

  console.log(styling);
  return (
    <div>
      <ElColor
        type="color"
        name="background"
        label="Background Color"
        templates={["#fffcfa", "#52525b", "#3f3f46", "#000000", "#ffffff", "transparent"]}
        onTemplateClick={(val) =>
          setstyling((prevState) => ({
            main: { ...styling.main, background: val },
          }))
        }
        onChange={(e) => setstyling({ main: { ...styling.main, background: e.hex } })}
        value={styling?.main.background}
        defaultValue={styling?.main.background}
      />
      <Accordion panel="Padding" active={panel} setpanel={setpanel}>
        <ElRange
          label="Padding Top"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingTop: "35" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingTop: e.target.value + "px" },
            }))
          }
          value={styling?.main.paddingTop?.replace("px", "")}
          name="paddingTop"
        />
        <ElRange
          label="Padding Bottom"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              main: { ...styling.main, paddingBottom: "35" },
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
              main: { ...styling.main, paddingLeft: "0" },
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
              main: { ...styling.main, paddingRight: "0" },
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
    </div>
  );
};

export default Design;
