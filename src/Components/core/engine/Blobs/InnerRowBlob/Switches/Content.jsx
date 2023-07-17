import { ElcolsInput, ElInput, ElSelect } from "../../inputs";

const Content = ({ setsettings, settings }) => {
  return (
    <div>
      <ElcolsInput value={settings.cols} onClick={(e) => setsettings({ ...settings, cols: e })} />
    </div>
  );
};

export default Content;
