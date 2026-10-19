---
title: Updating
description: Update Euodos without losing your data.
sidebar:
  order: 4
---

## Built-in update (OTA)

1. Open *Settings → System → Updates*.
2. Download the offered update.
3. Reboot when the installation finishes.

## Manual update

If you stay on the same major version, you can sideload the new zip **without wiping data**:

```bash
adb reboot recovery
# In recovery: Apply update → Apply from ADB
adb sideload euodos-new-version.zip
```

:::caution
To move to a new major Android version, a clean install is recommended. Back up your data first.
:::
