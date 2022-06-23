import { h } from "preact";
import { Suspense } from "preact/compat";
import { useState } from "preact/hooks";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Markdown from "markdown-to-jsx";
import Example from "../../components/example";
import StatusBadge from "../../components/status-badge";
import WCAGStatusBadge from "../../components/wcag-status-badge";
import style from "./style";

const component = (props) => {
  const [data, isLoading] = usePrerenderData(props);

  return (
    <article class={style.componentcontainer}>
      {getComponentBody(data, isLoading)}
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

function usageDetails(details) {
  return (
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
      {details.integration}
    </Markdown>
  );
}

function generalDetails(details, content) {
  return (
    <div>
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
      <div class={style.examples}>
        <h2>Examples</h2>
        {details.examples.map((example) => {
          return <Example example={example} />;
        })}
      </div>
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
        <div class={style.doanddont}>
          <div class={style.dos}>
            <h3>Do...</h3>
            <ul>
              {details.dos.map((dont) => (
                <li>{dont}</li>
              ))}
            </ul>
          </div>
          <div class={style.donts}>
            <h3>Don't...</h3>
            <ul>
              {details.donts.map((dont) => (
                <li>{dont}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
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

function header(details) {
  return (
    <>
      <h1 class={style.blogtitle}>{details.title}</h1>
      <div class={style.badges}>
        <StatusBadge component={details} />
        <WCAGStatusBadge component={details} />
      </div>
    </>
  );
}

function getComponentBody(data, isLoading) {
  const [tab, setTab] = useState("details");
  if (isLoading) {
    return <div class="spinner"></div>;
  }

  if (data && data.data) {
    const { details, content } = data.data;
    if (details.integration) {
      return (
        <>
          {header(details)}
          <ul class="tab-bar w-100">
            <li
              onClick={() => {
                setTab("details");
              }}
              class={`tab ${tab === "details" ? "tab--active" : ""}`}
              tabindex="0"
            >
              Details
            </li>
            <li
              onClick={() => {
                setTab("usage");
              }}
              class={`tab ${tab === "usage" ? "tab--active" : ""}`}
              tabindex="0"
            >
              Usage Information
            </li>
          </ul>
          <div class={style.content}>
            {tab === "details" && generalDetails(details, content)}
            {tab === "usage" && usageDetails(details, content)}
          </div>
        </>
      );
    } else {
      return (
        <>
          {header(details)}
          <div class={style.content}>{generalDetails(details, content)}</div>
        </>
      );
    }
  }
}

export default component;
