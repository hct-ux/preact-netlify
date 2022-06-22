---
title: Pill (draft)
date: 2022-06-22T11:02:43.338Z
description: |-
  
  Pills are used to present a text label or status, with the following options: 

  * Colour (red, blue, orange, green, grey)
  * Removable (yes, no)
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-pills--pill-element
dos:
  - Removing a pill must have a clear effect on the current view - for instance
    changing an associated list of items. When a further action is required to
    enact the change (such as submitting a form) the pill must be clearly part
    of a form group
  - Removeable pills must be focusable with the keyboard
  - Ensure that the wording of the pill clearly conveys any status (such as a
    positive or negative connotation) without relying on colour alone
donts:
  - Don’t apply custom colours to pills
  - Don’t include anything other than short text inside pills (e.g. icons or
    sentences)
examples:
  - title: Default
    description: >-
      Non-removable pills are generally used to denote status, or to “tag”
      items.


      Removable pills allow the user to remove individual items, such as filter items associated with a set of results.
    preview: https://ds.gbgplc.com/react/?path=/story/atoms-pills--pill-element&nav=0&knob-Type=success&knob-Shape=rounded&knob-Content=Pill%20Content
status: under review
---
