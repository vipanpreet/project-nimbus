import { css } from "@emotion/css";

const SeperatorElement = ({ element }) => {
  return (
    <div className={`flex ${css(element?.styling?.div)}`}>
      <div className={css(element.styling.main)}></div>
    </div>
  );
};

export default SeperatorElement;
