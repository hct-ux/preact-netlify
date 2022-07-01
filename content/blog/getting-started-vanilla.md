---
title: Getting started - Vanilla
date: 2022-07-01T12:53:28.191Z
in_navigation: false
nav_order: 999
tags: docs, vanilla
---
## Getting started

Getting started with the Vanilla component library is just a matter of including the compiled styles and scripts.

## Install our component library

Use your package manager of choice to install our component library, in this guide we'll use Node Package Manager (npm). The following command will install the package to your node_modules folder.

```
npm i @gbg/gbgcomponentlibrary --save-dev
```

## Include scripts and styles

The package within your node_modules folder will contain a dist folder. You can reference the css and js files from this folder, or copy them to a more convenient place.

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="My HTML Page">
        <meta name="author" content="Henry Thomas">

        <link rel="stylesheet" href="node_modules/@gbg/gbgcomponentlibrary/dist/gbgcomponentlibrary.css">

    </head>

    <body>
        <script src="node_modules/@gbg/gbgcomponentlibrary/dist/gbgcomponentlibrary.min.js"></script>
    </body>
</html>
```

## Using components

Once the styles and scripts are included on your page using components is just a case of copying and pasting their markup from the [component examples](https://darling-kataifi-e3972e.netlify.app/components).

The scripts will automatically initialise components that require it on initial page load. Following that all initialisers can be found under the "gbg" namespace.

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="My HTML Page">
        <meta name="author" content="Henry Thomas">

        <link rel="stylesheet" href="node_modules/@gbg/gbgcomponentlibrary/dist/gbgcomponentlibrary.css">

    </head>

    <body>

        <button class="button button--primary" aria-label="Button Title">
            Button Title
        </button>

        <script src="node_modules/@gbg/gbgcomponentlibrary/dist/gbgcomponentlibrary.min.js"></script>
    </body>
</html>
```