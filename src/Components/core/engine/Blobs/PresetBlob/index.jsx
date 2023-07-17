import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addPagePreset, getPagePresets } from "../../../../redux/page/pageActions";
import { findElement } from "../helpers";
import { ElInput } from "../inputs";
import UiBlob from "../UiBlob";

const PresetBolb = ({ setpresetBlob, element, saveToHistory, saveToState, page }) => {
  const dispatch = useDispatch();
  const [Switch, setSwitch] = useState(element.type || "management");
  const [name, setname] = useState("");
  const [presetSelected, setpresetSelected] = useState("");

  const pageState = useSelector((state) => state.pageState);
  const { presets, loading } = pageState;

  useEffect(() => {
    // dispatch(getPagePresets(element?.element));
    // Get Preset Call
  }, [element]);

  const closeBlob = () => {
    setpresetBlob({});
  };

  const saveBlob = () => {
    if (Switch === "add") {
      if (!name || name?.length < 2) return;
      let state = {
        styling: element.styling,
      };
      let body = {
        name,
        elementType: element.element,
        state,
      };
      // dispatch(addPagePreset(body));
      // Add Preset Call
    } else {
      saveToHistory();

      let elSelected = findElement(page, element);
      elSelected.styling = presetSelected.state?.styling;
      saveToState();
      console.log("Saving Blob", elSelected);
    }
    closeBlob();
  };

  const PresetItem = ({ preset, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={` ${
          preset._id === presetSelected._id ? "bg-blue-500 text-white" : "bg-zinc-100"
        } mb-2 text-sm rounded px-3 py-2 hover:bg-blue-500 hover:text-white transition-all cursor-pointer`}
      >
        {preset.name}
      </div>
    );
  };

  return (
    <>
      <UiBlob
        actions={{ save: saveBlob, close: closeBlob, undo: null }}
        heading="Preset Management"
        Switch={Switch}
        setSwitch={setSwitch}
        switches={["management", "add"]}
      >
        {Switch === "add" ? (
          <>
            <ElInput
              onChange={(e) => setname(e.target.value)}
              name="name"
              label="Preset Name"
              value={name}
            />
            <ElInput name="element" label="Element Type" defaultValue={element?.element} />
          </>
        ) : (
          <>
            {loading ? (
              <div>
                <div>Loading</div>
              </div>
            ) : (
              presets?.map((preset) => (
                <PresetItem
                  onClick={() => setpresetSelected(preset)}
                  preset={preset}
                  key={preset._id}
                />
              ))
            )}
          </>
        )}
      </UiBlob>
    </>
  );
};

export default PresetBolb;
