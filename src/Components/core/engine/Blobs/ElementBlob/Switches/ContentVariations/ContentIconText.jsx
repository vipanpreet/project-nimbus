import { useState } from "react";
import { ElInput, ElSelect, ElTextArea } from "../../../inputs";
import Accordion from "../resuables/Accordion";
import * as Icon from "react-icons/ai";
import IconRenderer from "./extras/IconRenderer";

const ContentIconText = ({ setcontent, content, settings, setsettings }) => {
  const [panel, setpanel] = useState("");

  const iconList = {
    AiOutlineArrowLeft: {
      val: Icon.AiOutlineArrowLeft,
    },
    AiOutlineArrowRight: {
      val: Icon.AiOutlineArrowRight,
    },
    AiOutlineArrowUp: {
      val: Icon.AiOutlineArrowUp,
    },
    AiOutlineLeft: {
      val: Icon.AiOutlineLeft,
    },
    AiOutlineLeft: {
      val: Icon.AiOutlineLeft,
    },
    AiOutlineRight: {
      val: Icon.AiOutlineRight,
    },
    AiFillAlert: {
      val: Icon.AiFillAlert,
    },
    AiOutlineMinus: {
      val: Icon.AiOutlineMinus,
    },
    AiOutlineBulb: {
      val: Icon.AiOutlineBulb,
    },
    AiOutlineCheck: {
      val: Icon.AiOutlineCheck,
    },
    AiOutlineCheck: {
      val: Icon.AiOutlineCheck,
    },
    AiOutlineClose: {
      val: Icon.AiOutlineClose,
    },
    AiOutlineCloud: {
      val: Icon.AiOutlineCloud,
    },
    AiOutlineCrown: {
      val: Icon.AiOutlineCrown,
    },
    AiOutlineDollarCircle: {
      val: Icon.AiOutlineDollarCircle,
    },
    AiOutlineDoubleLeft: {
      val: Icon.AiOutlineDoubleLeft,
    },
    AiOutlineDoubleRight: {
      val: Icon.AiOutlineDoubleRight,
    },
    AiOutlineExclamationCircle: {
      val: Icon.AiOutlineExclamationCircle,
    },
    AiOutlinePlus: {
      val: Icon.AiOutlinePlus,
    },
    AiOutlinePlusCircle: {
      val: Icon.AiOutlinePlusCircle,
    },
    AiTwotoneEuroCircle: {
      val: Icon.AiTwotoneEuroCircle,
    },
  };

  const IconList = iconList;
  return (
    <div>
      <Accordion panel="Text" active={panel} setpanel={setpanel}>
        <ElTextArea
          label="Body"
          name="text"
          value={content.text}
          onChange={(e) => setcontent({ ...content, text: e.target.value })}
        />
        <ElInput
          label="Admin Label"
          name="label"
          value={settings.label}
          onChange={(e) => setsettings({ ...settings, label: e.target.value })}
        />
        <ElSelect
          onChange={(e) => setsettings({ ...settings, tag: e.target.value })}
          name="tag"
          label="HTML Tag"
          value={settings.tag}
        >
          <option value="div">DIV</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="p">p</option>
        </ElSelect>
      </Accordion>
      <Accordion panel="Link" active={panel} setpanel={setpanel}>
        <ElInput
          label="Link (url)"
          name="link"
          value={content.link}
          onChange={(e) => setcontent({ ...content, link: e.target.value })}
        />
        <ElSelect
          onChange={(e) => setcontent({ ...content, linkTarget: e.target.value })}
          name="linkTarget"
          label="Link Target"
          value={content.linkTarget}
        >
          <option value="same">Same Window</option>
          <option value="new">New Window</option>
        </ElSelect>
      </Accordion>
      <Accordion panel="Icon" active={panel} setpanel={setpanel}>
        <div className="py-4 flex items-center flex-wrap">
          {Object.keys(iconList)?.map((key) => (
            <div
              key={key}
              onClick={() => setcontent({ ...content, icon: key })}
              size={22}
              className={`w-1/6 my-2 cursor-pointer hover:text-sky-500 ${
                content?.icon === key ? "text-sky-500" : "text-zinc-600"
              } transition-all`}
            >
              <IconRenderer list={iconList} icon={key} />
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default ContentIconText;
