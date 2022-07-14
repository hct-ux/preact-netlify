---
title: Select
date: 2022-06-24T16:02:10.133Z
description: Select allows a single choice from a list.
preview: https://ds.gbgplc.com/react/iframe.html?id=/story/atoms-controls--select-elements
dos:
  - If you have fewer than five options consider using radio buttons or a toggle
    button group
  - A long list of options can be hard to navigate. For very long option lists
    consider revising the options or using a text field or a combo box
  - Include option group headings where appropriate (these aren't selectable)
  - Order in the most logical way (such as alphabetical, popularity, grouped, or
    a combination of these)
  - The blank/default option must always be visible and selectable. If there
    isn’t a default option use generic and consistent text (such as Select an
    option)
donts:
  - Don't use when multiple options can be selected. HTML supports multi-selects
    but these have usability problems. Instead use an alternative such as
    checkboxes or multiple grouped selects
  - Avoid repetition and long text in options
  - Do not use the blank/default option text in place of a form label
examples:
  - title: Default
    preview: https://ds.gbgplc.com/react/?path=/story/atoms-controls--select-elements&nav=0
    description: "Use to allow selection from a long list of items. The select’s
      width can be restricted according to the expected input. "
  - title: Disabled
    description: >
      Prevents interaction, can be disabled in either the empty or populated
      state.
    preview: https://ds.gbgplc.com/react/?path=/story/atoms-controls--select-elements&nav=0&knob-Disabled?=true
status: live
wcag: WCAG AAA
---
