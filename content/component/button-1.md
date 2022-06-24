---
title: Button (1)
date: 2022-06-24T12:28:12.791Z
description: Buttons are used to initiate an action, such as submitting a form
  or navigating a system. They must clearly and concisely communicate their
  purpose and have a logical visual hierarchy.
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-button--button-element
dos:
  - Keep text labels clear and short, preferably two or three words (in sentence
    case) describing the action or destination, leading with an actionable verb
    (such as "edit contact" "download file")
  - Icon buttons can be used to highlight certain actions, such as "download"
donts:
  - Don’t overuse icons or heavily rely on them to convey meaning. Icons are
    often misinterpreted so include text labels where possible
  - Don't use multiple primary buttons within a component. Instead, use
    secondary, tertiary and icon buttons to differentiate calls to action
  - Don't temporarily hide buttons in form journeys. In cases where an action
    can’t yet be performed, either disable the button or allow the person to try
    to continue and give feedback on why they can’t proceed
  - Buttons shouldn't open new windows or tabs unless doing so avoids
    disruption, such as within a long form, or when media is playing
examples:
  - title: "[remove this heading]"
    description: "[remove this text]"
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Kind=primary
  - title: Secondary
    description: Used for supporting or standalone actions (such as "back"
      "bookmark" "download").
    preview: ""
  - title: Tertiary
    description: Used for less common or highly contextual actions (such as "filter
      results" "close" "view as list") tertiary buttons are typically for
      actions that are less common, or for groups of actions of equal
      importance.
    preview: ""
  - title: Small
    description: Small buttons can be used when the default size is not appropriate,
      or to increase the density of content.
    preview: ""
  - title: Icon
    description: Buttons must have either a text label, an icon, or both. Icons can
      appear on the left or right-hand size of the text label. Icon buttons
      without a visible text label must include descriptive text, visually
      hidden but accessible to screen readers and on hover (using the HTML
      "title" attribute).
    preview: ""
  - title: Negative
    description: Buttons must be positive unless the action is destructive or
      impossible to undo (such as "delete" or "remove person").
    preview: ""
  - title: Disabled
    description: Disabled buttons should generally be avoided. When a person tries
      to interact with a disabled button, the system should provide feedback as
      to why the interaction isn’t possible.
    preview: ""
  - title: Spinner
    description: Spinner buttons indicate system activity that is temporarily
      preventing an action. The text label is optional but preferred. If a
      button is likely to remain in a spinner state for more than 10 seconds,
      provide additional feedback (such as a notification).
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-button--button-element&nav=0&knob-Worker?=true&knob-Active?=true
status: live
wcag: WCAG Not reviewed
---
