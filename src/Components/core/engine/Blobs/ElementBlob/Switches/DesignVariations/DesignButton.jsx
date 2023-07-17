import { useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import { ElColor, ElOptions, ElRange, ElSelect } from "../../../inputs";
import Accordion from "../resuables/Accordion";
const DesignButton = ({ setstyling, styling }) => {
  const [panel, setpanel] = useState("");

  // 0 - mobile, 1 - tablet, 2 - desktop
  const [screenSize, setscreenSize] = useState("2");

  const responsiveStylingHandler = (keyField, val, mark) => {
    let values = [...styling.div[keyField]];
    if (mark) {
      values[screenSize] = `${val}${mark}`;
    } else {
      values[screenSize] = val;
    }
    setstyling((prevState) => ({
      ...prevState,
      div: { ...styling.div, [keyField]: values },
    }));
  };

  return (
    <div>
      <ElOptions
        onClick={(e) => setscreenSize(e)}
        label="Responsiveness"
        value={screenSize}
        data={[
          { text: "2", icon: <AiOutlineDesktop /> },
          { text: "1", icon: <AiOutlineTablet /> },
          { text: "0", icon: <AiOutlineMobile /> },
        ]}
      />
      <Accordion panel="Button" active={panel} setpanel={setpanel}>
        <ElColor
          templates={["#3b82f6", "#000000", "#f87171", "transparent"]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, background: val },
            }))
          }
          label="Background Color"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, background: e.hex },
            }))
          }
          value={styling?.main.background}
          defaultValue={styling?.main.background}
          name="background"
        />
        <ElColor
          templates={["#ffffff", "#000000", "#eeeeee"]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, color: val },
            }))
          }
          label="Text Color"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, color: e.hex },
            }))
          }
          value={styling?.main.color}
          defaultValue={styling?.main.color}
          name="color"
        />
        <ElColor
          templates={["#ffffff", "#000000", "#eeeeee"]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderColor: val },
            }))
          }
          label="Border Color"
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
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, fontWeight: e.target.value },
            }))
          }
          name="fontWeight"
          label="Font Weight"
          value={styling.main.fontWeight}
        >
          <option value="200">Extra Light</option>
          <option value="300">Light</option>
          <option value="400">Normal</option>
          <option value="500">Medium</option>
          <option value="600">Semi Bold</option>
          <option value="700">Bold</option>
          <option value="800">Black</option>
        </ElSelect>
        <ElOptions
          onClick={(val) => responsiveStylingHandler("textAlign", val)}
          label="Button Alignment"
          value={styling?.div?.textAlign[screenSize]}
          data={[
            { text: "left", icon: <AiOutlineAlignLeft /> },
            { text: "center", icon: <AiOutlineAlignCenter /> },
            { text: "right", icon: <AiOutlineAlignRight /> },
          ]}
        />
        <ElRange
          label="Font Size"
          min="10"
          max="100"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, fontSize: e.target.value + "px" },
            }))
          }
          value={styling?.main.fontSize?.replace("px", "")}
          name="fontSize"
        />
        <ElRange
          label="Line Height"
          min="10"
          max="80"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, lineHeight: e.target.value + "px" },
            }))
          }
          value={styling?.main.lineHeight?.replace("px", "")}
          name="lineHeight"
        />
        <ElRange
          label="Letter Spacing"
          min="0"
          step="0.05"
          max="5"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, letterSpacing: e.target.value + "px" },
            }))
          }
          value={styling?.main.letterSpacing?.replace("px", "")}
          name="letterSpacing"
        />
        <ElRange
          label="Rounded"
          min="0"
          step="0.5"
          max="100"
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, borderRadius: e.target.value + "px" },
            }))
          }
          value={styling?.main.borderRadius?.replace("px", "")}
          name="borderRadius"
        />
      </Accordion>

      <Accordion panel="Padding" active={panel} setpanel={setpanel}>
        <ElRange
          label="Padding Top"
          min="0"
          max="150"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, paddingTop: "10px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, paddingBottom: "10px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, paddingLeft: "30px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
              ...prevState,
              main: { ...styling.main, paddingRight: "30px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
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
          onReset={() => responsiveStylingHandler("marginTop", "5")}
          onChange={(e) => responsiveStylingHandler("marginTop", e.target.value, "px")}
          value={styling?.div.marginTop[screenSize]?.replace("px", "")}
          name="marginTop"
        />
        <ElRange
          label="Margin Bottom"
          min="0"
          max="150"
          onReset={() => responsiveStylingHandler("marginBottom", "5")}
          onChange={(e) => responsiveStylingHandler("marginBottom", e.target.value, "px")}
          value={styling?.div.marginBottom[screenSize]?.replace("px", "")}
          name="marginBottom"
        />
        <ElRange
          label="Margin Left"
          min="0"
          max="150"
          onReset={() => responsiveStylingHandler("marginLeft", "0")}
          onChange={(e) => responsiveStylingHandler("marginLeft", e.target.value, "px")}
          value={styling?.div.marginLeft[screenSize]?.replace("px", "")}
          name="marginLeft"
        />
        <ElRange
          label="Margin Right"
          min="0"
          max="150"
          onReset={() => responsiveStylingHandler("marginRight", "5")}
          onChange={(e) => responsiveStylingHandler("marginRight", e.target.value, "px")}
          value={styling?.div.marginRight[screenSize]?.replace("px", "")}
          name="marginRight"
        />
      </Accordion>
    </div>
  );
};

export default DesignButton;
