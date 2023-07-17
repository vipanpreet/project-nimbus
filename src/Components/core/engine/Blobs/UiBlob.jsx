import { useState } from "react";
import { BsCheck, BsLayoutSidebarInset, BsX, BsXLg } from "react-icons/bs";
import { AiOutlineFullscreen, AiOutlineUndo } from "react-icons/ai";
import { MdOutlineFullscreen } from "react-icons/md";
import Draggable from "react-draggable";

const UiBlob = ({ actions, children, switches, Switch, setSwitch, heading }) => {
  const [mode, setmode] = useState("stack");
  const [dragStates, setdragStates] = useState({
    disabled: true,
    offset: { x: "-50%", y: "-50%" },
  });

  return (
    <Draggable
      handle=".handle"
      positionOffset={dragStates.disabled ? { x: 0, y: 0 } : dragStates.offset}
      position={dragStates.disabled ? { x: 0, y: 0 } : undefined}
      grid={[25, 25]}
      scale={1}
    >
      <div
        className={`${
          mode === "full"
            ? "w-2/3 left-0 top-0 h-full"
            : mode === "stack"
            ? "w-96 left-0 top-0 h-full"
            : "w-[400px] transform -translate-y-1/2 -translate-x-1/2 left-1/3 h-auto ui-main top-1/2"
        } rounded transition-all shadow-lg fixed z-50 overflow-hidden bg-white`}
      >
        {/* Header */}
        <div
          className={`${
            mode === "stack" ? "bg-zinc-50 text-zinc-700" : "bg-zinc-800 text-white"
          } h-12 pt-2.5 pl-9 handle cursor-move`}
        >
          <div className="absolute top-4 right-4 flex items-center">
            <span
              onClick={() => {
                setmode("full");
                setdragStates({ ...dragStates, disabled: true });
              }}
              className="cursor-pointer mr-2 text-inherit"
            >
              <AiOutlineFullscreen className="text-inherit" size={16} />
            </span>
            {mode !== "stack" && (
              <span
                onClick={() => {
                  setmode("stack");
                  setdragStates({ ...dragStates, disabled: true });
                }}
                className="cursor-pointer mr-2 text-inherit"
              >
                <BsLayoutSidebarInset className="text-inherit" size={16} />
              </span>
            )}

            {mode !== "normal" && (
              <span
                onClick={() => {
                  setmode("normal");
                  setdragStates({ ...dragStates, disabled: false });
                }}
                className="cursor-pointer"
              >
                <MdOutlineFullscreen className="text-inherit" size={20} />
              </span>
            )}
          </div>
          <div className="text-inherit text-lg font-semibold tracking-wide">{heading}</div>
        </div>

        {/* Switches */}
        {switches && (
          <div className="bg-sky-700 h-10 overflow-hidden flex items-center">
            {switches.map((sw) => (
              <div
                key={sw}
                onClick={() => setSwitch(sw.toLowerCase())}
                className={`w-full cursor-pointer ${
                  sw.toLowerCase() == Switch?.toLowerCase() ? "bg-sky-600/70" : "bg-sky-600"
                } h-full text-sm text-white font-semibold flex items-center justify-center`}
              >
                {sw}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className={`${mode == "stack" ? "ui-child ui-child-full" : "ui-child"}`}>
          {children}
        </div>

        {/* Footer --- Actions */}
        <div className="absolute bottom-0 left-0 bg-white w-full h-10 flex">
          <div
            onClick={actions.save}
            className="bg-teal-400 w-full cursor-pointer text-white flex items-center justify-center py-4"
          >
            <BsCheck size={30} className="text-teal-600" />
          </div>
          {/* <div
            onClick={actions.undo}
            className="bg-blue-500 w-full cursor-pointer text-white flex items-center justify-center py-4"
          >
            <AiOutlineUndo size={20} />
          </div> */}
          <div
            onClick={actions.close}
            className="bg-red-400 w-full cursor-pointer text-white flex items-center justify-center py-4"
          >
            <BsX size={30} className="text-red-600" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default UiBlob;
