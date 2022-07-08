import { useState } from "preact/hooks";

import style from "./style";

const loadableFrame = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      {...props}
      class={`${style.previewContainer} ${
        loading ? style.previewContainerLoading : ""
      } ${props.class ? props.class : ""}`}
    >
      {props?.cover && <div class={style.previewContainer__cover}></div>}
      <iframe
        {...props}
        onLoad={() => {
          setLoading(false);
        }}
        class={`${style.examplePreview} ${loading ? style.previewLoading : ""}`}
        src={props.url}
      ></iframe>
      <div
        class="spinner"
        style={{ display: loading ? "block" : "none" }}
      ></div>
      <span style={{ display: loading ? "block" : "none" }}>
        Loading preview...
      </span>
    </div>
  );
};

export default loadableFrame;
