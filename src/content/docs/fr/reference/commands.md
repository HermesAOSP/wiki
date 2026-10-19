---
title: Aide-mémoire des commandes
description: Commandes adb et fastboot utiles.
sidebar:
  order: 2
---

## adb

| Commande | Effet |
|---|---|
| `adb devices` | Liste les appareils connectés |
| `adb reboot bootloader` | Redémarre en mode bootloader |
| `adb reboot recovery` | Redémarre en recovery |
| `adb sideload fichier.zip` | Installe un zip depuis la recovery |
| `adb logcat -d` | Affiche les logs |

## fastboot

| Commande | Effet |
|---|---|
| `fastboot devices` | Liste les appareils en mode fastboot |
| `fastboot flashing unlock` | Déverrouille le bootloader |
| `fastboot flash <partition> <image>` | Flashe une partition |
| `fastboot reboot` | Redémarre l'appareil |
