import { RiDeleteBin2Fill, RiDragMove2Line, IoIosSettings, MdViewColumn } from "./reusables/icons";

import { findColumn } from "../Blobs/helpers";
import { RiFileCopyFill, RiSaveFill, RiUpload2Fill } from "react-icons/ri";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdAdd, MdBrush } from "react-icons/md";

import TextElement from "../Elements/TextElement";
import ButtonElement from "../Elements/ButtonElement";
import UIColModule from "./UIColModule";
import SeperatorElement from "../Elements/SeperatorElement";
import IconTextElement from "../Elements/IconTextElement";

const UIInnerRow = ({ element, setaddElementBlob, setinnerRowBlob, actions, page, setBlob }) => {
  const onDragEnd = (result, col) => {
    // saveToHistory();
    // let containerSelected = page.structure.find((container) => container.id == col.containerId);
    // let rowSelected = containerSelected.rows.find((row) => row.id == col.rowId);
    // let colSelected = rowSelected.columns.find((c) => c.id == col.id);
    // const items = colSelected.elements;
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // colSelected.elements = items;
    // saveToState();
  };

  return (
    <div
      style={element.columns?.length === 0 ? { paddingTop: "40px", paddingBottom: "40px" } : {}}
      className="relative ui-border row-border"
    >
      <div className="options inner-row-options  z-10 bg-sky-600">
        <span onClick={() => setinnerRowBlob(element)} className="text-white cursor-pointer">
          <MdBrush size={16} />
        </span>
      </div>
      <div className={`flex justify-between ${element.settings.type}`}>
        {element?.columns.map((col) => (
          <UIColModule setaddElementBlob={setaddElementBlob} data={{ col }}>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, col)}>
              <Droppable direction="vertical" droppableId="list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {col.elements?.map((innerEl, i) => (
                      <UIElementModule
                        data={{ element: innerEl }}
                        actions={{ ...actions }}
                        blobPass={{ setinnerRowBlob }}
                        page={page}
                        key={innerEl.id}
                        index={i}
                        setBlob={setBlob}
                        setaddElementBlob={setaddElementBlob}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </UIColModule>
        ))}
      </div>
    </div>
  );
};

const UIElementModule = ({ data, setBlob, page, actions, index, setaddElementBlob, blobPass }) => {
  let { element } = data;

  let { element: elementType } = element;
  let { elementOptionsDelete, elementOptionsClone, elementOptionsDownload, elementOptionsUpload } =
    actions;

  let { setinnerRowBlob, saveToState } = blobPass;

  const addElementHandler = (el) => {
    let colSelected = findColumn(page, el);
    setaddElementBlob(colSelected);
  };
  return (
    <Draggable draggableId={element.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          {element?.id ? (
            <div key={element.id} className={`ui-border element-border`}>
              {/* options */}

              <div className="options z-10 element-options bg-sky-600">
                {elementType !== "InnerRow" && (
                  <span
                    onClick={() => setBlob({ ...element, index })}
                    className="text-white cursor-pointer"
                  >
                    <MdBrush size={16} />
                  </span>
                )}

                <span
                  onClick={() => addElementHandler(element)}
                  className="text-white cursor-pointer"
                >
                  <MdAdd size={18} />
                </span>

                <span {...provided.dragHandleProps} className="text-white cursor-pointer">
                  <RiDragMove2Line size={16} />
                </span>

                <span
                  onClick={() => elementOptionsClone(element, index)}
                  className="text-white cursor-pointer"
                >
                  <RiFileCopyFill size={16} />
                </span>

                <span
                  onClick={() => elementOptionsDownload(element)}
                  className="text-white cursor-pointer"
                >
                  <RiSaveFill size={16} />
                </span>
                <span
                  onClick={() => elementOptionsUpload(element)}
                  className="text-white cursor-pointer"
                >
                  <RiUpload2Fill size={16} />
                </span>

                {elementType !== "Catalogue" ? (
                  <span
                    onClick={() => elementOptionsDelete(element, index)}
                    className="text-white cursor-pointer"
                  >
                    <RiDeleteBin2Fill size={16} />
                  </span>
                ) : (
                  <span className="text-zinc-800 hover:text-zinc-500 cursor-not-allowed">
                    <RiDeleteBin2Fill size={16} />
                  </span>
                )}
              </div>

              <div>
                {/* <RenderElement /> */}
                {elementType === "Button" ? (
                  <ButtonElement element={element} />
                ) : elementType === "Text" ? (
                  <TextElement element={element} />
                ) : elementType === "Seperator" ? (
                  <SeperatorElement element={element} />
                ) : elementType === "IconText" ? (
                  <IconTextElement element={element} />
                ) : (
                  <UIInnerRow
                    element={element}
                    setinnerRowBlob={setinnerRowBlob}
                    setaddElementBlob={setaddElementBlob}
                    actions={actions}
                    page={page}
                    setBlob={setBlob}
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </Draggable>
  );
};

export default UIElementModule;
