import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import ContainerBolb from "./engine/Blobs/ContainerBlob";
import isEmpty from "lodash/isEmpty";
import RowBolb from "./engine/Blobs/RowBlob";
import { newContainer, newRow } from "./engine/helpers/pageUtilities";
import UIRowModule from "./engine/UiComponents/UIRowModule";
import UIContainerModule from "./engine/UiComponents/UIContainerModule";
import UIColModule from "./engine/UiComponents/UIColModule";
import ElementBolb from "./engine/Blobs/ElementBlob";
import UIElementModule from "./engine/UiComponents/UIElementModule";
import useHistoryState from "./engine/Functionality/useHistoryState";
import PresetBolb from "./engine/Blobs/PresetBlob";

import { RiAddBoxFill } from "react-icons/ri";
import AddElementBlob from "./engine/Blobs/AddElementBlob";
import InnerRowBolb from "./engine/Blobs/InnerRowBlob";
import FloatingUnit from "./engine/Layout/FloatingUnit";
// import {
//   changePageVersion,
//   createPageVersion,
//   getPageVersion,
//   getPageVersions,
// } from "../redux/page/pageActions";
// import Loader from "../components/Layout/Loader";
import { findColumn } from "./engine/Blobs/helpers";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Core = ({ page, loading, saveHandler, useMetrics }) => {
  const dispatch = useDispatch();
  const [width, height] = useWindowSize();

  const [localState, setlocalState] = useState({
    name: "name",
    url: "url",
    structure: [
      {
        id: "100",
        settings: {
          type: "standard",
          label: "",
        },
        styling: {
          main: {
            background: "#ffffff",
            paddingTop: "0px",
            paddingBottom: "30px",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
        },
        rows: [
          {
            id: "1111",
            containerId: "100",
            classes: {},
            styling: {
              main: {
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "0px",
                paddingRight: "0px",
                marginTop: "5px",
                marginBottom: "5px",
                marginLeft: "0px",
                marginRight: "0px",
                backgroundSize: "cover",
                backgroundPosition: "left",
              },
            },
            settings: {
              cols: {},
              type: "regular",
              bg: {
                position: "left",
                color1: "transparent",
                color2: "transparent",
              },
            },
            columns: [],
          },
        ],
      },
    ],
  });

  const [containerBlob, setcontainerBlob] = useState({});
  const [rowBlob, setrowBlob] = useState({});
  const [innerRowBlob, setinnerRowBlob] = useState({});
  const [elementBlob, setelementBlob] = useState({});
  const [presetBlob, setpresetBlob] = useState({});
  const [addElementBlob, setaddElementBlob] = useState(false);

  const [screenSize, setscreenSize] = useState(0);

  // const pageState = useSelector((state) => state.pageState);
  // const { page, loading } = pageState;

  const [state, setState, undo, redo, history, pointer] = useHistoryState(localState);

  // Functional functions
  const undoState = () => {
    undo();
    // dispatch({ type: REFRESH, payload: state });
  };
  const redoState = () => {
    redo();
    // dispatch({ type: REFRESH, payload: state });
  };

  // Structure functions
  const saveToHistory = () => {
    setState(page);
  };

  const saveToState = () => {
    // dispatch({ type: REFRESH, payload: page });
  };

  //  Container
  const containerOptionsInsert = () => {
    saveToHistory();
    page.structure.push(newContainer());
    saveToState();
  };

  const containerOptionsDelete = (inputContainer) => {
    saveToHistory();
    let containerSelected = page.structure.findIndex(
      (container) => container.id == inputContainer.id
    );
    if (page.structure.length === 1) {
      if (window.confirm("Are you sure? This is last container in builder.")) {
        page.structure.splice(containerSelected, 1);
        saveToState();
        return;
      } else {
        return;
      }
    }
    page.structure.splice(containerSelected, 1);
    saveToState();
  };

  const containerOptionsMoveUp = (inputContainer) => {
    saveToHistory();
    let containerSelectedIndex = page.structure.findIndex(
      (container) => container.id == inputContainer.id
    );
    if (containerSelectedIndex < 1) {
      return;
    }

    page.structure.splice(containerSelectedIndex, 1);
    page.structure.splice(containerSelectedIndex - 1, 0, inputContainer);
    saveToState();
  };

  const rowOptionsInsert = (inputContainer, id) => {
    saveToHistory();
    let containerSelected = page.structure.find((container) => container.id == inputContainer.id);
    containerSelected.rows.splice(id + 1, 0, newRow(inputContainer));
    saveToState();
  };

  const rowOptionsMoveUp = (inputContainer, inputRow) => {
    saveToHistory();
    let containerSelected = page.structure.find((container) => container.id == inputContainer.id);
    let rowSelectedIndex = containerSelected.rows.findIndex((row) => row.id == inputRow.id);
    if (rowSelectedIndex < 1) {
      return;
    }

    containerSelected.rows.splice(rowSelectedIndex, 1);
    containerSelected.rows.splice(rowSelectedIndex - 1, 0, inputRow);
    saveToState();
  };

  const rowOptionsDelete = (inputContainer, inputRow) => {
    saveToHistory();
    let containerSelected = page.structure.find((container) => container.id == inputContainer.id);
    if (containerSelected.rows.length < 2) {
      // avoid removal of last row in container
      return;
    }
    let rowSelectedIndex = containerSelected.rows.findIndex((row) => row.id == inputRow.id);
    containerSelected.rows.splice(rowSelectedIndex, 1);
    saveToState();
  };

  // Element Functions
  const elementOptionsDelete = (element, index) => {
    saveToHistory();
    // let containerSelected = page.structure.find((container) => container.id == element.containerId);
    // let rowSelected = containerSelected.rows.find((row) => row.id == element.rowId);
    // let colSelected = rowSelected.columns.find((c) => c.id == element.columnId);
    let colSelected = findColumn(page, element);
    colSelected.elements.splice(index, 1);
    saveToState();
  };

  const elementOptionsClone = (element, index) => {
    saveToHistory();

    let colSelected = findColumn(page, element);

    let id = String(colSelected.id) + +"-" + String(Math.floor(Math.random() * 1000000));
    let newEl = { ...element, id: String(id) };
    colSelected.elements.push(newEl);
    saveToState();
  };

  const elementOptionsDownload = (element) => {
    setpresetBlob({ ...element, type: "add" });
  };
  const elementOptionsUpload = (element) => {
    setpresetBlob({ ...element, type: "management" });
  };

  const onDragEnd = (result, col) => {
    saveToHistory();
    let containerSelected = page.structure.find((container) => container.id == col.containerId);
    let rowSelected = containerSelected.rows.find((row) => row.id == col.rowId);
    let colSelected = rowSelected.columns.find((c) => c.id == col.id);
    const items = colSelected.elements;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    colSelected.elements = items;
    saveToState();
  };

  const startHandler = () => {
    page.structure = [...localState?.structure];
    saveToState();
  };

  return (
    <div className=" bg-white min-h-screen">
      {isEmpty(page) ? (
        <div>Loading</div>
      ) : (
        <>
          <FloatingUnit
            loading={loading}
            pointer={pointer}
            actions={{ undoState, redoState }}
            saveHandler={saveHandler}
          />
          {/* Main */}

          <div className="mt-1">
            {!isEmpty(containerBlob) && (
              <ContainerBolb
                saveToState={saveToState}
                saveToHistory={saveToHistory}
                page={page}
                container={containerBlob}
                setContainer={setcontainerBlob}
              />
            )}
            {!isEmpty(rowBlob) && (
              <RowBolb
                row={rowBlob}
                setRow={setrowBlob}
                saveToState={saveToState}
                saveToHistory={saveToHistory}
                page={page}
              />
            )}

            {!isEmpty(innerRowBlob) && (
              <InnerRowBolb
                row={innerRowBlob}
                setRow={setinnerRowBlob}
                saveToState={saveToState}
                saveToHistory={saveToHistory}
                page={page}
              />
            )}

            {!isEmpty(elementBlob) && (
              <ElementBolb
                saveToHistory={saveToHistory}
                element={elementBlob}
                setElement={setelementBlob}
                saveToState={saveToState}
                page={page}
              />
            )}
            {!isEmpty(presetBlob) && (
              <PresetBolb
                saveToHistory={saveToHistory}
                saveToState={saveToState}
                element={presetBlob}
                page={page}
                setpresetBlob={setpresetBlob}
              />
            )}

            {!isEmpty(addElementBlob) && (
              <AddElementBlob
                setaddElementBlob={setaddElementBlob}
                col={addElementBlob}
                saveToHistory={saveToHistory}
                saveToState={saveToState}
              />
            )}

            <div>
              {useMetrics && (
                <span className="text-xxs text-zinc-600 ml-1">
                  {width} x {height}
                </span>
              )}
            </div>
            {isEmpty(page?.structure) ? (
              <div className="border py-20 px-4 text-center">
                <div className="md:text-3xl text-xl text-black">
                  To get started, add a Container
                </div>
                <div className="text-base text-zinc-600 mt-2">
                  The building process always starts with a container, then columns, then elements.
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={startHandler}
                    className="px-10 py-3.5 text-sm font-bold text-white rounded bg-sky-500 flex items-center mx-auto"
                  >
                    <RiAddBoxFill className="mr-2" /> Add Container
                  </button>
                </div>
              </div>
            ) : (
              <div
                style={{ maxWidth: screenSize === 0 ? "100%" : screenSize + "vw" }}
                className="mx-auto"
              >
                {page?.structure?.map((container) => (
                  <UIContainerModule
                    key={container.id}
                    container={container}
                    actions={{
                      containerOptionsInsert,
                      containerOptionsDelete,
                      containerOptionsMoveUp,
                    }}
                    setBlob={setcontainerBlob}
                  >
                    {container?.rows.map((row, id) => (
                      <UIRowModule
                        id={id}
                        key={row.id}
                        actions={{ rowOptionsInsert, rowOptionsDelete, rowOptionsMoveUp }}
                        setBlob={setrowBlob}
                        data={{ row, container }}
                      >
                        {row.columns.map((col, i) => (
                          <UIColModule
                            key={col.id}
                            data={{ row, col }}
                            blobPass={{ saveToState: saveToState, saveToHistory: saveToHistory }}
                            setaddElementBlob={setaddElementBlob}
                          >
                            <DragDropContext onDragEnd={(result) => onDragEnd(result, col)}>
                              <Droppable direction="vertical" droppableId="list">
                                {(provided) => (
                                  <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {col.elements?.map((element, i) => (
                                      <UIElementModule
                                        page={page}
                                        key={element.id}
                                        index={i}
                                        actions={{
                                          elementOptionsDelete,
                                          elementOptionsClone,
                                          elementOptionsDownload,
                                          elementOptionsUpload,
                                        }}
                                        setaddElementBlob={setaddElementBlob}
                                        data={{ element }}
                                        setBlob={setelementBlob}
                                        blobPass={{ setinnerRowBlob, saveToState }}
                                      />
                                    ))}
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            </DragDropContext>
                          </UIColModule>
                        ))}
                      </UIRowModule>
                    ))}
                  </UIContainerModule>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Core;
