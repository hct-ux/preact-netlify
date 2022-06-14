---
title: Button Group
date: 2022-06-14T09:42:32.189Z
description: A linear group of multiple, related buttons
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-button--button-element
dos:
  - All buttons should display at full width on small screens.
  - Ensure each button has a clear distinct purpose, with minimal room for
    interpretation.
donts:
  - Avoid using multiple instances of primary buttons in the same group.
  - Within a button group where the primary action has no icon, avoid using
    icons on secondary and tertiary buttons.
examples:
  - title: Standard
    description: On small screens, buttons stack vertically from top to bottom in
      order of descending importance (primary > secondary > tertiary). On larger
      screens buttons are stacked horizontally, in order of ascending importance
      (tertiary > secondary > primary) in the direction of the chosen language
      (RTL or LTR).
  - title: Next / previous button group
    description: In a linear stepped journey, the “previous” and “next” actions can be separately aligned left and right across large and medium screen sizes. On small screens, buttons stack vertically (as per a standard button group). The button labels can be anything but should always navigate to steps in a linear journey and preferably include chevrons to indicate the direction of travel. Tertiary buttons can be included, stacked on the inside of the “next” action.
---
