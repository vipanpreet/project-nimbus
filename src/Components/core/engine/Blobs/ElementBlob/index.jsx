import { useState, useEffect } from "react";
import Content from "./Switches/Content";
import Design from "./Switches/Design";
import UiBlob from "../UiBlob";
import { findElement } from "../helpers";

const ElementBolb = ({ element, setElement, page, saveToState, saveToHistory }) => {
  const [Switch, setSwitch] = useState("content");

  const [content, setcontent] = useState({ ...element.content });
  const [settings, setsettings] = useState({ ...element.settings });
  const [styling, setstyling] = useState({ ...element.styling });

  useEffect(() => {
    instantSaveBlob();
  }, [styling]);

  useEffect(() => {
    instantSaveContentBlob();
  }, [content]);

  const instantSaveContentBlob = async () => {
    let elSelected = findElement(page, element);
    // assigning content / settings
    elSelected.content = content;
    saveToState();
  };

  const instantSaveBlob = async () => {
    let elSelected = findElement(page, element);
    // assigning content / settings
    elSelected.styling = styling;
    saveToState();
  };

  const saveBlob = async () => {
    saveToHistory();
    let elSelected = findElement(page, element);
    // assigning content / settings
    elSelected.content = content;
    elSelected.settings = settings;
    elSelected.styling = styling;

    saveToState();
    closeBlob();
  };

  const closeBlob = () => {
    setElement({});
  };

  return (
    <>
      <UiBlob
        actions={{ save: saveBlob, close: closeBlob, undo: null }}
        heading="Element Settings"
        switches={["Content", "Design"]}
        setSwitch={setSwitch}
        Switch={Switch}
      >
        {Switch === "content" ? (
          <Content
            settings={settings}
            setsettings={setsettings}
            setcontent={setcontent}
            content={content}
            elementType={element.element}
          />
        ) : (
          <Design elementType={element.element} setstyling={setstyling} styling={styling} />
        )}
      </UiBlob>
    </>
  );
};

export default ElementBolb;
