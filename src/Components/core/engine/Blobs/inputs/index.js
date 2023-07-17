import { VscRefresh } from "react-icons/vsc";
import { SketchPicker } from "react-color";
import { useState } from "react";

export const ElInput = ({ name, label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="text-xs pb-1 text-zinc-600 block" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...rest}
        name={name}
        id={name}
        className="bg-zinc-100 mt-1.5 text-xs rounded-md px-4 py-2 h-10 w-full border-none outline-none block"
      />
    </div>
  );
};

export const ElTextArea = ({ name, label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="text-xs pb-1 text-zinc-600 block" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        {...rest}
        name={name}
        id={name}
        rows="8"
        className="bg-zinc-100 mt-1.5 text-xs rounded-md px-4 py-2 h-auto w-full border-none outline-none block"
      />
    </div>
  );
};

export const ElSelect = ({ name, children, label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="text-xs pb-1 text-zinc-600 block" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        {...rest}
        name={name}
        id={name}
        className="bg-zinc-100 mt-1.5 text-xs rounded-md px-4 py-2 h-10 w-full border-none outline-none block"
      >
        {children}
      </select>
    </div>
  );
};
export const ElOptions = ({ data, value, onClick, label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && <div className="text-sm text-zinc-800 block">{label}</div>}
      <div className="flex items-center mt-1">
        {data.map((el) => (
          <div
            {...rest}
            onClick={() => onClick(el.text)}
            className={`${
              value === el.text ? "bg-sky-600 text-white" : "bg-zinc-100"
            } px-2 py-3 rounded mr-2 flex items-center justify-center cursor-pointer w-full`}
            key={el.text}
          >
            <div className="text-inherit font-lg">{el.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ElRange = ({ name, label, value = "0", onReset, placeholder, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <div className="flex items-center justify-between mr-4">
          <label className="text-xs pb-1 text-zinc-600 block" htmlFor={name}>
            {label}
          </label>
          <span className="cursor-pointer">
            <VscRefresh size={14} color="#555" onClick={onReset} />
          </span>
        </div>
      )}

      <div className="flex items-center mr-2">
        <div className="w-16 relative">
          <input
            className="bg-zinc-100 rounded py-1.5 w-full pl-4 text-xxs text-zinc-700"
            onChange={onChange}
            value={value}
            type="number"
            step="0.25"
          />
          <div className="absolute top-1.5 right-3 text-xs text-zinc-700">
            {placeholder ? placeholder : ""}
          </div>
        </div>
        <input
          {...rest}
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          type="range"
          className="form-range appearance-none w-full h-1.5 ml-2
          p-0 bg-zinc-100 active:bg-sky-200 transition-all focus:outline-none focus:ring-0 focus:shadow-none"
        />
      </div>
    </div>
  );
};

export const ElColor = ({ name, label, value, templates, onTemplateClick, onChange, ...rest }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="mb-4" onMouseLeave={() => setisOpen(false)}>
      <div className="flex items-center justify-between">
        {label && (
          <label className="text-xs pb-1 text-zinc-600 block" htmlFor={name}>
            {label}
          </label>
        )}
        {templates && (
          <div className="flex">
            {templates?.map((color) => (
              <div
                onClick={() => onTemplateClick(color)}
                className="border border-solid border-gray-500 p-0.5 hover:border-gray-900 transition-all mr-2 cursor-pointer rounded-full"
              >
                <div className="w-4 h-4 rounded-full" style={{ background: color }}></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        onClick={() => setisOpen(!isOpen)}
        style={{ background: value }}
        className="w-full h-4 border my-1"
      ></div>
      {isOpen && <SketchPicker width="95%" color={value} onChangeComplete={onChange} />}
    </div>
  );
};

export const ElcolsInput = ({ onClick, value }) => {
  // c: cols
  // t: type = r: regular , s:special
  // s: structure
  // s. repersents cols i starts from 1 upto 'c'
  // n: serial number

  const onSelectRow = (e) => {
    onClick(e);
  };

  return (
    <div>
      <div className="flex flex-wrap w-full h-auto">
        {/* ROW 1 */}
        <div
          onClick={() => onSelectRow({ n: 0, c: 1, t: "md:flex-row flex-col", s: { 1: "w-full" } })}
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-full ${
              value?.n == 0 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 1,
              c: 2,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/2 w-full", 2: "md:w-1/2 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/2 ${
              value?.n == 1 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/2 ${
              value?.n == 1 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 2,
              c: 3,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/3 w-full", 2: "md:w-1/3 w-full", 3: "md:w-1/3 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/3 ${
              value?.n == 2 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/3 ${
              value?.n == 2 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/3 ${
              value?.n == 2 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        {/* ROW 2 */}
        <div
          onClick={() =>
            onSelectRow({
              n: 3,
              c: 4,
              t: "md:flex-row flex-col",
              s: {
                1: "md:w-1/4 w-full",
                2: "md:w-1/4 w-full",
                3: "md:w-1/4 w-full",
                4: "md:w-1/4 w-full",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 3 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 3 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 3 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 3 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 4,
              c: 5,
              t: "md:flex-row flex-col",
              s: {
                1: "md:w-1/5 w-full",
                2: "md:w-1/5 w-full",
                3: "md:w-1/5 w-full",
                4: "md:w-1/5 w-full",
                5: "md:w-1/5 w-full",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/5 ${
              value?.n == 4 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 5,
              c: 6,
              t: "md:flex-row flex-col",
              s: {
                1: "md:w-1/6 w-full",
                2: "md:w-1/6 w-full",
                3: "md:w-1/6 w-full",
                4: "md:w-1/6 w-full",
                5: "md:w-1/6 w-full",
                6: "md:w-1/6 w-full",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 5 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        {/* ROW 3 */}
        <div
          onClick={() =>
            onSelectRow({
              n: 6,
              c: 2,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/3 w-full", 2: "md:w-2/3 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/3 ${
              value?.n == 6 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-2/3 ${
              value?.n == 6 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 7,
              c: 2,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-2/3 w-full", 2: "md:w-1/3 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-2/3 ${
              value?.n == 7 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/3 ${
              value?.n == 7 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 8,
              c: 2,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-3/4 w-full", 2: "md:w-1/4 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/4 ${
              value?.n == 8 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 8 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        {/* ROW 4 */}
        <div
          onClick={() =>
            onSelectRow({
              n: 9,
              c: 2,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/4 w-full", 2: "md:w-3/4 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 9 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/4 ${
              value?.n == 9 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 10,
              c: 3,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/4 w-full", 2: "md:w-2/4 w-full", 3: "md:w-1/4 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 10 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-2/4 ${
              value?.n == 10 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 10 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 11,
              c: 3,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-1/6 w-full", 2: "md:w-4/6 w-full", 3: "md:1/6 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 11 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-4/6 ${
              value?.n == 11 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 11 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 12,
              c: 3,
              t: "md:flex-row flex-col",
              s: {
                1: "md:w-6/12 w-full",
                2: "md:w-3/12 w-full",
                3: "md:w-3/12 w-full",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-6/12 ${
              value?.n == 12 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 12 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 12 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 13,
              c: 3,
              t: "md:flex-row flex-col",
              s: { 1: "md:w-3/12 w-full", 2: "md:w-3/12 w-full", 3: "md:w-6/12 w-full" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 13 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 13 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-6/12 ${
              value?.n == 13 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>
      </div>

      <h5 className="text-sm text-zinc-800 block ml-2.5 mb-1 mt-4">
        Special Columns (Non Responsive)
      </h5>

      <div className="flex flex-wrap w-full h-auto">
        <div
          onClick={() =>
            onSelectRow({
              n: 14,
              c: 2,
              t: "flex-wrap",
              s: { 1: "md:w-6/12 w-1/2", 2: "md:w-6/12 w-1/2" },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/2 ${
              value?.n == 14 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/2 ${
              value?.n == 14 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 15,
              c: 4,
              t: "flex-wrap",
              s: {
                1: "md:w-3/12 w-1/2",
                2: "md:w-3/12 w-1/2",
                3: "md:w-3/12 w-1/2",
                4: "md:w-3/12 w-1/2",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 15 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 15 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 15 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/4 ${
              value?.n == 15 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 16,
              c: 3,
              t: "flex-wrap",
              s: {
                1: "md:w-6/12 w-full",
                2: "md:w-3/12 w-1/2",
                3: "md:w-3/12 w-1/2",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-6/12 ${
              value?.n == 16 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 16 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-3/12 ${
              value?.n == 16 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>

        <div
          onClick={() =>
            onSelectRow({
              n: 17,
              c: 6,
              t: "flex-wrap",
              s: {
                1: "md:w-1/6 w-1/2",
                2: "md:w-1/6 w-1/2",
                3: "md:w-1/6 w-1/2",
                4: "md:w-1/6 w-1/2",
                5: "md:w-1/6 w-1/2",
                6: "md:w-1/6 w-1/2",
              },
            })
          }
          className="w-1/3 flex rounded cursor-pointer overflow-hidden h-12 px-2 group my-2.5"
        >
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
          <div
            className={`group-hover:bg-zinc-400 mx-0.5 rounded w-1/6 ${
              value?.n == 17 ? "bg-zinc-400" : "bg-zinc-100"
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const ElElement = ({ icon, name, label, value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full mx-2 my-2 cursor-pointer rounded px-3 py-4 flex items-center flex-col ${
        value === name ? "bg-zinc-200" : "bg-zinc-100"
      } hover:bg-zinc-200 transition-all`}
    >
      <div className="text-zinc-600 text-xl">{icon}</div>
      <h4 className="text-zinc-700 font-normal tracking-wide text-sm mt-2">{label || name}</h4>
    </div>
  );
};
