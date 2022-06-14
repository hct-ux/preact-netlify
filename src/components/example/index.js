import Markdown from "markdown-to-jsx";
import { useState } from "preact/hooks";

import style from "./style";

function CodeBlock(props) {
  const fallback = (
    <pre>
      <code>{props.children}</code>
    </pre>
  );
  if (typeof window === "undefined") {
    return fallback;
  }
  return (
    <Suspense fallback={fallback}>
      <FormattedCodeBlock {...props} />
    </Suspense>
  );
}

function InlineImage({ alt, title, src }) {
  return (
    <div class={style.inlineImageContainer}>
      <img class={style.inlineImage} src={src} alt={alt} />
      {title && <span class={style.inlineImageTitle}>{title}</span>}
    </div>
  );
}

const example = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <div class={style.example}>
      <h3>{props.example.title}</h3>
      <Markdown
        options={{
          overrides: {
            img: {
              component: InlineImage,
            },
            code: {
              component: CodeBlock,
            },
          },
        }}
      >
        {props.example.description}
      </Markdown>
      {props.example.preview && (
        <div
          class={`${style.previewContainer} ${
            loading ? style.previewContainerLoading : ""
          }`}
        >
          <iframe
            onLoad={() => {
              setLoading(false);
            }}
            class={`${style.examplePreview} ${
              loading ? style.previewLoading : ""
            }`}
            src={props.example.preview}
          ></iframe>
          <div
            class="spinner"
            style={{ display: loading ? "block" : "none" }}
          ></div>
          <span style={{ display: loading ? "block" : "none" }}>
            Loading preview...
          </span>
        </div>
      )}
    </div>
  );
};

export default example;
