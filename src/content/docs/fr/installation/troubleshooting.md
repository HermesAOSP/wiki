---
title: Dépannage
description: Solutions aux problèmes courants d'installation.
sidebar:
  order: 5
---

## L'appareil n'est pas détecté

```bash
fastboot devices
adb devices
```

Si rien n'apparaît :

- change de câble ou de port USB (évite les hubs) ;
- sur Windows, installe le pilote USB du constructeur ;
- sur Linux, vérifie les règles `udev`.

## Bootloop

<details>
<summary>L'appareil redémarre en boucle après le flash</summary>

Retourne en recovery, fais un *Factory reset*, puis réinstalle le zip. Vérifie aussi que le zip correspond bien à ton appareil.

</details>

<details>
<summary>Erreur « signature verification failed »</summary>

Le téléchargement est probablement corrompu. Compare la somme `sha256` avec celle publiée et télécharge à nouveau.

</details>

## Toujours bloqué ?

Ouvre un ticket en suivant le [guide de signalement de bug](/fr/development/reporting-bugs/), avec les logs.
