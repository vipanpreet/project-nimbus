import { lazy, Suspense, useEffect, useState } from "react";

const DesignText = lazy(() => import("./DesignVariations/DesignText"));
const DesignButton = lazy(() => import("./DesignVariations/DesignButton"));
const DesignSeperator = lazy(() => import("./DesignVariations/DesignSeperator"));
const DesignIconText = lazy(() => import("./DesignVariations/DesignIconText"));

const Design = (props) => {
  const { elementType } = props;
  const [styling, setstyling] = useState({ ...props.styling });

  useEffect(() => {
    props.setstyling({ ...props.styling, ...styling });
  }, [styling]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      {elementType === "Text" ? (
        <DesignText styling={styling} setstyling={setstyling} />
      ) : elementType === "Button" ? (
        <DesignButton styling={styling} setstyling={setstyling} />
      ) : elementType === "Seperator" ? (
        <DesignSeperator styling={styling} setstyling={setstyling} />
      ) : elementType === "IconText" ? (
        <DesignIconText styling={styling} setstyling={setstyling} />
      ) : null}
    </Suspense>
  );
};

export default Design;
