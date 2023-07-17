import { css } from "@emotion/css";
import facepaint from "facepaint";

const ButtonElement = ({ element }) => {
  const breakpoints = [540, 720, 1200];

  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

  return (
    <div className={css(mq(element.styling.div))}>
      <button style={{ ...element.styling.main }}>{element.content.button}</button>
    </div>
  );
};

export default ButtonElement;
