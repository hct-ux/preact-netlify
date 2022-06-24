---
title: Password
date: 2022-06-24T16:06:17.870Z
description: The password field allows entry of a single password, the policy
  requirement list is optional.
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-controls--password-elements
dos:
  - Consider using the password field for any particularly sensitive form
    information, for example answers to backup security questions
  - By default the password must always be masked whether or not the password
    field has the “visible” option enabled
  - Include the policy only when creating a new password - not when confirming
    an existing one
donts:
  - Don't use placeholder text
examples:
  - title: Example with policy
    description: >-
      A standard width Textfield [link] showing dots in place of characters,
      with a visibility toggle. 


      A set of rules that reflect the password policy. These must reflect all coded validation rules, such as password length and character requirements (numbers, special characters, etc). 
    preview: https://ds.gbgplc.com/react/?path=/story/atoms-controls--password-elements
status: live
wcag: WCAG Not reviewed
---
