---
title: Mises à jour
description: Mettre à jour Euodos sans perdre ses données.
sidebar:
  order: 4
---

## Mise à jour intégrée (OTA)

1. Ouvre *Paramètres → Système → Mises à jour*.
2. Télécharge la mise à jour proposée.
3. Redémarre quand l'installation est terminée.

## Mise à jour manuelle

Si tu restes sur la même version majeure, tu peux « sideloader » le nouveau zip **sans effacer les données** :

```bash
adb reboot recovery
# Dans la recovery : Apply update → Apply from ADB
adb sideload euodos-nouvelle-version.zip
```

:::caution
Pour changer de version majeure d'Android, une réinstallation propre est conseillée. Sauvegarde tes données d'abord.
:::
