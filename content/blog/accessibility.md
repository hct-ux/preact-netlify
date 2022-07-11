---
title: Accessibility
date: 2019-09-07T05:43:53.681Z
in_navigation: true
nav_order: 3
subtitle: We strive to meet the W3C Web Content Accessibility Guidelines (WCAG)
  2.1 at conformance level AA across all of GBG’s digital products and services.
  This fulfils our legal requirements under the Equality Act 2010 and
  legislation in countries where similar accessibility laws exist.
tags: accessibility, wcag, inclusive
---
## GBG's accessibility statement

Each digital product must have its own accessibility statement; you can refer to our [group-level statement](https://foundation.gbgplc.com/blog/accessibility-statement.md), which was created using the [W3C's accessibility statement generator](https://www.w3.org/WAI/planning/statements/generator/).

## What this means for GBG products 

We should design products that any person can use regardless of whether they have permanent (e.g. blindness), temporary (e.g. cataracts), or situational disabilities (e.g. glare from the sun). By embracing the diversity of our users as part of our design process, we deliver better outcomes for everyone. 

Every product team at GBG has an obligation to measure the accessibility of their products to ensure they reach our agreed level of accessibility (WCAG Level AA).

## Assistive technology

Some people will use assistive technology to access digital products and services, we need to ensure that we consider these during the design process so as not to exclude anyone. 

## Screen readers

A screen reader is software that reads aloud on-screen content and actions, such as headings, text, tables, buttons, links and forms. Screen readers are typically used by people who are visually impaired. The most common are JAWS, NVDA, TalkBack (Android) and VoiceOver (iOS).

Guide for Talkback (Android): <https://support.google.com/accessibility/android/answer/6283677?hl=en-GB> 

Guide for VoiceOver (iOS): <https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios> 

## Magnifiers

Screen magnifiers are primarily used by people with low vision or partial sight. 

Keep in mind that people may not be able to see the whole of the screen at once, which can make it hard to find actions and content that isn’t clearly and logically grouped in proximity. 

## Keyboard access

Some people may find it difficult to use a mouse, or they may have little to no use of their hands. Blind people typically use a keyboard to navigate, using the Tab key to navigate through interactive elements on the page. 

There should also be keys which allow users to navigate the page efficiently, such as a 'Skip to content' link which allows skipping of the main navigation. Keyboard accessibility is a fundamental aspect of web accessibility. 

## Colour contrast

Use the [WebAIM colour contrast checker](https://webaim.org/resources/contrastchecker/) to measure colour contrast.

Text below 18pt normal or 14pt bold must have a minimum contrast ratio of 4.5:1 against its background. For text larger than this, a ratio of at least 3:1 is acceptable.

If text is placed on an image or gradient, use a transparent or opaque background behind the text to ensure the contrast ratio is sufficient.

Don’t use pure black text on a pure white background. This kind of stark contrast can cause blurring for some people.

Like text contrast, UI components and graphical objects that are required to understand the page, should have a contrast ratio of 3:1. Components include form inputs, focus states, navigation items and icons. 

## Use of colour

Colour shouldn’t be used by itself to communicate information. It should be used in conjunction with additional elements, such as visual indicators, icons or text content. 

For example, avoid using only traffic light colours to communicate system status and avoid using text links with no affordance (e.g. an underline or icon) to indicate its behaviour. 

## Layout and hierarchy

Section headings are critical for the ability to quickly scan and understand information, as well as allowing users of assistive technology to understand the structure of the page and skip to relevant content. 

The reading order (of HTML) should match the visual presentation of content to provide screen reader users an equal experience as well as maintaining the tab order of focusable elements. 

Grouping related content together on the page will benefit all users, particularly those who have low vision or trouble focusing. 

## Keyboard navigation

When navigating with a keyboard, users expect to move from left to right and top to bottom through the focusable elements on the page. Logical, linear layouts will benefit the most users. 

Every interactive element should have a visible focus state, preferably deferring to device defaults to ensure users have a consistent and predictable experience. Make sure that the styling of any other elements on the page doesn't replicate the focus state. This can be confusing for users who use navigate through pages by following the focus state. 

## Forms

All form controls including text boxes, checkboxes, radio buttons and drop downs should have descriptive labels which describe what input is needed from the customer. The label should be outside but aligned near to the form element. 

Identifying and fixing errors can be a frustrating experience for many users. Where possible, inline validation should raise issues at the point they arise, and messaging should clearly describe the problem and how to fix it.