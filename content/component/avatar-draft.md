---
title: Avatar (draft)
date: 2022-06-22T11:01:46.623Z
description: >-
  A fixed-size circular representation of a system user, containing either an
  image or up to two letters representing the user’s name. Options as follows:	 


  * Size (default, small)
preview: https://ds.gbgplc.com/react/iframe.html?id=atoms-avatars--avatar-element
dos:
  - If an image is available, use this instead of initials
  - When an image is not available up to two letters can be used instead. If the
    name contains two words (such as first and last name) this is the first
    capitalized letter of each
  - When neither image nor initials are unavailable the circle should contain no
    letters
donts:
  - Don't include more than two letters
examples:
  - title: Initials
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-avatars--avatar-element
    description: Available in 32px or 24px sizes
  - title: Image
    preview: https://ds.gbgplc.com/react/index.html?path=/story/atoms-avatars--avatar-image-element
    description: Available in 32px or 24px sizes
status: under review
---
