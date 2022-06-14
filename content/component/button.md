---
title: Button
date: 2022-06-14T09:42:32.189Z
description: >-
  

  Buttons are used to initiate an action, such as submitting a form or navigating a system. They must clearly and concisely communicate their purpose and have a logical visual hierarchy using the following options:


  * Kind (primary, secondary, tertiary)

  * Action (positive, negative / destructive)

  * State (enabled, active, spinner, disabled)

  * Size (default, small)
preview: "https://ds.gbgplc.com/react/iframe.html?id=atoms-button--button-element"
dos:
  - "Keep text labels clear and short, preferably two or three words (in sentence case) describing the action or
    destination, leading with an actionable verb (such as \"edit contact\" \"download file\")."
  - "Icon buttons can be used to highlight certain actions, such as \"download\"."
donts:
  - "Don’t overuse icons or heavily rely on them to convey meaning. Icons are often misinterpreted so include text labels where possible."
  - "Avoid using multiple instances of primary buttons on the same page. Instead, use secondary, tertiary and icon buttons to differentiate calls to action."
  - "Avoid temporarily hiding or disabling buttons in form journeys. In cases where an action can’t yet be performed, allow the person to try to continue and give clear feedback on why they can’t."
  - "Buttons should not open new windows or tabs unless doing so avoids disruption, such as within a long form, or when media is playing (in which case, navigation will interrupt it)."
examples:
  - title: Primary
    description: Used for critical pathways (such as "get started" "add product" "submit form") primary buttons are strong and attention grabbing. Used sparingly, they highlight important actions. Avoid using multiple instances of primary buttons on a single screen.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Kind=primary
  - title: Secondary
    description: Used for supporting pathways and standalone actions (such as "back" "bookmark" "download").
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Kind=secondary
  - title: Tertiary
    description: Used for less common or highly contextual actions (such as "filter results" "close" "view as list") tertiary buttons are typically for actions that are less common, or for groups of actions of equal importance.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Kind=tertiary
  - title: Small buttons
    description: Small buttons can be used when the default size is not appropriate, or to avoid excessive white space and extending the physical length of each list.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Size=small
  - title: Icon buttons
    description: Buttons must have either a text label, an icon, or both. Icons can appear on the left or right-hand size of the text label. Icon buttons without a visible text label must include descriptive text, visually hidden but accessible to screen readers and on hover (using the HTML "title" attribute).
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--icon-button&nav=0
  - title: Negative buttons
    description: Buttons must be positive unless the action is destructive, dangerous or impossible to undo. (such as "delete" or "remove person") in which case, the negative action can be used.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Kind=destructive
  - title: Spinner buttons
    description: Spinner buttons indicate system activity that is temporarily preventing an action. The text label is optional but preferred. If a button is likely to remain in a spinner state for more than 10 seconds, provide additional feedback (such as a notification).
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Worker?=true&knob-Active?=true
  - title: Disabled buttons
    description: Disabled buttons should generally be avoided. When a person tries to interact with a disabled button, the system should provide feedback as to why the interaction isn’t possible.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Disabled?=true
---

