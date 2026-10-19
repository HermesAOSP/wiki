---
title: Porter un appareil
description: Ajouter le support d'un nouvel appareil.
sidebar:
  order: 4
---

Pour proposer un nouvel appareil, il faut en général :

1. un **device tree** (`device/<constructeur>/<codename>`) ;
2. un **kernel** (ou un kernel mainline compatible) ;
3. les **blobs propriétaires** (`vendor/<constructeur>/<codename>`) ;
4. une page dans ce wiki.

## Checklist

- [ ] Le téléphone démarre
- [ ] Wi-Fi, Bluetooth, GPS
- [ ] Appareil photo, audio, capteurs
- [ ] Appels, SMS, données mobiles
- [ ] Mises à jour OTA

## Documentation

Copie la fiche d'un appareil existant (par exemple [Example Phone 1](/fr/devices/example-phone-1/)) et remplis-la. Envoie-la via [Gerrit](/fr/development/contributing/).
