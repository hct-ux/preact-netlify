import { h } from "preact";
import { Suspense } from "preact/compat";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Markdown from "markdown-to-jsx";

import style from "./style";

const component = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  return (
    <article class={style.blogcontainer}>
      {getBlogBody(data, isLoading)}
    </article>
  );
};

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

function getBlogBody(data, isLoading) {
  if (isLoading) {
    return <div class="spinner"></div>;
  }

  if (data && data.data) {
    const { details, content } = data.data;
    console.log(details, content);
    return (
      <div>
        <h1 class={style.blogtitle}>{details.title}</h1>
        <h2>Description</h2>
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
          {details.description}
        </Markdown>
        <br />
        <br />
        {details.cover && (
          <div
            class={style.blogcover}
            style={`background-image:url(${details.cover})`}
          />
        )}
        <div class={style.blogbody}>
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
            {content}
          </Markdown>
        </div>
      </div>
    );
  }
}

export default component;