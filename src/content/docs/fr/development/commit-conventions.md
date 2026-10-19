---
title: Conventions de commit
description: Format des messages de commit pour Gerrit.
sidebar:
  order: 2
---

Un bon message de commit facilite la relecture et l'historique.

## Format

```text
composant: résumé court à l'impératif (≤ 72 caractères)

Explication détaillée : pourquoi ce changement, et pas seulement
quoi. Reste lisible dans un terminal (lignes ≤ 72 caractères).

Change-Id: I0123456789abcdef0123456789abcdef01234567
```

- Le `Change-Id` est **ajouté par le hook Gerrit** : ne l'écris pas à la main.
- Un commit = un changement logique.
- Mentionne le ticket concerné si besoin (`Bug: 123`).
- Les messages de commit restent **en anglais**, quelle que soit la langue de la page modifiée.

## Exemples

```text
docs: add the example1 device page
```

```text
docs(fr): translate the flashing guide
```

:::tip
Garde le résumé à l'impératif : « add », « fix », « remove ».
:::
