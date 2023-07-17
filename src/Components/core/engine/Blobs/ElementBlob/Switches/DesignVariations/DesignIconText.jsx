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
const DesignIconText = ({ setstyling, styling }) => {
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
      <Accordion panel="Box" active={panel} setpanel={setpanel}>
        <ElColor
          label="Background"
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
              div: { ...styling.div, background: val },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              div: { ...styling.div, background: e.hex },
            }))
          }
          value={styling?.div.background}
          name="Background"
        />
        <ElRange
          label="Rounded"
          min="0"
          max="100"
          placeholder="px"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              div: { ...styling.div, borderRadius: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              div: { ...styling.div, borderRadius: e.target.value + "px" },
            }))
          }
          value={styling?.div?.borderRadius?.replace("px", "")}
          name="borderRadius"
        />
        <PropertiesWrapper type="transitions">
          <ElRange
            label="Transition Duration"
            min="0.1"
            max="2"
            placeholder="s"
            step="0.1"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, transitionDuration: "0" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, transitionDuration: e.target.value + "s" },
              }))
            }
            value={styling?.div?.transitionDuration?.replace("s", "")}
            name="transitionDuration"
          />

          <ElColor
            label="Hover - Background"
            templates={["#454545", "#000000", "#ffffff", "transparent"]}
            onTemplateClick={(val) =>
              setstyling((prevState) => ({
                ...prevState,
                div: {
                  ...styling.div,
                  "&:hover": { ...styling.div["&:hover"], background: val },
                },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: {
                  ...styling.div,
                  "&:hover": { ...styling.div["&:hover"], background: e.hex },
                },
              }))
            }
            value={(styling?.div && styling?.div["&:hover"]?.background) || "transparent"}
            name="hoverColor"
          />
        </PropertiesWrapper>
        <PropertiesWrapper type="dimensions">
          <ElRange
            label="padding Top"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingTop: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingTop: e.target.value + "px" },
              }))
            }
            value={styling?.div.paddingTop?.replace("px", "")}
            name="paddingTop"
          />
          <ElRange
            label="padding Bottom"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingBottom: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingBottom: e.target.value + "px" },
              }))
            }
            value={styling?.div.paddingBottom?.replace("px", "")}
            name="paddingBottom"
          />
          <ElRange
            label="padding Left"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingLeft: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingLeft: e.target.value + "px" },
              }))
            }
            value={styling?.div.paddingLeft?.replace("px", "")}
            name="paddingLeft"
          />
          <ElRange
            label="padding Right"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingRight: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                div: { ...styling.div, paddingRight: e.target.value + "px" },
              }))
            }
            value={styling?.div.paddingRight?.replace("px", "")}
            name="paddingRight"
          />
        </PropertiesWrapper>
      </Accordion>

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

      <Accordion panel="Icon" active={panel} setpanel={setpanel}>
        <ElSelect
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              div: { ...styling.div, flexDirection: e.target.value },
            }))
          }
          name="Position"
          label="Position"
          value={styling.div?.flexDirection}
        >
          <option value="row">Left Aligned</option>
          <option value="row-reverse">Right Aligned</option>
          <option value="column">Top Aligned</option>
          <option value="column-reverse">Bottom Aligned</option>
        </ElSelect>

        <ElRange
          label="Size"
          min="10"
          max="100"
          placeholder="px"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, fontSize: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, fontSize: e.target.value + "px" },
            }))
          }
          value={styling?.icon?.fontSize?.replace("px", "")}
          name="fontSize"
        />
        <ElRange
          label="Width"
          min="0"
          max="100"
          placeholder="px"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, width: "24px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, width: e.target.value + "px" },
            }))
          }
          value={styling?.icon.width?.replace("px", "")}
          name="width"
        />

        <ElRange
          label="Height"
          min="0"
          max="100"
          placeholder="px"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, height: "24px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, height: e.target.value + "px" },
            }))
          }
          value={styling?.icon.height?.replace("px", "")}
          name="height"
        />
        <ElRange
          label="Rounded"
          min="0"
          max="100"
          placeholder="px"
          onReset={() =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, borderRadius: "0px" },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, borderRadius: e.target.value + "px" },
            }))
          }
          value={styling?.icon?.borderRadius?.replace("px", "")}
          name="borderRadius"
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
              icon: { ...styling.icon, color: val },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, color: e.hex },
            }))
          }
          value={styling?.icon.color}
          name="color"
        />

        <ElColor
          label="Background"
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
              icon: { ...styling.icon, background: val },
            }))
          }
          onChange={(e) =>
            setstyling((prevState) => ({
              ...prevState,
              icon: { ...styling.icon, background: e.hex },
            }))
          }
          value={styling?.icon.background}
          name="Background"
        />

        <PropertiesWrapper type="transitions">
          <ElRange
            label="Transition Duration"
            min="0.1"
            max="2"
            placeholder="s"
            step="0.1"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, transitionDuration: "0" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, transitionDuration: e.target.value + "s" },
              }))
            }
            value={styling?.icon?.transitionDuration?.replace("s", "")}
            name="transitionDuration"
          />

          <ElRange
            label="Transition Delay"
            min="0"
            max="2"
            placeholder="s"
            step="0.1"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, transitionDelay: "0" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, transitionDelay: e.target.value + "s" },
              }))
            }
            value={styling?.icon?.transitionDelay?.replace("s", "")}
            name="transitionDelay"
          />

          <ElColor
            label="Hover - Background"
            templates={["#454545", "#000000", "#ffffff", "transparent"]}
            onTemplateClick={(val) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: {
                  ...styling.icon,
                  "&:hover": { ...styling.icon["&:hover"], background: val },
                },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: {
                  ...styling.icon,
                  "&:hover": { ...styling.icon["&:hover"], background: e.hex },
                },
              }))
            }
            value={(styling?.icon && styling?.icon["&:hover"]?.background) || "transparent"}
            name="hoverColor"
          />
          <ElColor
            label="Hover - Color"
            templates={["#454545", "#000000", "#ffffff", "transparent"]}
            onTemplateClick={(val) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: {
                  ...styling.icon,
                  "&:hover": { ...styling.icon["&:hover"], color: val },
                },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: {
                  ...styling.icon,
                  "&:hover": { ...styling.icon["&:hover"], color: e.hex },
                },
              }))
            }
            value={(styling?.icon && styling?.icon["&:hover"]?.color) || "transparent"}
            name="hoverColor"
          />
        </PropertiesWrapper>
        <PropertiesWrapper type="dimensions">
          <ElRange
            label="margin Top"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginTop: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginTop: e.target.value + "px" },
              }))
            }
            value={styling?.icon.marginTop?.replace("px", "")}
            name="marginTop"
          />
          <ElRange
            label="margin Bottom"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginBottom: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginBottom: e.target.value + "px" },
              }))
            }
            value={styling?.icon.marginBottom?.replace("px", "")}
            name="marginBottom"
          />
          <ElRange
            label="margin Left"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginLeft: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginLeft: e.target.value + "px" },
              }))
            }
            value={styling?.icon.marginLeft?.replace("px", "")}
            name="marginLeft"
          />
          <ElRange
            label="margin Right"
            min="0"
            max="150"
            onReset={() =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginRight: "0px" },
              }))
            }
            onChange={(e) =>
              setstyling((prevState) => ({
                ...prevState,
                icon: { ...styling.icon, marginRight: e.target.value + "px" },
              }))
            }
            value={styling?.icon.marginRight?.replace("px", "")}
            name="marginRight"
          />
        </PropertiesWrapper>
      </Accordion>
    </div>
  );
};

export default DesignIconText;
