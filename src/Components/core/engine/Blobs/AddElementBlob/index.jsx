import { useState } from "react";
import {
  BsFillFileTextFill,
  BsImageFill,
  BsImages,
  BsMenuButtonFill,
  BsQuestionCircleFill,
} from "react-icons/bs";
import { FaIcons } from "react-icons/fa";
import { IoMdWatch } from "react-icons/io";
import { MdImageAspectRatio, MdRowing, MdTextFormat } from "react-icons/md";
import { TbColumns, TbLayoutRows, TbSeparator } from "react-icons/tb";
import { newElement, newInnerRow, newRow } from "../../helpers/pageUtilities";
import { ElElement } from "../inputs";
import UiBlob from "../UiBlob";

const AddElementBlob = ({ setaddElementBlob, col, saveToState, saveToHistory }) => {
  const [selectedElement, setselectedElement] = useState("");

  const closeBlob = () => {
    setaddElementBlob({});
  };

  const saveBlob = async (e) => {
    if (selectedElement.length < 2) {
      closeBlob();
      return;
    }
    saveToHistory();
    // new Element creation
    let id = String(col.id) + "-" + String(Math.floor(Math.random() * 1000000));

    if (selectedElement === "InnerRow") {
      col.elements.push(await newInnerRow(col, id));
    } else {
      col.elements.push(
        await newElement(selectedElement, col, String(id), col.innerRowId ? true : false)
      );
    }
    saveToState();
    closeBlob();
  };

  return (
    <div>
      <UiBlob actions={{ save: saveBlob, close: closeBlob, undo: null }} heading="Add an Element">
        <div className="flex">
          <ElElement
            onClick={() => setselectedElement("Text")}
            value={selectedElement}
            icon={<BsFillFileTextFill />}
            name="Text"
          />
          <ElElement
            onClick={() => setselectedElement("Button")}
            value={selectedElement}
            icon={<BsMenuButtonFill />}
            name="Button"
          />
        </div>

        <div className="flex">
          <ElElement
            onClick={() => setselectedElement("IconText")}
            value={selectedElement}
            icon={<FaIcons />}
            name="IconText"
            label="Icon Text"
          />
          <ElElement
            onClick={() => setselectedElement("Seperator")}
            value={selectedElement}
            icon={<TbSeparator />}
            name="Seperator"
            label="Seperator"
          />
        </div>
        <div className="flex">
          {!col.hasOwnProperty("innerRowId") && (
            <ElElement
              onClick={() => setselectedElement("InnerRow")}
              value={selectedElement}
              icon={<TbLayoutRows />}
              name="InnerRow"
              label="Nested Row"
            />
          )}
        </div>
      </UiBlob>
    </div>
  );
};

export default AddElementBlob;
