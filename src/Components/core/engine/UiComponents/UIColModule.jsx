import isEmpty from "lodash/isEmpty";
import { MdAdd } from "react-icons/md";
const UIColModule = ({ children, data, blobPass, setaddElementBlob }) => {
  let { col } = data;
  return (
    <>
      <div
        className={`${
          isEmpty(col.elements) && "col-noelement my-8"
        } col-custom relative ui-border w-full ${col.settings.type}`}
      >
        {/* options */}
        {isEmpty(col.elements) && (
          <div
            onClick={() => setaddElementBlob({ ...col })}
            className="absolute top-1/2 left-1/2 transition-all hover:w-8 hover:h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-7 h-7 rounded flex justify-center text-white items-center bg-sky-600"
          >
            <MdAdd size={20} />
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default UIColModule;
