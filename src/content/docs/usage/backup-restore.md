---
title: Backup and restore
description: Protect your data before an update or a flash.
sidebar:
  order: 2
---

## Back up with adb

```bash
adb backup -apk -shared -all -f backup.ab
```

:::note
`adb backup` is limited and deprecated for many apps. Prefer a dedicated solution (Seedvault or file sync).
:::

## Photos and files

Copy the contents of `/sdcard` to your computer:

```bash
adb pull /sdcard/DCIM ./DCIM
adb pull /sdcard/Documents ./Documents
```

## Restore

After installing, put your files back:

```bash
adb push ./DCIM /sdcard/DCIM
```
