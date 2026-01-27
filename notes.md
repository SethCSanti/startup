# CS 260 Notes

[LoadMap](README.md)

# Code for Deployment:
./deployFiles.sh -k ~/260_key_pair.pem -h loadmap.click -s startup

# Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

# AWS

My IP address is: 54.211.156.166

# Caddy

 [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

# HTML
---

## HTML Purpose
- Defines **structure and meaning**
- Describes *what* content is, not how it looks
- Styling → CSS
- Interactivity → JavaScript

---

## Basic HTML Skeleton

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Page Title</title>
      </head>
      <body>
        Content goes here
      </body>
    </html>

---

## Core Concepts

### Element
    <tag>content</tag>

### Self-Closing Element
    <tag attribute="value">

### Attribute
    <tag attribute="value">

---

## Headings (Document Hierarchy)

    <h1>Main Title</h1>
    <h2>Section</h2>
    <h3>Subsection</h3>
    <h4>Lower Level</h4>

Rules:
- One `<h1>` per page
- Do not skip levels

---

## Text Content

### Paragraph
    <p>Paragraph text</p>

### Line Break
    <br>

### Horizontal Rule
    <hr>

---

## Links

    <a href="https://example.com">Link text</a>

Common patterns:
    <a href="page.html">Internal link</a>
    <a href="#section">Anchor link</a>
    <a href="mailto:test@email.com">Email link</a>

---

## Images

    <img src="image.jpg" alt="Description">

Key attributes:
- `src` → image source
- `alt` → accessibility text

---

## Lists

### Unordered List
    <ul>
      <li>Item</li>
      <li>Item</li>
    </ul>

### Ordered List
    <ol>
      <li>First</li>
      <li>Second</li>
    </ol>

---

## Containers

### div (Block-level)
    <div>
      Content
    </div>

Used for:
- Layout
- Grouping

### span (Inline)
    <span>Inline content</span>

Used for:
- Styling text
- Inline grouping

---

## Semantic HTML (Preferred)

    <header>Top of page</header>
    <nav>Navigation</nav>
    <main>Main content</main>
    <section>Section</section>
    <article>Independent content</article>
    <footer>Bottom of page</footer>

Benefits:
- Accessibility
- SEO
- Cleaner structure

---

## Forms

    <form>
      <input type="text">
      <button type="submit">Submit</button>
    </form>

Common input types:
    <input type="text">
    <input type="password">
    <input type="email">
    <input type="checkbox">
    <input type="radio">
    <input type="submit">

Common attributes:
- `name`
- `value`
- `placeholder`
- `required`

---

## Tables

    <table>
      <tr>
        <th>Header</th>
        <th>Header</th>
      </tr>
      <tr>
        <td>Data</td>
        <td>Data</td>
      </tr>
    </table>

---

## Comments

    <!-- This is a comment -->

---

## Best Practices
- Use semantic elements over `<div>` when possible
- Always include `alt` on images
- Keep structure clean and meaningful
- HTML = structure, not styling

---

## Mental Model
HTML is a **content outline**:
- Headings define hierarchy
- Elements describe meaning
- Browsers + CSS decide appearance


# CSS
---

## CSS Purpose
- Controls **appearance**, not structure
- Handles:
  - Layout
  - Colors
  - Fonts
  - Spacing
  - Responsiveness
- HTML = what it is  
- CSS = how it looks

---

## CSS Rule Syntax

    selector {
      property: value;
    }

Example:

    p {
      color: blue;
      font-size: 16px;
    }

---

## Selectors

### Element
    p { }

Targets all `<p>` elements.

---

### Class
    .card { }

Reusable styles.

HTML usage:
    <div class="card"></div>

---

### ID
    #header { }

Unique element only.

HTML usage:
    <div id="header"></div>

Rule:
- Only one ID per page

---

### Descendant
    div p { }

Targets `<p>` inside `<div>`.

---

### Multiple
    h1, h2, h3 { }

Applies to all listed selectors.

---

## Box Model (CRITICAL)

Every element consists of:
- Content
- Padding
- Border
- Margin

    box {
      margin: 10px;
      padding: 20px;
      border: 1px solid black;
    }

Key rule:
- Padding increases internal size
- Margin creates external spacing

---

## Display Types

### block
    display: block;

- Full width
- New line

---

### inline
    display: inline;

- Flows with text
- Cannot size width/height

---

### inline-block
    display: inline-block;

- Inline placement
- Can size

---

### none
    display: none;

- Element removed from layout

---

## Positioning

### static (default)
    position: static;

---

### relative
    position: relative;
    top: 10px;
    left: 10px;

Moves relative to itself.

---

### absolute
    position: absolute;
    top: 0;
    left: 0;

Positions relative to nearest positioned ancestor.

---

### fixed
    position: fixed;
    bottom: 0;

Stays fixed to viewport.

---

### sticky
    position: sticky;
    top: 0;

Scrolls until threshold is met.

---

## Flexbox (1D Layout)

Enable flex:
    display: flex;

Main axis (row by default):
- justify-content

Cross axis:
- align-items

Example:
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

Common values:
- center
- space-between
- space-around
- flex-start
- flex-end

---

## Grid (2D Layout)

Enable grid:
    display: grid;

Columns:
    grid-template-columns: 1fr 1fr;

Rows:
    grid-template-rows: auto auto;

Gap:
    gap: 1rem;

Used for full-page layouts.

---

## Colors

Named:
    color: red;

Hex:
    color: #ff0000;

RGB:
    color: rgb(255, 0, 0);

RGBA:
    color: rgba(255, 0, 0, 0.5);

---

## Fonts

    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;

Best practice:
- Always include fallback fonts

---

## Text Styling

    text-align: center;
    line-height: 1.5;
    text-decoration: none;
    text-transform: uppercase;

---

## Units

Absolute:
- px

Relative (preferred):
- %
- em
- rem
- vh
- vw

Rule:
- Use `rem` for scalable, accessible layouts

---

## CSS Cascade (Priority Order)

1. Inline styles
2. ID selectors
3. Class selectors
4. Element selectors
5. Source order (last rule wins)

---

## Responsive Design

Media Query:
    @media (max-width: 768px) {
      body {
        font-size: 14px;
      }
    }

Used to:
- Resize text
- Change layouts
- Hide/show elements

---

## Linking CSS

External (best):
    <link rel="stylesheet" href="style.css">

Internal:
    <style>
      body { margin: 0; }
    </style>

Inline (avoid):
    <p style="color:red;">Text</p>

---

## Accessibility Essentials
- Sufficient color contrast
- Readable font sizes
- Logical layout
- Avoid relying on color alone

---

## Mental Model
HTML:
- Structure
- Meaning

CSS:
- Style
- Layout
- Responsiveness

They are **separate responsibilities** working together.


# React Part 1: Routing

(notes)

# React Part 2: Reactivity

(notes)

```jsx
(example code)
```
