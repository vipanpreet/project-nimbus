import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ setpanel, panel, children, active }) => {
  return (
    <div className="border-b border-solid border-zinc-100 last-of-type:border-transparent py-2">
      <div
        onClick={() => setpanel(panel === active ? "" : panel)}
        className={`${
          panel === active ? "text-blue-500" : "text-zinc-600"
        } text-lg font-light py-1 cursor-pointer flex items-center justify-between`}
      >
        <span>{panel}</span>
        <BiChevronDown />
      </div>
      <div className={`mt-4 ${panel === active ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
