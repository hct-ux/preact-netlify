import { h } from "preact";
import { useEffect } from "preact/hooks";
import style from "./style";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <div class={style.home}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 455 455"
        width
        height="455"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="__lottie_element_2">
            <rect width="455" height="455" x="0" y="0"></rect>
          </clipPath>
          <mask id="__lottie_element_15" mask-type="alpha">
            <g
              transform="matrix(1,0,0,1,0,0)"
              opacity="1"
              style="display: block;"
            >
              <g opacity="1" transform="matrix(1,0,0,1,110,330)">
                <path
                  fill="rgb(240,180,170)"
                  fill-opacity="1"
                  d=" M-110,-110 C-110,-110 110,-110 110,-110 C110,-110 110,110 110,110 C110,110 -110,110 -110,110 C-110,110 -110,-110 -110,-110z"
                ></path>
              </g>
            </g>
          </mask>
          <clipPath id="__lottie_element_19">
            <path d="M0,0 L455,0 L455,455 L0,455z"></path>
          </clipPath>
          <clipPath id="__lottie_element_26">
            <path d="M0,0 L600,0 L600,220 L0,220z"></path>
          </clipPath>
          <mask id="__lottie_element_35" mask-type="alpha">
            <g
              transform="matrix(2,0,0,2,-192,-90)"
              opacity="1"
              style="display: block;"
            >
              <g opacity="1" transform="matrix(1,0,0,1,150,100)">
                <path
                  fill="rgb(50,41,55)"
                  fill-opacity="1"
                  d=" M0,6 C0,6 0,10 0,10 C0,10 0.7609999775886536,10 0.7609999775886536,10 C0.7609999775886536,10 21.23900032043457,10 21.23900032043457,10 C21.23900032043457,10 33.54199981689453,10 33.54199981689453,10 C29.238000869750977,24.45599937438965 15.854000091552734,35 0,35 C-9.664999961853027,35 -18.415000915527344,31.08300018310547 -24.749000549316406,24.749000549316406 C-31.08300018310547,18.415000915527344 -35,9.664999961853027 -35,0 C-35,-19.329999923706055 -19.329999923706055,-35 0,-35 C9.664999961853027,-35 18.415000915527344,-31.08300018310547 24.749000549316406,-24.749000549316406 C24.749000549316406,-24.749000549316406 35.35499954223633,-35.35499954223633 35.35499954223633,-35.35499954223633 C26.30699920654297,-44.40299987792969 13.807000160217285,-50 0,-50 C-27.61400032043457,-50 -50,-27.61400032043457 -50,0 C-50,13.807000160217285 -44.40299987792969,26.30699920654297 -35.35499954223633,35.35499954223633 C-26.30699920654297,44.40299987792969 -13.807000160217285,50 0,50 C27.61400032043457,50 50,27.61400032043457 50,0 C50,0 50,-5 50,-5 C50,-5 11,-5 11,-5 C4.925000190734863,-5 0,-0.07500000298023224 0,6z"
                ></path>
              </g>
            </g>
          </mask>
          <mask id="__lottie_element_41" mask-type="alpha">
            <g
              transform="matrix(2,0,0,2,-192,-90)"
              opacity="1"
              style="display: block;"
            >
              <g opacity="1" transform="matrix(1,0,0,1,247.5,100)">
                <path
                  fill="rgb(50,41,55)"
                  fill-opacity="1"
                  d=" M25.34600067138672,-3.8399999141693115 C29.190000534057617,-8.505000114440918 31.5,-14.482999801635742 31.5,-21 C31.5,-35.9119987487793 19.41200065612793,-48 4.5,-48 C4.5,-48 -7.5,-48 -7.5,-48 C-7.5,-48 -22.5,-48 -22.5,-48 C-22.5,-48 -37.5,-48 -37.5,-48 C-37.5,-48 -37.5,48 -37.5,48 C-37.5,48 9,48 9,48 C24.739999771118164,48 37.5,35.2400016784668 37.5,19.5 C37.5,9.843999862670898 32.69300079345703,1.315000057220459 25.34600067138672,-3.8399999141693115z M9,33 C9,33 -22.5,33 -22.5,33 C-22.5,33 -22.5,-33 -22.5,-33 C-22.5,-33 -7.5,-33 -7.5,-33 C-7.5,-33 4.5,-33 4.5,-33 C11.126999855041504,-33 16.5,-27.62700080871582 16.5,-21 C16.5,-14.373000144958496 11.126999855041504,-9 4.5,-9 C4.5,-9 3.5,-9 3.5,-9 C-2.575000047683716,-9 -7.5,-4.074999809265137 -7.5,2 C-7.5,2 -7.5,6 -7.5,6 C-7.5,6 -6.738999843597412,6 -6.738999843597412,6 C-6.738999843597412,6 9,6 9,6 C10.545999526977539,6 12.026000022888184,6.2729997634887695 13.409000396728516,6.750999927520752 C18.69700050354004,8.581000328063965 22.5,13.59000015258789 22.5,19.5 C22.5,26.95599937438965 16.45599937438965,33 9,33z"
                ></path>
              </g>
            </g>
          </mask>
          <mask id="__lottie_element_47" mask-type="alpha">
            <g
              transform="matrix(2,0,0,2,-192,-90)"
              opacity="1"
              style="display: block;"
            >
              <g opacity="1" transform="matrix(1,0,0,1,342,100)">
                <path
                  fill="rgb(50,41,55)"
                  fill-opacity="1"
                  d=" M11,-5 C4.925000190734863,-5 0,-0.07500000298023224 0,6 C0,6 0,10 0,10 C0,10 0.7609999775886536,10 0.7609999775886536,10 C0.7609999775886536,10 21.23900032043457,10 21.23900032043457,10 C21.23900032043457,10 33.54199981689453,10 33.54199981689453,10 C29.238000869750977,24.45599937438965 15.854000091552734,35 0,35 C-9.664999961853027,35 -18.415000915527344,31.08300018310547 -24.749000549316406,24.749000549316406 C-31.08300018310547,18.415000915527344 -35,9.664999961853027 -35,0 C-35,-19.329999923706055 -19.329999923706055,-35 0,-35 C9.664999961853027,-35 18.415000915527344,-31.08300018310547 24.749000549316406,-24.749000549316406 C24.749000549316406,-24.749000549316406 35.35499954223633,-35.35499954223633 35.35499954223633,-35.35499954223633 C26.30699920654297,-44.40299987792969 13.807000160217285,-50 0,-50 C-27.61400032043457,-50 -50,-27.61400032043457 -50,0 C-50,13.807000160217285 -44.40299987792969,26.30699920654297 -35.35499954223633,35.35499954223633 C-26.30699920654297,44.40299987792969 -13.807000160217285,50 0,50 C27.61400032043457,50 50,27.61400032043457 50,0 C50,0 50,-5 50,-5 C50,-5 11,-5 11,-5z"
                ></path>
              </g>
            </g>
          </mask>
        </defs>
        <g clip-path="url(#__lottie_element_2)">
          <g
            transform="matrix(1,0,0,1,0,0)"
            opacity="1"
            style="display: block;"
          >
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <g opacity="1" transform="matrix(1,0,0,1,110,110)">
                <path
                  fill="rgb(160,225,220)"
                  fill-opacity="1"
                  d=" M-110,-110 C-110,-110 110,-110 110,-110 C110,-110 110,110 110,110 C110,110 -110,110 -110,110 C-110,110 -110,-110 -110,-110z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,110,110)">
                <path
                  fill="rgb(70,200,190)"
                  fill-opacity="1"
                  d=" M-110,-110 C-110,-110 0,0 0,0 C0,0 110,-110 110,-110 C110,-110 110,0 110,0 C110,0 0,110 0,110 C0,110 -110,0 -110,0 C-110,0 -110,-110 -110,-110z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,55,165)">
                <path
                  fill="rgb(115,212,205)"
                  fill-opacity="1"
                  d=" M55,55 C55,55 -55,55 -55,55 C-55,55 -55,-55 -55,-55 C-55,-55 55,55 55,55z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,165,55)">
                <path
                  fill="rgb(52,173,161)"
                  fill-opacity="1"
                  d=" M-55,55 C-55,55 55,-55 55,-55 C55,-55 55,55 55,55 C55,55 -55,55 -55,55z"
                ></path>
              </g>
            </g>
          </g>
          <g
            transform="matrix(1,0,0,1,131.5,109.5)"
            opacity="1"
            style="display: block;"
          >
            <g
              opacity="1"
              transform="matrix(1.298009991645813,0,0,1.298009991645813,-21.516000747680664,0.48399999737739563)"
            >
              <path
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill-opacity="0"
                stroke-miterlimit="4"
                stroke="rgb(160,225,220)"
                stroke-opacity="1"
                stroke-width="120"
                d=" M0,-59.98500061035156 C15.87600040435791,-59.98500061035156 30.319000244140625,-53.803001403808594 41.05400085449219,-43.71799850463867"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(1,0,0,1,0,0)"
            opacity="1"
            style="display: block;"
          >
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <g opacity="1" transform="matrix(1,0,0,1,330,110)">
                <path
                  fill="rgb(185,185,255)"
                  fill-opacity="1"
                  d=" M-110,-110 C-110,-110 110,-110 110,-110 C110,-110 110,110 110,110 C110,110 -110,110 -110,110 C-110,110 -110,-110 -110,-110z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,330,110)">
                <path
                  fill="rgb(120,120,255)"
                  fill-opacity="1"
                  d=" M0,110 C60.750999450683594,110 110,60.750999450683594 110,0 C110,-60.750999450683594 60.750999450683594,-110 0,-110 C-60.750999450683594,-110 -110,-60.750999450683594 -110,0 C-110,60.750999450683594 -60.750999450683594,110 0,110z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,385,165)">
                <path
                  fill="rgb(160,160,255)"
                  fill-opacity="1"
                  d=" M55,-55 C55,5.71999979019165 5.71999979019165,55 -55,55 C-55,55 -55,-55 -55,-55 C-55,-55 55,-55 55,-55z"
                ></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,275,55)">
                <path
                  fill="rgb(100,100,212)"
                  fill-opacity="1"
                  d=" M-55,55 C-55,-5.71999979019165 -5.71999979019165,-55 55,-55 C55,-55 55,55 55,55 C55,55 -55,55 -55,55z"
                ></path>
              </g>
            </g>
          </g>
          <g mask="url(#__lottie_element_15)" style="display: block;">
            <g transform="matrix(1,0,0,1,0,0)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <g opacity="1" transform="matrix(1,0,0,1,110,330)">
                  <path
                    fill="rgb(240,180,170)"
                    fill-opacity="1"
                    d=" M-110,-110 C-110,-110 110,-110 110,-110 C110,-110 110,110 110,110 C110,110 -110,110 -110,110 C-110,110 -110,-110 -110,-110z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,165,275)">
                  <path
                    fill="rgb(201,74,61)"
                    fill-opacity="1"
                    d=" M55,55 C55,55 0,-55 0,-55 C0,-55 -55,-55 -55,-55 C-55,-55 0,55 0,55 C0,55 55,55 55,55z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,55,385)">
                  <path
                    fill="rgb(240,150,140)"
                    fill-opacity="1"
                    d=" M55,55 C55,55 0,-55 0,-55 C0,-55 -55,-55 -55,-55 C-55,-55 0,55 0,55 C0,55 55,55 55,55z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,110,330)">
                  <path
                    fill="rgb(232,110,90)"
                    fill-opacity="1"
                    d=" M110,110 C110,110 0,-110 0,-110 C0,-110 -110,-110 -110,-110 C-110,-110 0,110 0,110 C0,110 110,110 110,110z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g
            clip-path="url(#__lottie_element_19)"
            transform="matrix(0.550000011920929,0,0,0.550000011920929,204.75,204.75)"
            opacity="1"
            style="display: block;"
          >
            <g
              transform="matrix(1,0,0,1,212.2969970703125,218.47999572753906)"
              opacity="1"
              style="display: block;"
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,14.70300006866455,8.520000457763672)"
              >
                <path
                  fill="rgb(63,55,67)"
                  fill-opacity="1"
                  d=" M227.5,-227.5 C227.5,-227.5 227.5,227.5 227.5,227.5 C227.5,227.5 -227.5,227.5 -227.5,227.5 C-227.5,227.5 -227.5,-227.5 -227.5,-227.5 C-227.5,-227.5 227.5,-227.5 227.5,-227.5z"
                ></path>
              </g>
            </g>
            <g
              clip-path="url(#__lottie_element_26)"
              transform="matrix(0.6000000238418579,0,0,0.6000000238418579,47.5,161.5)"
              opacity="1"
              style="display: block;"
            >
              <g
                transform="matrix(2,0,0,2,-192.75,-90)"
                opacity="0.008336514080934308"
                style="display: none;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,50 C100,50 392,50 392,50"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,52 C100,52 392,52 392,52"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,150 C100,150 392,150 392,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,148 C100,148 392,148 392,148"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,50 C100,50 100,150 100,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,150,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M50,0 C50,27.61400032043457 27.61400032043457,50 0,50 C-27.61400032043457,50 -50,27.61400032043457 -50,0 C-50,-27.61400032043457 -27.61400032043457,-50 0,-50 C27.61400032043457,-50 50,-27.61400032043457 50,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,150,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M35,0 C35,19.329999923706055 19.329999923706055,35 0,35 C-19.329999923706055,35 -35,19.329999923706055 -35,0 C-35,-19.329999923706055 -19.329999923706055,-35 0,-35 C19.329999923706055,-35 35,-19.329999923706055 35,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M200,50 C200,50 200,150 200,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M210,50 C210,50 210,150 210,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,100 C100,100 100.05000305175781,100 100.05000305175781,100"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke-dasharray=" 0.1 5.022"
                    stroke-dashoffset="0"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M105.0719985961914,100 C105.0719985961914,100 389.4389953613281,100 389.4389953613281,100"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M391.95001220703125,100 C391.95001220703125,100 392,100 392,100"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,110 C100,110 392,110 392,110"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,95 C100,95 392,95 392,95"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,161,106)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M11,0 C11,6.074999809265137 6.074999809265137,11 0,11 C-6.074999809265137,11 -11,6.074999809265137 -11,0 C-11,-6.074999809265137 -6.074999809265137,-11 0,-11 C6.074999809265137,-11 11,-6.074999809265137 11,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M150,50 C150,50 150,150 150,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,106 C100,106 392,106 392,106"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M225,50 C225,50 225,150 225,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,91 C100,91 392,91 392,91"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M285,50 C285,50 285,150 285,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M240,50 C240,50 240,150 240,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M270,50 C270,50 270,150 270,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,251,102)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M11,0 C11,6.074999809265137 6.074999809265137,11 0,11 C-6.074999809265137,11 -11,6.074999809265137 -11,0 C-11,-6.074999809265137 -6.074999809265137,-11 0,-11 C6.074999809265137,-11 11,-6.074999809265137 11,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,252,79)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M12,0 C12,6.626999855041504 6.626999855041504,12 0,12 C-6.626999855041504,12 -12,6.626999855041504 -12,0 C-12,-6.626999855041504 -6.626999855041504,-12 0,-12 C6.626999855041504,-12 12,-6.626999855041504 12,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,67 C100,67 392,67 392,67"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,133 C100,133 392,133 392,133"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,135 C100,135 392,135 392,135"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M100,65 C100,65 392,65 392,65"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,256.5,119.5)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M13.5,0 C13.5,7.455999851226807 7.455999851226807,13.5 0,13.5 C-7.455999851226807,13.5 -13.5,7.455999851226807 -13.5,0 C-13.5,-7.455999851226807 -7.455999851226807,-13.5 0,-13.5 C7.455999851226807,-13.5 13.5,-7.455999851226807 13.5,0z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,256.5350036621094,119.62300109863281)"
                >
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M28.5,0 C28.5,15.739999771118164 15.739999771118164,28.5 0,28.5 C-15.739999771118164,28.5 -28.5,15.739999771118164 -28.5,0 C-28.5,-15.739999771118164 -15.739999771118164,-28.5 0,-28.5 C15.739999771118164,-28.5 28.5,-15.739999771118164 28.5,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,252,79)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M27,0 C27,14.911999702453613 14.911999702453613,27 0,27 C-14.911999702453613,27 -27,14.911999702453613 -27,0 C-27,-14.911999702453613 -14.911999702453613,-27 0,-27 C14.911999702453613,-27 27,-14.911999702453613 27,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M292,50 C292,50 292,150 292,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,342,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M50,0 C50,27.61400032043457 27.61400032043457,50 0,50 C-27.61400032043457,50 -50,27.61400032043457 -50,0 C-50,-27.61400032043457 -27.61400032043457,-50 0,-50 C27.61400032043457,-50 50,-27.61400032043457 50,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,342,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M35,0 C35,19.329999923706055 19.329999923706055,35 0,35 C-19.329999923706055,35 -35,19.329999923706055 -35,0 C-35,-19.329999923706055 -19.329999923706055,-35 0,-35 C19.329999923706055,-35 35,-19.329999923706055 35,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,342,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M50,-50 C50,-50 -50,50 -50,50"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M392,50 C392,50 392,150 392,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,353,106)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M11,0 C11,6.074999809265137 6.074999809265137,11 0,11 C-6.074999809265137,11 -11,6.074999809265137 -11,0 C-11,-6.074999809265137 -6.074999809265137,-11 0,-11 C6.074999809265137,-11 11,-6.074999809265137 11,0z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M342,50 C342,50 342,150 342,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M279,50 C279,50 279,150 279,150"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,150,100)">
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(250,230,90)"
                    stroke-opacity="1"
                    stroke-width="0.2"
                    d=" M50,-50 C50,-50 -50,50 -50,50"
                  ></path>
                </g>
              </g>
              <g mask="url(#__lottie_element_35)" style="display: block;">
                <g transform="matrix(1,0,0,1,300,110)" opacity="1">
                  <g
                    opacity="1"
                    transform="matrix(0.6748499870300293,0,0,1,-191.63699340820312,-85.13099670410156)"
                  >
                    <path
                      fill="rgb(249,248,249)"
                      fill-opacity="1"
                      d=" M20.77750015258789,-15.760000228881836 C20.77750015258789,-15.760000228881836 20.77750015258789,15.760000228881836 20.77750015258789,15.760000228881836 C20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 C-20.77750015258789,15.760000228881836 -20.77750015258789,-15.760000228881836 -20.77750015258789,-15.760000228881836 C-20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,-104.64800262451172,-1.7660000324249268)"
                  >
                    <path
                      fill="rgb(249,248,249)"
                      fill-opacity="1"
                      d=" M20.77750015258789,-15.760000228881836 C20.77750015258789,-15.760000228881836 20.77750015258789,15.760000228881836 20.77750015258789,15.760000228881836 C20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 C-20.77750015258789,15.760000228881836 -20.77750015258789,-15.760000228881836 -20.77750015258789,-15.760000228881836 C-20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836z"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="square"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="rgb(249,248,249)"
                      stroke-opacity="1"
                      stroke-width="40"
                      d=" M-115,-42.5 C-115,-42.5 -146.5,-84.5 -196,-84.5 C-237.5,-84.5 -276,-50.5 -276,-4.5 C-276,41.5 -234.5,86 -193.5,86 C-152.5,86 -106.5,52.375 -106.5,7 C-106.375,7 -196.5,7 -196.5,7"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#__lottie_element_41)" style="display: block;">
                <g transform="matrix(1,0,0,1,300,110)" opacity="1">
                  <g
                    opacity="1"
                    transform="matrix(0.9187800288200378,0,0,1,63.362998962402344,34.86899948120117)"
                  >
                    <path
                      fill="rgb(249,248,249)"
                      fill-opacity="1"
                      d=" M20.77750015258789,-15.760000228881836 C20.77750015258789,-15.760000228881836 20.77750015258789,15.760000228881836 20.77750015258789,15.760000228881836 C20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 C-20.77750015258789,15.760000228881836 -20.77750015258789,-15.760000228881836 -20.77750015258789,-15.760000228881836 C-20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,5.052999973297119,2.6659998893737793)"
                  ></g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="square"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(249,248,249)"
                      stroke-opacity="1"
                      stroke-width="40"
                      d=" M-57,7 C-57,7 -57,80.25 -57,80.25 C-57,80.25 26.5,80.25 26.5,80.25 C26.5,80.25 63,80.75 63,39.5 C63,-1.75 25.75,-4.75 20.25,-4.75 C14.75,-4.75 -17,-4.75 -17,-4.75"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="square"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(249,248,249)"
                      stroke-opacity="1"
                      stroke-width="40"
                      d=" M-56.75,7.25 C-56.75,7.25 -56.75,-82.75 -56.75,-82.75 C-56.75,-82.75 17.25,-82.75 17.25,-82.75 C17.25,-82.75 52.25,-82.75 52.25,-41.75 C52.25,-0.75 3.25,-2.5 -15.5,-2.5"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#__lottie_element_47)" style="display: block;">
                <g transform="matrix(1,0,0,1,682.5,110)" opacity="1">
                  <g
                    opacity="1"
                    transform="matrix(0.6748499870300293,0,0,1,-191.63699340820312,-85.13099670410156)"
                  >
                    <path
                      fill="rgb(249,248,249)"
                      fill-opacity="1"
                      d=" M20.77750015258789,-15.760000228881836 C20.77750015258789,-15.760000228881836 20.77750015258789,15.760000228881836 20.77750015258789,15.760000228881836 C20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 C-20.77750015258789,15.760000228881836 -20.77750015258789,-15.760000228881836 -20.77750015258789,-15.760000228881836 C-20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,-104.64800262451172,-1.7660000324249268)"
                  >
                    <path
                      fill="rgb(249,248,249)"
                      fill-opacity="1"
                      d=" M20.77750015258789,-15.760000228881836 C20.77750015258789,-15.760000228881836 20.77750015258789,15.760000228881836 20.77750015258789,15.760000228881836 C20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 -20.77750015258789,15.760000228881836 C-20.77750015258789,15.760000228881836 -20.77750015258789,-15.760000228881836 -20.77750015258789,-15.760000228881836 C-20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836 20.77750015258789,-15.760000228881836z"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="square"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(249,248,249)"
                      stroke-opacity="1"
                      stroke-width="40"
                      d=" M-115,-42.5 C-115,-42.5 -146.5,-84.5 -196,-84.5 C-237.5,-84.5 -276,-50.5 -276,-4.5 C-276,41.5 -234.5,86 -193.5,86 C-152.5,86 -106.5,55.75 -106.5,7 C-106.375,7 -196.5,7 -196.5,7"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div class={style.intro}>
        <h1 class="">Foundation</h1>
        <p class="">
          Building a consistent product experience for all GBG products.
        </p>
      </div>
    </div>
  );
};

export default Home;
