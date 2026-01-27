# Design System

The goal of this design system is to provide **ready-to-use UI components**
that you can **copy, tweak, and compose quickly** while keeping
a consistent visual style. \
Just select the component from the [component list](#component-list) to go directly to its documentation page, or browse the [catalog](./catalog/README) and select a component from the preview.
---
## Component list
[Login](./components/login.md) \
[Listing](./components/listing.md) \
[Notification](./components/notification.md) \
[Large Card](./components/card-lg.md) 

---
## How to use components

1. Start the dev server:

```bash
npm install
npm run dev
```
2. Open the playground file under `src/playground/Playground.tsx`, and import the component you want to preview. For example, to preview the Login component:
```tsx
import { Login } from '../components'

export function Playground() {
  return <Login />
}
```
3. Save the file, and the dev server will automatically reload the page to show the selected component.

