import { lazy, Suspense, useState, useEffect } from "react";

const ContentText = lazy(() => import("./ContentVariations/ContentText"));
const ContentButton = lazy(() => import("./ContentVariations/ContentButton"));
const ContentSeperator = lazy(() => import("./ContentVariations/ContentSeperator"));
const ContentIconText = lazy(() => import("./ContentVariations/ContentIconText"));

const Content = (props) => {
  const { elementType } = props;
  const [content, setcontent] = useState({ ...props.content });

  useEffect(() => {
    props.setcontent({ ...props.content, ...content });
  }, [content]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      {elementType === "Text" ? (
        <ContentText {...props} />
      ) : elementType === "Button" ? (
        <ContentButton {...props} />
      ) : elementType === "IconText" ? (
        <ContentIconText {...props} />
      ) : elementType === "Seperator" ? (
        <ContentSeperator {...props} />
      ) : null}
    </Suspense>
  );
};

export default Content;
