---
title: Text field
date: 2022-06-15T08:19:41.519Z
description: >-
  

  The text field allows input of a single line of text, supporting alphanumeric characters and symbols.
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-controls--input-elements
dos:
  - Ensure the input uses an appropriate “type” attribute such as email or phone
    number
  - Restrict the width and input for standard formats such as dates; phone
    numbers; post codes
  - Update the success and error states only after an input has been completed
    (not during entry).
  - Use placeholder text to demonstrate an example such as an account number or
    full URL.
donts:
  - If the input is likely to exceed 50 characters use a textarea instead
  - Avoid using a placeholder for information that’s critical to completing the
    field
  - Don't include a clear button unless there is a clear benefit. Adding
    unnecessary interactions will contribute to cognitive load
examples:
  - title: Default
    description: Use to allow text input when the expected information is short. The
      input’s width can be restricted according to the expected input.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0
  - title: Success
    description: Use to indicate valid input. Only use this if you can be confident
      that the input meets all validation rules.
  - title: Error
    description: Use to indicate invalid input. A short text description of the
      error must always accompany the visual error indicator.
    preview: https://ds.gbgplc.com/react/index.html?path=/story/molecules-forms-groups--form-group-text-element&nav=0&knob-Error?=true
  - title: Disabled
    description: Prevents entry into the field.
  - title: With clear
    description: Allows the field to be cleared in a single interaction. This is
      generally useful if people are likely to iterate on the field value, such
      as when filtering a table of data.
  - title: Small
    description: Small inputs have less top and bottom padding and can be used when
      the default size is not appropriate, or to avoid excessive vertical white
      space.
status: under review
---
