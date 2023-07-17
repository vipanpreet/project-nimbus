import { css } from "@emotion/css";
import facepaint from "facepaint";
const TextElement = ({ element }) => {
  const CustomElement = element.settings.tag;

  const breakpoints = [540, 720, 1200];

  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

  return (
    <CustomElement className={css(mq(element.styling.main))}>{element.content.text}</CustomElement>
  );
};

export default TextElement;
