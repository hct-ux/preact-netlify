import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import Header from "./header";
import Match, { Link } from "preact-router/match";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Blogs from "../routes/blogs";
import Blog from "../routes/blog";
import Components from "../routes/components";
import SingleComponent from "../routes/component";
import Contact from "../routes/contact";
import ContactSuccess from "../routes/contact-success";
import NotFoundPage from "../routes/notfound";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    const navData = props.CLI_DATA.preRenderData.navData;
    return (
      <Provider value={props}>
        <div id="app">
          <div class="structure">
            <div class="top-bar">
              <div class="top-bar__menu-icon">Menu</div>
              <div class="top-bar__logo">
                <i class="logo logo-gbg">
                  <svg
                    viewBox="0 0 292 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMid meet"
                    class="logo logo-gbg"
                  >
                    <g clip-path="url(#clip0_5203_706)">
                      <path
                        d="M50 56V60H83.54C81.3501 67.3432 76.8107 73.7648 70.6188 78.279C64.4269 82.7933 56.9246 85.1507 49.2635 84.9895C41.6024 84.8283 34.2059 82.1573 28.2093 77.3866C22.2128 72.6159 17.9476 66.009 16.0685 58.5802C14.1894 51.1514 14.8002 43.3111 17.8071 36.263C20.8141 29.2148 26.051 23.3482 32.714 19.5637C39.3771 15.7792 47.098 14.286 54.6916 15.3132C62.2852 16.3404 69.3319 19.8313 74.75 25.25L85.36 14.64C77.1815 6.45936 66.4196 1.36755 54.9078 0.232123C43.396 -0.903301 31.8466 1.98792 22.2275 8.41316C12.6085 14.8384 5.5148 24.4001 2.15521 35.4692C-1.20439 46.5382 -0.622054 58.4297 3.80299 69.1175C8.22804 79.8053 16.222 88.6282 26.4229 94.0828C36.6237 99.5375 48.4003 101.286 59.7461 99.0316C71.0918 96.7768 81.3048 90.6579 88.6448 81.7173C95.9849 72.7767 99.9979 61.5676 100 50V45H61C58.0826 45 55.2847 46.1589 53.2218 48.2218C51.1589 50.2847 50 53.0826 50 56Z"
                        fill="#271E2C"
                      ></path>
                      <path
                        d="M172.85 46.16C176.103 42.2083 178.166 37.4134 178.798 32.3342C179.43 27.255 178.605 22.1008 176.42 17.4723C174.235 12.8439 170.779 8.93198 166.455 6.19258C162.132 3.45317 157.118 1.99915 152 2H110V98H156.5C162.56 97.9989 168.461 96.0663 173.348 92.4828C178.235 88.8994 181.852 83.8516 183.675 78.0725C185.498 72.2933 185.431 66.0836 183.484 60.345C181.538 54.6063 177.813 49.6375 172.85 46.16ZM156.5 83H125V17H152C155.183 17 158.235 18.2643 160.485 20.5147C162.736 22.7652 164 25.8174 164 29C164 32.1826 162.736 35.2348 160.485 37.4853C158.235 39.7357 155.183 41 152 41H151C148.083 41 145.285 42.1589 143.222 44.2218C141.159 46.2847 140 49.0826 140 52V56H156.5C160.08 56 163.514 57.4223 166.046 59.9541C168.578 62.4858 170 65.9196 170 69.5C170 73.0804 168.578 76.5142 166.046 79.0459C163.514 81.5777 160.08 83 156.5 83Z"
                        fill="#271E2C"
                      ></path>
                      <path
                        d="M253 45C250.083 45 247.285 46.1589 245.222 48.2218C243.159 50.2847 242 53.0826 242 56V60H275.54C273.35 67.3432 268.811 73.7648 262.619 78.279C256.427 82.7933 248.925 85.1507 241.263 84.9895C233.602 84.8283 226.206 82.1573 220.209 77.3866C214.213 72.6159 209.948 66.009 208.068 58.5802C206.189 51.1514 206.8 43.3111 209.807 36.263C212.814 29.2148 218.051 23.3482 224.714 19.5637C231.377 15.7792 239.098 14.286 246.692 15.3132C254.285 16.3404 261.332 19.8313 266.75 25.25L277.36 14.64C269.182 6.45936 258.42 1.36755 246.908 0.232123C235.396 -0.903301 223.847 1.98792 214.228 8.41316C204.608 14.8384 197.515 24.4001 194.155 35.4692C190.796 46.5382 191.378 58.4297 195.803 69.1175C200.228 79.8053 208.222 88.6282 218.423 94.0828C228.624 99.5375 240.4 101.286 251.746 99.0316C263.092 96.7768 273.305 90.6579 280.645 81.7173C287.985 72.7767 291.998 61.5676 292 50V45H253Z"
                        fill="#271E2C"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5203_706">
                        <rect width="292" height="100" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              </div>
              <div class="top-bar__menu">
                {/* <div class="top-bar__information">
                  <div class="top-bar__informationtitle">CMPNY19117</div>
                  <div class="top-bar__informationsubtitle">Account Number</div>
                </div>
                <div class="top-bar__userdetails">
                  <div class="top-bar__username">User name</div>
                  <div class="top-bar__companyname">Company</div>
                </div> */}
                <div class="float-menu top-bar__menutarget">
                  <div class="top-bar__avatar">
                    <img
                      class="avatar"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAkhJREFUeF7tmU8oBFEcx38jy17k70lICclJqS05EMqWg9yUk4uDHBaFTawkWyRJLq4uDg4UUVscthyc5E+K8qeVCwcONn9qtHN4/rS77838TO1s373NznfevPeZz/v13oxGOcU64ZeQgAZAye0AIMnsASAA4hVYGASDYBCPAAzi8UMNgkEwiEcABvH4oQbBIBjEIwCDePxQg2AQDOIRgEE8fpZrUH5eLjV46sXdT84u6C5yb6o35WWlVFtTJa4JHx7R88uLcVxUWECe+jpT7cnCx6fnFLl/kMV+nbcMaHJ0kAL+IdHYbmifvF09pm4e2lqnlqZGcc1YYJaCC8vG8fzMBA0N9JlqTxbe3N6jzu5eWQyAzBCCQXYVabunWKw+dbS3Ju3+0tw0aZomMgPD40nzB+FDOj2/MCMQpaxBKqN4f7ollyvTiOq6Thm5JSqXmcoAkFOnmMpjhkESSgAEQIkXimk3xV6jUbq8ulYZl8hUV1aQ250ddyWt0pCjppjKgGSZn1sNWTZ2HoDSqQbFFmofH58qD15kYou8nyvhtDbov3fzKqQdNcUA6M8jtXuzCoOIKNkLMwACILkDMEjCCIAAyL6vGvIJ6rCtBtZBWAepSP2dGfH1U3DKL/6w8lFuZ2ONvG3Nog3faIAWV1aVO/L2eENZWS4jn3Iv7ZVH4fCg5a8aDh+3cvcBSIIKgABIeTbFDcIgGASDeARgEI8fahAMgkE8AjCIxw81CAbBIB4BGMTjhxoEg2AQjwAM4vFDDYJBMIhHQHL1F3inMBdU3topAAAAAElFTkSuQmCC"
                      alt="Henry Thomas"
                    />
                  </div>
                  <i
                    class="icon ico-chevron-down-16 top-bar__menuicon"
                    style="width: 16px; height: 16px;"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ico-chevron-down-16 top-bar__menuicon"
                      style="width: 16px; height: 16px;"
                    >
                      <path
                        d="M13 6L8 11L3 6"
                        stroke="rgb(0, 13, 26)"
                        stroke-width="2px"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </i>
                  <div class="float-menu__menu" style="padding-top: 44px;">
                    <ul class="float-menu__menuitems">
                      <li class="loat-menu__menuitem">
                        <a href="/your/logout/page" class="float-menu__link">
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="page__navigationbg"></div>
            <div class="page__navigation page__navigation--slide-over">
              <nav class="primary-nav">
                <ul class="primary-nav__header">
                  <i
                    class="icon ico-cross-24 primary-nav__closer"
                    style="width: 24px; height: 24px;"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ico-cross-24 primary-nav__closer"
                      style="width: 24px; height: 24px;"
                    >
                      <path
                        d="M5 5L19 19M19 5L5 19"
                        stroke="rgb(255, 255, 255)"
                        stroke-width="2px"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </i>
                </ul>
                <div class="primary-nav__body">
                  <ul class="primary-nav__section">
                    <Match path="/">
                      {({ matches }) => {
                        let cn = matches ? "primary-nav__item--active" : "";
                        return (
                          <li className={`primary-nav__item ${cn}`}>
                            <Link
                              class="primary-nav__link"
                              activeClassName="primary-nav__link--active"
                              href="/"
                            >
                              <div class="primary-nav__linktext">Home</div>
                            </Link>
                          </li>
                        );
                      }}
                    </Match>
                    {navData.blogs.edges
                      .filter((p) => p.details.in_navigation)
                      .sort((a, b) => {
                        return (a.details?.nav_order ?? 999) >
                          (b.details?.nav_order ?? 999)
                          ? 1
                          : -1;
                      })
                      .map((p) => (
                        <Match path={`/blog/${p.id}`}>
                          {({ matches }) => {
                            let cn = matches ? "primary-nav__item--active" : "";
                            return (
                              <li className={`primary-nav__item ${cn}`}>
                                <Link
                                  class="primary-nav__link"
                                  activeClassName="primary-nav__link--active"
                                  href={`/blog/${p.id}`}
                                >
                                  <div class="primary-nav__linktext">
                                    {p.details.title}
                                  </div>
                                </Link>
                              </li>
                            );
                          }}
                        </Match>
                      ))}

                    <ul class="primary-nav__section ">
                      <Match path="/components">
                        {({ matches }) => {
                          let cn = matches ? "primary-nav__item--active" : "";
                          return (
                            <li
                              className={`primary-nav__item primary-nav__item--title  ${cn}`}
                            >
                              <Link
                                class="primary-nav__link"
                                activeClassName="primary-nav__link--active"
                                href="/components"
                              >
                                Components
                              </Link>
                              <span class="primary-nav__counter">
                                ({navData.components.edges.length})
                              </span>
                            </li>
                          );
                        }}
                      </Match>
                      {navData.components.edges.map((c) => (
                        <Match path={`/component/${c.id}`}>
                          {({ matches }) => {
                            let cn = matches ? "primary-nav__item--active" : "";
                            return (
                              <li className={`primary-nav__item ${cn}`}>
                                <Link
                                  class="primary-nav__link"
                                  activeClassName="primary-nav__link--active"
                                  href={`/component/${c.id}`}
                                >
                                  <div class="primary-nav__linktext">
                                    {c.details.title}
                                  </div>
                                </Link>
                              </li>
                            );
                          }}
                        </Match>
                      ))}
                    </ul>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="page__content">
              <div class="card card--primary-content">
                <div class="card__body">
                  <Router onChange={this.handleRoute}>
                    <Home path="/" />
                    <Blogs path="/blogs/" />
                    <Blog path="/blog/:name" />
                    <Components path="/components/" />
                    <SingleComponent path="/component/:name" />
                    <Contact path="/contact/" />
                    <ContactSuccess path="/contact/success" />
                    <NotFoundPage type="404" default />
                  </Router>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="page__content">
            <div class="card card--primary-content">
              <div class="card__body">
                
              </div>
            </div>
          </div> */}
        </div>
      </Provider>
    );
  }
}
