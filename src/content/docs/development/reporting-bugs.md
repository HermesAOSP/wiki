---
title: Reporting bugs
description: How to write a useful bug report.
sidebar:
  order: 5
---

## Before reporting

- Check the [FAQ](/usage/faq/) and [troubleshooting](/installation/troubleshooting/).
- Update to the latest version.

## Information to include

- Device and codename
- Euodos version (*Settings → About*)
- Steps to reproduce the problem
- Expected and observed behaviour
- Logs

## Collect logs

```bash
adb logcat -d > logcat.txt
adb shell dmesg > dmesg.txt
```

:::danger[Personal data]
Review logs before sharing them: they may contain private information.
:::
