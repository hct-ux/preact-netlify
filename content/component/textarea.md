---
title: Textarea
date: 2022-06-27T12:50:29.843Z
description: Allows multiple lines of text, supporting alphanumeric characters and symbols.
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-controls--text-elements
dos:
  - Update the success and error states only after an input has been completed
    (not during entry)
  - Allow vertical resizing
donts:
  - If the input is likely to be less than 50 characters, use a text field
    instead.
  - Avoid using a placeholder for information that’s critical to completing the
    field
  - Don't allow horizontal resizing unless it's a specific requirement
examples:
  - title: Default
    description: Use to allow text input when the expected information is long.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--text-elements&nav=0
  - title: Error
    description: Use to indicate invalid input. A short text description of the
      error must always accompany the visual error indicator.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--text-elements&nav=0&knob-Error?=true
  - title: Disabled
    description: Prevents entry into the area.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-controls--text-elements&nav=0&knob-Disabled?=true
status: live
wcag: WCAG AAA
---
