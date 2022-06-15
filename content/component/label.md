---
title: Label
date: 2022-06-15T08:23:34.135Z
description: >-
  

  A label is a short description of an associated form field, which clearly describes the input that is expected. Labels always sit above their form field, they can be extended to provide extra guidance, with the following options:


  * Indicators

  * Assistive text

  * Help icon
preview: https://ds.gbgplc.com/react/iframe.html?id=molecules-forms-groups--form-group-text-element
dos:
  - Keep labels short and functional (such as "Email address" not "What is your
    email address?").
  - Labels must always be visible
  - field placeholder text should only be used to complement a label.
donts:
  - The label itself is not help text
  - nor should it provide instruction.
examples:
  - title: Text label
    description: A simple text label with no formatting (bold, italic). When clicked
      / tapped, the label must cause its associated input to gain focus.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0
  - title: Indicators
    description: >-
      Since some form fields are required while others are optional, clearly
      communicating this helps people understand what information is required
      and reduces form errors due to missing information.


      All labels within a system should indicate optional or required fields in the same way. This is done using either the supportive (optional) indicator or an asterisk (*) directly after the label.


      A footnote defining the asterisk as required information is not required, but the asterisk must include hidden descriptive text for screen readers.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--label-element&nav=0
  - title: Assistive text
    description: Assistive text provides extra guidance with no formatting, but
      anchor links can be added to the text. As always, assistive text should be
      concise and easy to understand (such as "Enter the date as dd/mm/yyyy").
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--assistive-element&nav=0&knob-Kind=tertiary
  - title: Help icons
    description: A help icon triggers a tooltip containing help text. Assistive text
      (above) is preferred because it is always visible and requires no
      interaction, but the help icon can be useful for cases where longer
      additional guidance is necessary, or when screen space is at a premium.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0
---
