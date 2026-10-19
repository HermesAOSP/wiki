---
title: Sauvegarde et restauration
description: Protéger ses données avant une mise à jour ou un flash.
sidebar:
  order: 2
---

## Sauvegarder avec adb

```bash
adb backup -apk -shared -all -f sauvegarde.ab
```

:::note
`adb backup` est limité et obsolète pour beaucoup d'applications. Préfère une solution dédiée (Seedvault ou une synchronisation de fichiers).
:::

## Photos et fichiers

Copie le contenu de `/sdcard` sur ton ordinateur :

```bash
adb pull /sdcard/DCIM ./DCIM
adb pull /sdcard/Documents ./Documents
```

## Restaurer

Après l'installation, remets tes fichiers en place :

```bash
adb push ./DCIM /sdcard/DCIM
```
