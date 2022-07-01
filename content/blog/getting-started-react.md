---
title: Getting started - React
date: 2022-07-01T13:00:40.012Z
in_navigation: false
nav_order: 999
tags: docs, react
---
## Getting started

If you are starting a brand new app you can use our [Create React App](https://create-react-app.dev/) template to get up and running in minutes.

Simply run the following command to scaffold out a new GBG app:

```
npx create-react-app my-app --template @gbg/gbg

```

Alternatively, if you're adding the component library to an existing app, follow the instructions below.

## Install our component library

Use your package manager of choice to install our component library, in this guide we'll use Node Package Manager (npm). The following command will install the package to your node_modules folder.

```
npm i @gbg/gbgcomponentlibrary @gbg/gbgcomponentlibrary_react --save-dev
```

## Include scripts and styles

You must include the GBG component library css files and assets in your React App when using these components, e.g.

```javascript
// Main.jsx
import React from 'react';
import App from './app';
import '@gbg/gbgcomponentlibrary/dist/gbgcomponentlibrary.min.css';

...
```

## Using components

Once the package is imported your can use components in the following way. The default export from the package contains all of the [components](https://darling-kataifi-e3972e.netlify.app/components).

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import GBG from '@gbg/gbgcomponentlibrary_react';
import reportWebVitals from './reportWebVitals';

const al = GBG.AlertBar;

ReactDOM.render(
  <React.StrictMode>
    <GBG.Button>Hello World</GBG.Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```