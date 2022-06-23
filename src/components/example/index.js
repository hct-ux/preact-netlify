import Markdown from "markdown-to-jsx";
import { useState } from "preact/hooks";
import LoadableFrame from "../loadable-frame";
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
        <LoadableFrame
          title={`Preview for example ${props.example.title}`}
          url={props.example.preview}
        />
      )}
    </div>
  );
};

export default example;
