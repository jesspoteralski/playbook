# Playbook

Playbook is a Vite + React demo of a composable layout system where layout primitives control structure, display primitives control content, and CSS container queries let each content block adapt to the space it is given.

## Overview

This repo explores a page-building model intended for flexible content assembly. Instead of tightly coupling content to a single page template, it splits responsibilities into two layers:

- `Layout` components define grid structure, spacing, width, and placement.
- `Display` components render specific kinds of content such as text, images, video, headings, lists, buttons, links, cards, and hero sections.

The result is a small design-system playground that demonstrates how reusable content blocks can be composed into different page sections while keeping styling and behavior predictable.

## Goals

- Separate page structure from content presentation.
- Make components reusable across multiple layout contexts.
- Use container queries so displays respond to their parent container instead of only the viewport.
- Provide a foundation for content teams to assemble pages more independently while preserving consistency.

## Tech Stack

- React 19
- Vite 8
- Plain CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build. |
| `npm run preview` | Serves the built app locally for review. |
| `npm run lint` | Runs ESLint across the project. |

## Project Structure

```text
src/
	App.jsx                Demo page composed from layout and display primitives
	main.jsx               React entry point
	index.css              Global styles
	App.css                App-level demo styles
	layouts/
		Layout.jsx           Grid-based layout primitive
		Stack.jsx            Vertical stack primitive
		layout.css           Layout styles and mobile fallback
		Stack.css            Stack styles
	displays/
		display-base.css     Shared container-query base for displays
		displayWrapper.js    Shared wrapper-style helpers
		Hero.jsx             Full-width hero banner
		Text.jsx             Eyebrow + title + body text block
		Image.jsx            Image with optional caption
		Video.jsx            Video with optional title and caption
		Heading.jsx          Standalone heading block
		Paragraph.jsx        Paragraph text block
		List.jsx             Unordered list block
		Button.jsx           Button or link-styled action
		Link.jsx             Text link with optional icon
		Card.jsx             Surface container for nested content
```

## Core Concepts

### 1. Layout controls structure

`Layout` is the main structural primitive. It renders a grid container and accepts props for:

- `columns`: number or CSS grid template string
- `gap`: spacing between grid items
- `padding`: outer section padding
- `background`: section background color
- `border`
- `borderRadius`
- `width`: max width for the inner grid
- `justify`: grid justification

Example:

```jsx
<Layout columns={2} gap="2rem" padding="2rem" background="#f5f5f5">
	<Text
		eyebrow="Design Systems"
		title="A composable layout system"
		body="Container queries let the component adapt to the width of its parent."
	/>
	<Image
		src="/example.jpg"
		alt="Example"
		caption="Image and text can be swapped into the same layout pattern."
	/>
</Layout>
```

`Stack` is the secondary layout primitive for vertical grouping. It accepts `gap`, `padding`, `border`, `background`, and `shadow`.

### 2. Display controls content

Each display component is responsible for rendering one content pattern. Most displays support the same optional wrapper props:

- `padding`
- `border`
- `borderRadius`
- `background`
- `shadow`

Those props are handled by shared utilities in `src/displays/displayWrapper.js`, which means display components can either render “bare” or render inside a styled wrapper without duplicating logic.

### 3. Container queries drive adaptation

All display components use the shared `.display-base` class, which sets:

```css
container-type: inline-size;
container-name: display;
```

That allows each display’s CSS to react to the width of its own container. In other words, the same `Text`, `Image`, or `Video` component can behave differently in a wide two-column layout than it does in a narrow sidebar.

### 4. Layout and display stay decoupled

The demo is built around the idea that structure and content should be independently reusable:

- a `Layout` should not need to know whether it contains text, media, or actions
- a `Display` should not need to know whether it lives in a full-width hero, a card, or a narrow column

That separation is the main architectural idea in the repo.

## Component Inventory

### Layout primitives

| Component | Purpose |
| --- | --- |
| `Layout` | Grid-based page section wrapper with configurable columns, spacing, and width. |
| `Stack` | Vertical flow container for grouping related items. |

### Display primitives

| Component | Purpose |
| --- | --- |
| `Hero` | Large image-backed banner with heading and supporting copy. |
| `Text` | Split text block with eyebrow, title, and body. |
| `Image` | Image with optional caption. |
| `Video` | Video player with optional title and caption. |
| `Heading` | Standalone heading with optional eyebrow. |
| `Paragraph` | Body copy block. |
| `List` | Simple unordered list. |
| `Button` | Action button; can render as an anchor when `url` is provided. |
| `Link` | Text link with optional built-in icon variants. |
| `Card` | Surface container used to group content blocks together. |

## Example Composition Patterns

### Hero section

```jsx
<Layout width="100%">
	<Hero
		src="/hero.jpg"
		eyebrow="The Playbook"
		heading="A Composable Layout System"
		body="Layout elements control structure. Display elements control content."
	/>
</Layout>
```

### Mixed content section

```jsx
<Layout columns="2fr 1fr" gap="2rem" padding="2rem" background="#f0f4ff">
	<Video
		src="/video.mp4"
		title="Live at the Porch Sessions"
		caption="A performance example inside a wider column."
		padding="2rem"
	/>
	<Text
		eyebrow="Narrow column"
		title="Same component, different context"
		body="The Text block adapts to its column width rather than only the viewport."
		padding="1.5rem"
	/>
</Layout>
```

### Card-based assembly

```jsx
<Layout columns={3} gap="1.5rem" padding="2rem" background="#f5f5f5">
	<Card>
		<Heading level={3} eyebrow="Featured">String Section</Heading>
		<Paragraph>
			Violinists and cellists performing together in an intimate concert setting.
		</Paragraph>
		<Link url="https://example.com" icon="chevron-right">Learn more</Link>
	</Card>
</Layout>
```

## Current Demo Content

The demo page in `src/App.jsx` assembles the component library into several example sections, including:

- a hero banner
- two-column text and image layouts
- mixed text, image, and video grids
- a heading, list, paragraph, button, and link showcase
- card-based content compositions

The current sample content uses music and performance imagery to exercise the components visually, but the system itself is content-agnostic.

## Responsive Behavior

There are two layers of responsiveness in the current codebase:

- `Layout` collapses to a single column on small screens through a viewport media query in `src/layouts/layout.css`
- individual display components can adapt internally through container queries because they opt into `container-type: inline-size`

This combination allows both page-level and component-level responsiveness.

## Design Notes

- The repo favors simple component APIs over heavy abstraction.
- Styling is written in plain CSS instead of CSS-in-JS.
- Wrapper styling is shared across displays to keep the components consistent.
- The codebase is intentionally small and demo-oriented rather than production-hardened.

## Limitations

- There is no automated test suite yet.
- The demo data is hardcoded in `src/App.jsx`.
- The system is a prototype and does not yet include persistence, CMS integration, or schema-driven page assembly.
- Accessibility and content authoring workflows are only partially represented at this stage.

## Next Directions

Possible next steps for the project include:

- formalizing a content schema for each display type
- adding story-driven documentation or Storybook-style examples
- introducing tests for rendering and responsive behavior
- expanding layout primitives beyond grid and stack
- connecting the display model to a CMS or page builder

## License

No license is currently defined in this repository.
