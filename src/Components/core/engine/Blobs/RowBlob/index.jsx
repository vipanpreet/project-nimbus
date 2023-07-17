import { useEffect, useState } from "react";
import Columns from "./Switches/Columns";
import Design from "./Switches/Design";
import { parseColumns } from "../../helpers/pageParsers";
import UiBlob from "../UiBlob";

const RowBolb = ({ row, setRow, page, saveToState, saveToHistory }) => {
  const [Switch, setSwitch] = useState("columns");

  const [settings, setsettings] = useState({ ...row.settings });
  const [styling, setstyling] = useState({ ...row.styling });

  const findElement = () => {
    let containerSelected = page.structure.find((cc) => cc.id == row.containerId);
    let rowSelected = containerSelected.rows.find((rr) => rr.id == row.id);
    return rowSelected;
  };
  const saveBlob = async () => {
    saveToHistory();
    let rowSelected = findElement();
    // assigning modified settings
    rowSelected.styling = styling;
    rowSelected.settings = settings;

    // new columns creation
    let newCols = await parseColumns(row);
    rowSelected.columns = newCols;
    rowSelected.settings.type = row.settings.cols.t;
    saveToState();
    setRow({});
  };

  const instantSaveBlob = async () => {
    let rowSelected = findElement();
    // assigning content / settings
    rowSelected.styling = styling;
    rowSelected.settings = settings;
    saveToState();
  };

  useEffect(() => {
    instantSaveBlob();
  }, [styling]);

  const closeBlob = () => {
    setRow({});
  };

  return (
    <>
      <UiBlob
        actions={{ save: saveBlob, close: closeBlob, undo: null }}
        heading="Row Settings"
        Switch={Switch}
        setSwitch={setSwitch}
        switches={["Columns", "Design"]}
      >
        {Switch === "columns" ? (
          <Columns setsettings={setsettings} settings={settings} />
        ) : (
          <Design
            setstyling={setstyling}
            styling={styling}
            settings={settings}
            setsettings={setsettings}
          />
        )}
      </UiBlob>
    </>
  );
};

export default RowBolb;
