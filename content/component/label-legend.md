---
title: Label / Legend
date: 2022-06-24T16:07:01.263Z
description: >-
  A label is a short description of an associated form field, which clearly
  describes the input that is expected. Labels always sit above their form
  field, whereas legends can be added a level above a group of labelled form
  elements. For instance, each checkbox in a list should have an associated
  label, and the whole group can be described by a legend. 


  Both labels and legends can be extended to provide extra guidance, using assistive text or a help action.
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-controls--icon-label&knob-Content=Label%20*
dos:
  - Labels must always be visible outside of their related form control
  - Placeholder text should only be used to complement a label
  - When clicked or tapped the label must cause its associated input to gain
    focus
  - Keep labels short and functional (such as “Email address” not “What is your
    email address?” unless in a conversational context)
  - Keep assistive text concise and action oriented. If more text is needed, use
    the help variant
donts:
  - The label itself is not help text nor should it provide lengthy instruction
examples:
  - title: Label
    description: A simple text label with no formatting (bold, italic). All labels
      within a system should indicate optional or required fields in the same
      way. This is done using either the "optional” variant or an asterisk (*)
      directly after the label. A footnote to label the asterisk is not needed.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0
  - title: Assistive
    description: Assistive text provides extra guidance with no formatting (anchor
      links can be added to the text). As always, assistive text should be
      concise and easy to understand (such as “Enter the date as dd/mm/yyyy”).
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--assistive-element&nav=0&knob-Kind=tertiary
  - title: With help
    description: A help icon triggers a tooltip containing help text. Assistive text
      (above) is preferred because it is always visible and requires no
      interaction, but the help icon can be useful for cases where longer
      additional guidance is necessary, or when screen space is at a premium.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0
  - title: Legend
    description: In this example, the legend labels the group of radios with
      individual labels describing each option.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-radio-list-element&nav=0
status: under review
wcag: WCAG AAA
---
