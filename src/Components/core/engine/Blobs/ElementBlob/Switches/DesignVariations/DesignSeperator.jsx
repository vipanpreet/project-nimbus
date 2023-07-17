import { useState } from "react";
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";
import { ElColor, ElOptions, ElRange, ElSelect } from "../../../inputs";
import Accordion from "../resuables/Accordion";
const DesignSeperator = ({ setstyling, styling }) => {
  const [panel, setpanel] = useState("");

  return (
    <div>
      <Accordion panel="General" active={panel} setpanel={setpanel}>
        <ElColor
          templates={["#707070", "#3b82f6", "#000000", "#f87171", "transparent"]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderColor: val },
            }))
          }
          label="Color"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderColor: e.hex },
            }))
          }
          value={styling?.main.borderColor}
          defaultValue={styling?.main.borderColor}
          name="borderColor"
        />
        <ElSelect
          label="Style"
          name="style"
          value={styling?.main?.borderStyle}
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderStyle: e.target.value },
            }))
          }
        >
          <option selected disabled value="">
            Select
          </option>
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
        </ElSelect>

        <ElOptions
          onClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              div: { ...styling.div, justifyContent: val },
            }))
          }
          label="Seperator Alignment"
          value={styling?.div?.justifyContent}
          data={[
            { text: "flex-start", icon: <AiOutlineAlignLeft /> },
            { text: "center", icon: <AiOutlineAlignCenter /> },
            { text: "flex-end", icon: <AiOutlineAlignRight /> },
          ]}
        />

        <ElRange
          label="Width"
          min="10"
          max="100"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, width: e.target.value + "%" },
            }))
          }
          value={styling?.main.width?.replace("%", "")}
          name="width"
        />
        <ElRange
          label="Height"
          min="1"
          max="20"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderWidth: e.target.value + "px" },
            }))
          }
          value={styling?.main.borderWidth?.replace("px", "")}
          name="borderWidth"
        />

        <ElRange
          label="Rounded"
          min="0"
          step="0.5"
          max="20"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderRadius: e.target.value + "px" },
            }))
          }
          value={styling?.main?.borderRadius?.replace("px", "")}
          name="borderRadius"
        />
      </Accordion>

      <Accordion panel="Margin" active={panel} setpanel={setpanel}>
        <ElRange
          label="Margin Top"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, marginTop: "10px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, marginBottom: "10px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, marginLeft: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, marginRight: "10px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, marginRight: e.target.value + "px" },
            }))
          }
          value={styling?.main.marginRight?.replace("px", "")}
          name="marginTop"
        />
      </Accordion>
    </div>
  );
};

export default DesignSeperator;
