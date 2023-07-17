import { IoMdArrowUp } from "react-icons/io";
import { MdBrush, MdDelete } from "react-icons/md";
import { TbCopy, TbLayoutBottombar } from "react-icons/tb";

const UIContainerModule = ({ children, container, actions, setBlob }) => {
  const { styling, settings } = container;
  const { containerOptionsInsert, containerOptionsDelete, containerOptionsMoveUp } = actions;
  return (
    <section
      style={{ ...styling.main }}
      className={`ui-border relative container-border container-${settings.type} `}
    >
      {/* options */}
      <div className="options z-10 container-options bg-sky-600">
        <span onClick={() => setBlob(container)} className="text-white cursor-pointer">
          <MdBrush size={16} />
        </span>

        <span onClick={containerOptionsInsert} className="text-white cursor-pointer">
          <TbLayoutBottombar size={16} />
        </span>

        <span
          onClick={() => containerOptionsMoveUp(container)}
          className="text-white cursor-pointer"
        >
          <IoMdArrowUp size={16} />
        </span>
        <span className="text-white cursor-pointer">
          <TbCopy size={16} />
        </span>
        <span
          onClick={() => containerOptionsDelete(container)}
          className="text-white cursor-pointer"
        >
          <MdDelete size={16} />
        </span>
      </div>

      {children}
    </section>
  );
};

export default UIContainerModule;
