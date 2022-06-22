import { h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router";
import { usePrerenderData } from "@preact/prerender-data-provider";
import style from "./style";
import LoadableFrame from "../../components/loadable-frame";

const components = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  const [search, setSearch] = useState("");
  return (
    <div class={style.pageBlogs}>
      <div class={style.titles}>
        <h1 class={style.pageTitle}>Components</h1>
        <label class="control control--slug" aria-label="textfield">
          <div class="control__slug">
            <i class="icon ico-search text-n700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2px"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon ico-search"
                style="null"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </i>
          </div>
          <input
            onKeyUp={(evt) => {
              setSearch(evt.target.value);
            }}
            value={search}
            placeholder="Search"
            type="text"
          />
          <i
            onClick={() => {
              setSearch("");
            }}
            class="icon ico-x-circle text-n700 control__clearer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2px"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon ico-x-circle text-n700 control__clearer"
              style="null"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </i>
        </label>
      </div>
      {getComponentsListing(
        data?.data?.edges.filter(
          (c) =>
            c.details.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        ) ?? [],
        isLoading
      )}
    </div>
  );
};

function getStatusBadge(component) {
  let text = component?.status ?? "coming soon";
  let aClass = "";
  switch (text) {
    case "coming soon":
      aClass = "pill--warn";
      break;
    case "under review":
      aClass = "pill--warn";
      break;
    case "live":
      aClass = "pill--success";
      break;
    case "deprecated":
      aClass = "pill--error";
      break;
    case "removed":
      aClass = "pill--error";
      break;
    default:
      aClass = "pill--info";
      break;
  }
  return <div class={`pill pill--square ${aClass}`}>{text}</div>;
}

function getComponentsListing(components, isLoading) {
  if (isLoading) {
    return <div class="spinner"></div>;
  }
  if (components) {
    // const { data: components } = data;
    return (
      <div class={style.componentsList}>
        {components.map((component) => {
          return (
            <Link href={`/component/${component.id}`}>
              <article class={`card ${style.card}`}>
                <div class={`card__head ${style.CardHead}`}>
                  <h2>{component.details.title}</h2>
                  {getStatusBadge(component.details)}
                </div>
                <div class={`card__body ${style.CardBody}`}>
                  <LoadableFrame
                    style={{ minHeight: 200 }}
                    url={component.details.preview}
                  />
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default components;
