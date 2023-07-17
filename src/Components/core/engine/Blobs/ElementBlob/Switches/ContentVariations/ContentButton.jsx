import { useState } from "react";
import { ElInput, ElSelect, ElTextArea } from "../../../inputs";
import Accordion from "../resuables/Accordion";
const ContentButton = ({ setcontent, content, settings, setsettings }) => {
  const [panel, setpanel] = useState("");
  return (
    <div>
      <Accordion panel="Text" active={panel} setpanel={setpanel}>
        <ElInput
          label="Button Text"
          name="text"
          value={content.button}
          onChange={(e) => setcontent({ ...content, button: e.target.value })}
        />
        <ElInput
          label="Admin Label"
          name="label"
          value={settings.label}
          onChange={(e) => setsettings({ ...settings, label: e.target.value })}
        />
      </Accordion>
      <Accordion panel="Link" active={panel} setpanel={setpanel}>
        <ElInput
          label="Link (url)"
          name="link"
          value={settings.link}
          onChange={(e) => setsettings({ ...settings, link: e.target.value })}
        />
        <ElSelect
          onChange={(e) => setsettings({ ...settings, linkTarget: e.target.value })}
          name="linkTarget"
          label="Link Target"
          value={settings.linkTarget}
        >
          <option value="same">Same Window</option>
          <option value="new">New Window</option>
        </ElSelect>
      </Accordion>
    </div>
  );
};

export default ContentButton;
