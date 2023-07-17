import { useEffect, useState } from "react";
import Content from "./Switches/Content";
import Design from "./Switches/Design";
import { parseColumns } from "../../helpers/pageParsers";
import UiBlob from "../UiBlob";

const InnerRowBolb = ({ row, setRow, page, saveToState, saveToHistory }) => {
  const [Switch, setSwitch] = useState("content");

  const [settings, setsettings] = useState({ ...row.settings });
  const [styling, setstyling] = useState({ ...row.styling });

  const findElement = () => {
    let containerSelected = page.structure.find((cc) => cc.id == row.containerId);

    let rowSelected = containerSelected.rows.find((rr) => rr.id == row.rowId);

    let colSelected = rowSelected.columns.find((c) => c.id == row.columnId);
    let innerRowSelected = colSelected.elements.find((c) => c.id == row.id);
    return [rowSelected.id, innerRowSelected];
  };

  const saveBlob = async () => {
    saveToHistory();
    let [rowId, rowSelected] = findElement();

    console.log("InnerRow Selected=>", rowSelected);
    // assigning modified settings
    rowSelected.styling = styling;
    rowSelected.settings = settings;
    // new columns creation
    let newCols = await parseColumns(row, rowId);
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
        heading="Inner Row Settings"
        Switch={Switch}
        setSwitch={setSwitch}
        switches={["Content", "Design"]}
      >
        {Switch === "content" ? (
          <Content setsettings={setsettings} settings={settings} />
        ) : (
          <Design setstyling={setstyling} styling={styling} />
        )}
      </UiBlob>
    </>
  );
};

export default InnerRowBolb;
