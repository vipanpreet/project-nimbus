import { ElInput, ElSelect } from "../../inputs";

const Settings = ({ setsettings, settings }) => {
  return (
    <div>
      <ElInput
        onChange={(e) => setsettings({ ...settings, label: e.target.value })}
        name="label"
        label="Admin Label"
        placeholder="A Label for purpose of this section"
        value={settings.label}
      />
      <ElSelect
        onChange={(e) => setsettings({ ...settings, type: e.target.value })}
        name="type"
        label="Container Type"
        value={settings.type}
      >
        <option value="standard">Standard</option>
        <option value="full">Full Width</option>
        <option value="fluid">Fluid</option>
      </ElSelect>
    </div>
  );
};

export default Settings;
