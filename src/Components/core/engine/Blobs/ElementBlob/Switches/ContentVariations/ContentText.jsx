import { useState } from "react";
import { ElInput, ElSelect, ElTextArea } from "../../../inputs";
import Accordion from "../resuables/Accordion";

const ContentText = ({ setcontent, content, settings, setsettings }) => {
  const [panel, setpanel] = useState("");

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
    </div>
  );
};

export default ContentText;
