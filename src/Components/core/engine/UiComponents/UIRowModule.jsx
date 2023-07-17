import { css } from "@emotion/css";
import { TbCopy, TbLayoutRows, TbUpload } from "react-icons/tb";
import { MdBrush, MdDelete } from "react-icons/md";

const UIRowModule = ({ children, data, actions, setBlob, id }) => {
  let { rowOptionsInsert, rowOptionsDelete, rowOptionsMoveUp } = actions;

  let { row, container } = data;

  return (
    <div
      key={row.id}
      style={row.columns?.length === 0 ? { paddingTop: "40px", paddingBottom: "40px" } : {}}
      className={`ui-border row-border ${css(row.styling.main)}`}
    >
      {/* options */}
      <div className="options row-options z-10 bg-sky-600">
        <span onClick={() => setBlob(row)} className="text-white cursor-pointer">
          <MdBrush size={16} />
        </span>
        <span
          onClick={() => rowOptionsInsert(container, id)}
          className="text-white cursor-pointer "
        >
          <TbLayoutRows size={16} />
        </span>
        <span
          onClick={() => rowOptionsMoveUp(container, row)}
          className="text-white cursor-pointer"
        >
          <TbUpload size={16} />
        </span>

        <span className="text-white cursor-pointer">
          <TbCopy size={16} />
        </span>
        <span
          onClick={() => rowOptionsDelete(container, row)}
          className="text-white cursor-pointer"
        >
          <MdDelete size={16} />
        </span>
      </div>

      <div className={`flex justify-between ${row.settings.type}`}>{children}</div>
    </div>
  );
};

export default UIRowModule;
