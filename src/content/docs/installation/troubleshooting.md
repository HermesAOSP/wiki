---
title: Troubleshooting
description: Fixes for common installation problems.
sidebar:
  order: 5
---

## The device is not detected

```bash
fastboot devices
adb devices
```

If nothing shows up:

- try another cable or USB port (avoid hubs);
- on Windows, install the manufacturer's USB driver;
- on Linux, check your `udev` rules.

## Bootloop

<details>
<summary>The device keeps rebooting after flashing</summary>

Go back to recovery, do a *Factory reset*, then reinstall the zip. Also check that the zip matches your device.

</details>

<details>
<summary>"signature verification failed" error</summary>

The download is probably corrupted. Compare the `sha256` sum with the published one and download again.

</details>

## Still stuck?

Open a ticket following the [bug reporting guide](/development/reporting-bugs/), and include logs.
