---
title: Commit conventions
description: Commit message format for Gerrit.
sidebar:
  order: 2
---

A good commit message makes review and history easier.

## Format

```text
component: short summary in the imperative (≤ 72 characters)

Detailed explanation: why this change, not just what. Keep it
readable in a terminal (lines ≤ 72 characters).

Change-Id: I0123456789abcdef0123456789abcdef01234567
```

- The `Change-Id` is **added by the Gerrit hook**: do not write it by hand.
- One commit = one logical change.
- Mention the related ticket if needed (`Bug: 123`).

## Examples

```text
docs: add the example1 device page
```

```text
installation: fix the fastboot command in the flashing guide
```

:::tip
Keep the summary in the imperative mood: "add", "fix", "remove".
:::
