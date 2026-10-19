---
title: Porting a device
description: Add support for a new device.
sidebar:
  order: 4
---

To propose a new device you generally need:

1. a **device tree** (`device/<vendor>/<codename>`);
2. a **kernel** (or a compatible mainline kernel);
3. the **proprietary blobs** (`vendor/<vendor>/<codename>`);
4. a page in this wiki.

## Checklist

- [ ] The phone boots
- [ ] Wi-Fi, Bluetooth, GPS
- [ ] Camera, audio, sensors
- [ ] Calls, SMS, mobile data
- [ ] OTA updates

## Documentation

Copy the page of an existing device (for example [Example Phone 1](/devices/example-phone-1/)) and fill it in. Submit it through [Gerrit](/development/contributing/).
