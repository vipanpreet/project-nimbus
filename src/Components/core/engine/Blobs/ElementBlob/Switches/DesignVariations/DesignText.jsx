import { useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineDesktop,
  AiOutlineFileText,
  AiOutlineLine,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import { BiStrikethrough, BiUnderline } from "react-icons/bi";
import { BsJustify } from "react-icons/bs";
import { ElColor, ElOptions, ElRange, ElSelect } from "../../../inputs";
import PropertiesWrapper from "../../PropertiesWrapper";
import Accordion from "../resuables/Accordion";
const DesignText = ({ setstyling, styling }) => {
  const [panel, setpanel] = useState("");
  // 0 - mobile, 1 - tablet, 2 - desktop
  const [screenSize, setscreenSize] = useState("2");

  const responsiveStylingHandler = (keyField, val, mark, type = "main") => {
    let values = [...styling[type][keyField]];
    if (mark) {
      values[screenSize] = `${val}${mark}`;
    } else {
      values[screenSize] = val;
    }
    setstyling((prevState) => ({
      ...prevState,
      [type]: { ...styling[type], [keyField]: values },
    }));
  };

  const copyFrom = (source) => {
    Object.keys(styling.main).forEach((key) => {
      if (Array.isArray(styling.main[key])) {
        styling.main[key][screenSize] = styling.main[key][source];
      }
    });
    setstyling((prevState) => ({
      ...prevState,
      main: { ...styling.main },
    }));
  };

  return (
    <div>
      <div className="mb-4">
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
        {screenSize != 2 && (
          <div className="flex items-center justify-between">
            <div
              className="text-xs font-semibold cursor-pointer uppercase flex items-center"
              onClick={() => copyFrom(screenSize == 0 ? 1 : 2)}
            >
              <AiOutlineDesktop className="mr-1" /> Copy from{" "}
              {screenSize == 0 ? "Tablet" : "Desktop"}
            </div>
          </div>
        )}
      </div>
      <Accordion panel="Text" active={panel} setpanel={setpanel}>
        <ElSelect
          onChange={(e) => responsiveStylingHandler("fontWeight", e.target.value)}
          name="fontWeight"
          label="Font Weight"
          value={styling.main.fontWeight[screenSize]}
        >
          <option value="200">Extra Light</option>
          <option value="300">Light</option>
          <option value="400">Normal</option>
          <option value="500">Medium</option>
          <option value="600">Semi Bold</option>
          <option value="700">Bold</option>
          <option value="800">Black</option>
        </ElSelect>
        <ElSelect
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, fontFamily: e.target.value },
            }))
          }
          name="fontFamily"
          label="Font Family"
          value={styling.main?.fontFamily}
        >
          <option value="Roboto">Primary - Roboto</option>
          <option value="Raleway">Secondary - Raleway</option>
        </ElSelect>
        <ElOptions
          onClick={(e) => responsiveStylingHandler("textAlign", e)}
          label="Text Alignment"
          value={styling.main.textAlign[screenSize]}
          data={[
            { text: "left", icon: <AiOutlineAlignLeft /> },
            { text: "center", icon: <AiOutlineAlignCenter /> },
            { text: "right", icon: <AiOutlineAlignRight /> },
            { text: "justify", icon: <BsJustify /> },
          ]}
        />
        <ElOptions
          onClick={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, textDecoration: e },
            }))
          }
          label="Text Decoration"
          value={styling.main.textDecoration}
          data={[
            { text: "none", icon: <AiOutlineLine /> },
            { text: "underline", icon: <BiUnderline /> },
            { text: "line-through", icon: <BiStrikethrough /> },
          ]}
        />
        <ElRange
          label="Font Size"
          min="10"
          max="100"
          onChange={(e) => responsiveStylingHandler("fontSize", e.target.value, "px")}
          value={styling?.main.fontSize[screenSize]?.replace("px", "")}
          name="fontSize"
        />
        <ElRange
          label="Line Height"
          min="10"
          max="80"
          onChange={(e) => responsiveStylingHandler("lineHeight", e.target.value, "px")}
          value={styling?.main.lineHeight[screenSize]?.replace("px", "")}
          name="lineHeight"
        />
        <ElRange
          label="Letter Spacing"
          min="0"
          step="0.05"
          max="5"
          onChange={(e) => responsiveStylingHandler("letterSpacing", e.target.value, "px")}
          value={styling?.main.letterSpacing[screenSize]?.replace("px", "")}
          name="letterSpacing"
        />

        <ElRange
          label="Width"
          min="0"
          max="100"
          placeholder="%"
          onReset={() => responsiveStylingHandler("width", "100%", "%")}
          onChange={(e) => responsiveStylingHandler("width", e.target.value, "%")}
          value={styling?.main.width[screenSize]?.replace("%", "")}
          name="width"
        />
        <ElColor
          label="Color"
          templates={[
            "#fffcfa",
            "#71717a",
            "#52525b",
            "#3f3f46",
            "#000000",
            "#ffffff",
            "transparent",
          ]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, color: val },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, color: e.hex },
            }))
          }
          value={styling?.main.color}
          name="color"
        />
        <ElColor
          label="Background"
          templates={["#fffcfa", "#52525b", "#3f3f46", "#000000", "#ffffff", "transparent"]}
          onTemplateClick={(val) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, background: val },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              main: { ...styling.main, background: e.hex },
            }))
          }
          value={styling?.main.background}
          defaultValue={styling?.main.background}
          name="backround"
        />
        <PropertiesWrapper type="dimensions">
          <ElRange
            label="Padding Top"
            min="0"
            max="150"
            onReset={() => responsiveStylingHandler("paddingTop", "5")}
            onChange={(e) => responsiveStylingHandler("paddingTop", e.target.value, "px")}
            value={styling?.main.paddingTop[screenSize]?.replace("px", "")}
            name="paddingTop"
          />
          <ElRange
            label="Padding Bottom"
            min="0"
            max="150"
            onReset={() => responsiveStylingHandler("paddingBottom", "5")}
            onChange={(e) => responsiveStylingHandler("paddingBottom", e.target.value, "px")}
            value={styling?.main.paddingBottom[screenSize]?.replace("px", "")}
            name="paddingBottom"
          />
          <ElRange
            label="Padding Left"
            min="0"
            max="150"
            onReset={() => responsiveStylingHandler("paddingLeft", "5")}
            onChange={(e) => responsiveStylingHandler("paddingLeft", e.target.value, "px")}
            value={styling?.main.paddingLeft[screenSize]?.replace("px", "")}
            name="paddingLeft"
          />
          <ElRange
            label="Padding Right"
            min="0"
            max="150"
            onReset={() => responsiveStylingHandler("paddingRight", "5")}
            onChange={(e) => responsiveStylingHandler("paddingRight", e.target.value, "px")}
            value={styling?.main.paddingRight[screenSize]?.replace("px", "")}
            name="paddingRight"
          />
        </PropertiesWrapper>
      </Accordion>
    </div>
  );
};

export default DesignText;
