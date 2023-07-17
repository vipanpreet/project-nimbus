import { css } from "@emotion/css";
import facepaint from "facepaint";
import * as Icon from "react-icons/ai";
const IconTextElement = ({ element }) => {
  const CustomElement = element.settings.tag;
  const CustomIcon = Icon[element.content.icon];

  const breakpoints = [540, 720, 1200];

  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

  return (
    <div className={`flex items-center justify-center ${css(mq(element.styling.div))}`}>
      {element.content.icon && (
        <div className={`flex items-center justify-center ${css(mq(element.styling.icon))}`}>
          <CustomIcon />
        </div>
      )}

      <CustomElement className={css(mq(element.styling.main))}>
        {element.content.text}
      </CustomElement>
    </div>
  );
};

export default IconTextElement;
