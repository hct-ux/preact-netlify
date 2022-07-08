import { h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router";
import { usePrerenderData } from "@preact/prerender-data-provider";
import style from "./style";
import LoadableFrame from "../../components/loadable-frame";
import StatusBadge from "../../components/status-badge";
import WCAGStatusBadge from "../../components/wcag-status-badge";

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
                  <div class={style.badges}>
                    <StatusBadge component={component.details} />
                    <WCAGStatusBadge component={component.details} />
                  </div>
                </div>
                <div class={`card__body ${style.CardBody}`}>
                  {component.details.status == "coming soon" && (
                    <div class={style.comingSoon}>
                      <svg
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        stroke="#333"
                        stroke-width="1"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="css-i6dzq1"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                  )}
                  {component.details.status != "coming soon" && (
                    <LoadableFrame
                      cover={true}
                      title={`Preview for ${component.details.title}`}
                      style={{ minHeight: 200 }}
                      url={component.details.preview}
                    />
                  )}
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
