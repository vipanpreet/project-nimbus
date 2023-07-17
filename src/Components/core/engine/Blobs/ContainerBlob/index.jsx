import { useEffect, useState } from "react";
import Settings from "./Switches/Settings";
import Design from "./Switches/Design";
import UiBlob from "../UiBlob";

const ContainerBolb = ({ container, setContainer, page, saveToState, saveToHistory }) => {
  const [mode, setmode] = useState("normal");
  const [Switch, setSwitch] = useState("settings");

  const [settings, setsettings] = useState({ ...container.settings });
  const [styling, setstyling] = useState({ ...container.styling });

  const saveBlob = () => {
    saveToHistory();
    let containerSelected = page.structure.find((cc) => cc.id == container.id);
    containerSelected.settings = settings;
    containerSelected.styling = styling;
    saveToState();
    setContainer({});
  };
  const closeBlob = () => {
    setContainer({});
  };

  useEffect(() => {
    instantSaveBlob();
  }, [styling]);

  const instantSaveBlob = async () => {
    let containerSelected = page.structure.find((cc) => cc.id == container.id);
    // assigning content / settings
    containerSelected.styling = styling;
    saveToState();
  };
  return (
    <UiBlob
      actions={{ save: saveBlob, close: closeBlob, undo: null }}
      heading="Container Settings"
      Switch={Switch}
      setSwitch={setSwitch}
      switches={["Settings", "Design"]}
    >
      {Switch === "settings" ? (
        <Settings setsettings={setsettings} settings={settings} />
      ) : (
        <Design setstyling={setstyling} styling={styling} />
      )}
    </UiBlob>
  );
};

export default ContainerBolb;
