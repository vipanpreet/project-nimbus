import { ElcolsInput } from "../../inputs";

const Columns = ({ setsettings, settings }) => {
  return (
    <div>
      <ElcolsInput value={settings.cols} onClick={(e) => setsettings({ ...settings, cols: e })} />
    </div>
  );
};

export default Columns;
