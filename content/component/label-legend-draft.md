---
title: Switch (draft)
date: 2022-06-22T11:01:30.128Z
description: >-
  Switch toggles allow a simple "on / off” selection, with the following
  options: 


  * State (default, checked, disabled)

  * Single

  * Group
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-controls--switch-elements
dos:
  - Use a switch to turn an option on or off
  - Text labels must allow a clear “on / off” answer with no ambiguity
  - Be mindful of the power of default selections and only use a switch when
    it’s reasonable to set a default answer
donts:
  - Since a switch cannot be unselected don't use where either answer leads to
    an error
  - Don’t use when a conscious selection is required since the default state
    presumes an answer
  - "If a list consists of multiple options avoid using switches. Instead use
    checkboxes or a toggle button group "
examples:
  - description: A single switch toggle.
    title: Single
  - title: Group
    description: A set of switches, stacked vertically.
status: under review
---
