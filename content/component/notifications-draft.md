---
title: Notifications
date: 2022-06-22T11:02:14.001Z
description: >-
  Notifications provide key contextual information, such as system status,
  global or page-level error messaging or the successful completion of a
  performed action.


  All notifications (global, inline and toast) have four possible states:


  * **Info:** Neutral updates such as helpful information

  * **Success:** Positive updates such as an action that has been successfully completed

  * **Warn:** A mild warning which does not require the user to take any action

  * **Error:** A major warning, such as an error or event that requires the user to act
preview: https://ds.gbgplc.com/react/iframe.html?id=molecules-notifications--global-notification-element
dos:
  - Ensure that the wording of the notification message clearly conveys its
    severity without relying on colour alone
  - Where possible, group notification content (such as “2 records updated”
    instead of two separate toast notifications)
  - Notifications should be actionable when appropriate such as including a link
    to “undo” or view relevant information
donts:
  - Avoid stacking multiple global or inline notifications
  - On toast notifications, don’t change the animation settings or reduce the
    duration to below the default number of seconds
examples:
  - title: Global
    preview: https://ds.gbgplc.com/react/?path=/story/molecules-notifications--global-notification-element
    description: Global notifications are for things that affect the whole product
      or experience, such as outage information, account or product-level
      updates (such as a customer’s trial status). This should always appear at
      the very top of the screen, above any navigation or top bar components.
  - title: Inline
    description: "Inline notifications are for things that affect the current page
      or component, rather than the whole system. This should appear within
      context, above any related content or form controls (such as at the top of
      a form with multiple, separate field errors) "
    preview: https://ds.gbgplc.com/react/?path=/story/molecules-notifications--inline-notification-element&nav=0
  - title: Toast
    description: "Toast notifications are for transactional messages, such as a
      successful or unsuccessful action, when there’s a benefit to displaying
      the message immediately and in way that’s likely to get the user’s
      attention. "
    preview: https://ds.gbgplc.com/react/?path=/story/molecules--toast-element&nav=0
status: live
wcag: WCAG Not reviewed
---
