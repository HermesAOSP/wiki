---
title: Command cheat sheet
description: Useful adb and fastboot commands.
sidebar:
  order: 2
---

## adb

| Command | Effect |
|---|---|
| `adb devices` | List connected devices |
| `adb reboot bootloader` | Reboot into the bootloader |
| `adb reboot recovery` | Reboot into recovery |
| `adb sideload file.zip` | Install a zip from recovery |
| `adb logcat -d` | Dump the logs |

## fastboot

| Command | Effect |
|---|---|
| `fastboot devices` | List devices in fastboot mode |
| `fastboot flashing unlock` | Unlock the bootloader |
| `fastboot flash <partition> <image>` | Flash a partition |
| `fastboot reboot` | Reboot the device |
