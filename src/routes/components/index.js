import { h } from "preact";
import { Link } from "preact-router";
import { usePrerenderData } from "@preact/prerender-data-provider";
import style from "./style";

const components = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  return (
    <div class={style.pageBlogs}>
      <h1 class={style.pageTitle}>Components</h1>
      {getComponentsListing(data, isLoading)}
    </div>
  );
};

function getComponentsListing(data, isLoading) {
  if (isLoading) {
    return <div class="spinner"></div>;
  }
  if (data && data.data) {
    const { data: components } = data;
    return (
      <div class={style.componentsList}>
        {components.edges.map((component) => {
          return (
            <Link href={`/component/${component.id}`}>
              <article>
                <h2>{component.details.title}</h2>

                {/* <p class={style.preview}>{component.preview}</p> */}
                <iframe class={style.sample} src={component.details.preview} />
              </article>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default components;
