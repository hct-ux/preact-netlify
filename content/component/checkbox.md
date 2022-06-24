---
title: Checkbox
date: 2022-06-15T08:04:33.335Z
description: Checkboxes allow users to indicate a preference or make selections
  (zero, one or more) from a list.
preview: https://ds.gbgplc.com/react/iframe.html?id=molecules-forms-groups--form-group-checkbox-element
dos:
  - Checkboxes should behave independently from one another
  - A single checkbox should be used where a user needs to indicate agreement
    (for example to terms and conditions) before proceeding. This is different
    to expressing a preference in which case a switch should be used
  - The checkbox itself and its container are clickable, to provide a larger
    target area
donts:
  - Don’t use for mutually exclusive options - use radio buttons or a select
    instead
  - Don’t use a negative statement for a checkbox label
examples:
  - title: Default (single)
    description: A single checkbox.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--checkbox-elements&nav=0
  - title: Assistive (single)
    description: Assistive text can appear below the label of a single checkbox,
      when not part of a list. For checkbox lists, option-level assistive text
      is not supported.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-checkbox-complex-element&nav=0
  - title: List
    description: A list of checkbox options.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-checkbox-list-element&nav=0
  - title: Error
    description: Use to indicate invalid input. A short text description of the
      error must always accompany the visual error indicator.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-checkbox-complex-element&knob-Error?=true&nav=0
  - description: Prevents interaction, can be disabled in either the checked or
      unchecked states.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--checkbox-elements&knob-Disabled?=true&nav=0
    title: Disabled
status: live
wcag: WCAG AAA
---
