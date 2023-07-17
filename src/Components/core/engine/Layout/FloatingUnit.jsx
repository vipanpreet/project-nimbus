import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdRedo, MdUndo } from "react-icons/md";

const FloatingUnit = ({ pointer, loading, actions, saveHandler }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg z-40 rounded">
      {loading ? (
        <div className="px-4 py-2">
          <AiOutlineLoading size={24} className="text-teal-600 animate-spin" />
        </div>
      ) : (
        <>
          <div
            onClick={saveHandler}
            className="bg-teal-600 w-full py-1.5 text-white text-xs rounded-t text-center cursor-pointer"
          >
            Save
          </div>
          <div className="flex">
            <div className="py-1 px-2">
              <MdUndo
                className={`${
                  pointer > 0
                    ? "text-slate-800 cursor-pointer"
                    : "text-slate-300 pointer-events-none cursor-default"
                } mr-1`}
                onClick={actions.undoState}
              />
            </div>
            <div className="py-1 px-2">
              <MdRedo
                className={`${
                  pointer > -1
                    ? "text-slate-800 cursor-pointer"
                    : "text-slate-300 pointer-events-none cursor-default"
                } cursor-pointer`}
                onClick={actions.redoState}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingUnit;
