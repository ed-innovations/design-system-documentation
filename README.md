# Design System Playground

This repository contains a **small, self-contained design system** built with **React, TypeScript, and Vite**.

It is intended for an **easy** setup, where you can:
- Explore ready UI components
- Preview them locally in a playground
- Copy, modify, and compose them quickly
- Follow clear, lightweight documentation

---

## What’s inside

### Components

The code lives in: [/src/components/](./src/components/README.md) \
Or take a look into the [component catalog](./docs/catalog/index.md), where you can select from the preview.

They are designed to be:
- Self-contained
- Easy to read
- Easy to copy into another project
- Visually consistent with the Figma design system

---
### Documentation
Documentation lives in: **docs/**

Start here: [/docs/index.md](./docs/index.md)

The docs include:
- An overview of the design system
- A list of available components
- One Markdown page per component with:
- Overview
- Usage
- TSX source
- CSS source
---

### Playground

A local sandbox for previewing components during development under **src/playground/**.

The playground renders a blank page where you can import and display any component:
```tsx
import { Login } from '../components'

export function Playground() {
  return <Login />
}
```
---
Run locally with:
```bash
    npm install
    npm run dev
```

---
### Design source
The components in this repository are based on a Figma design file:
 - [Design System Figma](https://www.figma.com/design/8ejtbRK1mcwy8gEwYDzYJt/ED-hackathon-2026-Design-System?node-id=286-4542&p=f&t=nRBNCYb6Q4ZCfgbp-0)