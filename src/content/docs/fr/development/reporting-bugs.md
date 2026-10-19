---
title: Signaler un bug
description: Comment faire un rapport de bug utile.
sidebar:
  order: 5
---

## Avant de signaler

- Vérifie la [FAQ](/fr/usage/faq/) et le [dépannage](/fr/installation/troubleshooting/).
- Mets à jour vers la dernière version.

## Informations à fournir

- Appareil et nom de code
- Version d'Euodos (*Paramètres → À propos*)
- Étapes pour reproduire le problème
- Comportement attendu et comportement observé
- Logs

## Récupérer les logs

```bash
adb logcat -d > logcat.txt
adb shell dmesg > dmesg.txt
```

:::danger[Données personnelles]
Relis les logs avant de les partager : ils peuvent contenir des informations privées.
:::
