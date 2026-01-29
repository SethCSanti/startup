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

## CSS FRAMEWORKS COMPARISON

### Bootstrap (Component-Based)
- **Best for**: Rapid prototyping, beginners, complex UIs
- **Pros**: Prebuilt components (modals, navbars, carousels), 12-column grid, extensive docs
- **Cons**: Larger file size (~150KB minified), "Bootstrap look", opinionated design
- **Usage (2023 stats)**: ~78% awareness, mature ecosystem[1][3]

    <!-- CDN Include -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Button Example -->
    <button class="btn btn-primary btn-lg">Bootstrap Button</button>

    <!-- Responsive Grid -->
    <div class="row">
      <div class="col-md-6 col-lg-4">Column 1</div>
      <div class="col-md-6 col-lg-4">Column 2</div>
      <div class="col-lg-4">Column 3 (desktop only)</div>
    </div>

### Tailwind CSS (Utility-First)
- **Best for**: Custom designs, modern projects, performance-focused
- **Pros**: Tiny production size (PurgeCSS), no "framework look", full design control
- **Cons**: Verbose HTML, steeper learning curve, requires build process
- **Usage (2023)**: ~50.5% usage, fastest growing[3][1]

    <!-- CDN Include (Development only) -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Button Example -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Tailwind Button
    </button>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4">Card 1</div>
      <div class="bg-gray-200 p-4">Card 2</div>
      <div class="bg-gray-200 p-4">Card 3</div>
    </div>

### Other Popular Frameworks
| Framework | Type | Strengths | 2023 Usage |
|-----------|------|-----------|------------|
| Bulma | Component | Clean, no JS | ~23% [1] |
| Foundation | Component | Enterprise | ~22% [1] |
| Materialize | Component | Material Design | ~16% [1] |

## FLEXBOX CHEAT SHEET

### Container Properties
| Property | Values | Purpose |
|----------|--------|---------|
| `display` | `flex` | Makes container flex |
| `flex-direction` | `row` `column` `row-reverse` `column-reverse` | Main axis direction |
| `flex-wrap` | `nowrap` `wrap` `wrap-reverse` | Handle overflow |
| `justify-content` | `flex-start` `center` `flex-end` `space-between` `space-around` `space-evenly` | Main axis alignment |
| `align-items` | `stretch` `flex-start` `center` `flex-end` `baseline` | Cross axis alignment |
| `align-content` | `stretch` `center` `space-between` etc. | Multiple lines alignment |
| `gap` | `10px` `2rem` etc. | Space between items |

### Item Properties
| Property | Purpose |
|----------|---------|
| `flex` | Shorthand: `flex-grow flex-shrink flex-basis` |
| `flex-grow` | How much item grows (0-1 typical) |
| `flex-shrink` | How much item shrinks (0-1 typical) |
| `flex-basis` | Initial size before growing/shrinking |
| `align-self` | Override container's `align-items` |
| `order` | Change visual order |

### Essential Flex Patterns

**Centered content (most common):**

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

**Navbar:**

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

**Evenly spaced buttons:**

    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

**Responsive card row:**

    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .card {
      flex: 1 1 300px;  /* grow, shrink, 300px basis */
    }

## CSS GRID CHEAT SHEET

### Basic Grid Setup

**Fixed columns:**

    .grid {
      display: grid;
      grid-template-columns: 200px 1fr 200px;  /* sidebar main sidebar */
      grid-template-rows: 60px 1fr 60px;       /* header main footer */
      gap: 1rem;
    }

**Responsive columns:**

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

**Named areas (advanced):**

    .dashboard {
      display: grid;
      grid-template-columns: 250px 1fr 250px;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: 
        "sidebar header header"
        "sidebar main aside"
        "sidebar footer footer";
      gap: 1rem;
    }
    .sidebar { grid-area: sidebar; }
    .header { grid-area: header; }
    .main { grid-area: main; }
    .aside { grid-area: aside; }
    .footer { grid-area: footer; }

### Item Placement

| Property | Purpose |
|----------|---------|
| `grid-column` | `1 / 3` = span columns 1-2 |
| `grid-row` | `1 / -1` = span all rows |
| `grid-area` | Named area or `row-start / col-start / row-end / col-end` |
| `justify-self` | Horizontal position in cell |
| `align-self` | Vertical position in cell |
| `place-self` | `justify-self` + `align-self` shorthand |

## RESPONSIVE DESIGN ESSENTIALS

### 1. Viewport Meta Tag (MANDATORY)

    <meta name="viewport" content="width=device-width, initial-scale=1">

### 2. Common Breakpoints
```
Mobile-first approach:
Base styles = mobile
Tablet+:    min-width: 768px
Desktop:    min-width: 1024px
Large:      min-width: 1440px
```

### 3. Mobile-First Media Queries

    /* Base = mobile */
    .sidebar { display: none; }

    /* Tablet and up */
    @media (min-width: 768px) {
      .sidebar { display: block; }
      .main { width: 70%; }
    }

    /* Desktop and up */
    @media (min-width: 1024px) {
      .main { width: 80%; }
    }

### 4. Responsive Typography

    h1 { font-size: clamp(1.5rem, 5vw, 3rem); }
    /* min, preferred, max */

### 5. Fluid Spacing Scale

    :root {
      --space-xs: clamp(0.25rem, 1vw, 0.5rem);
      --space-sm: clamp(0.5rem, 2vw, 1rem);
      --space-md: clamp(1rem, 4vw, 2rem);
      --space-lg: clamp(2rem, 6vw, 4rem);
    }

## FRAMEWORK RESPONSIVE PATTERNS

### Bootstrap Grid Classes
```
col-*     = 12 columns on all screens
col-sm-*  = ≥576px (phones landscape)
col-md-*  = ≥768px (tablets)
col-lg-*  = ≥992px (laptops)
col-xl-*  = ≥1200px (desktops)
col-xxl-* = ≥1400px (large desktops)
```

### Tailwind Responsive Prefixes
```
Base styles
sm:  ≥640px
md:  ≥768px  
lg:  ≥1024px
xl:  ≥1280px
2xl: ≥1536px
```

    <!-- Tailwind responsive example -->
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1">Left panel</div>
      <div class="flex-1">Right panel</div>
    </div>

## COMPLETE RESPONSIVE LAYOUT EXAMPLE

    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        * { box-sizing: border-box; margin: 0; }
        body { font-family: system-ui, sans-serif; }
        
        .app {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
        
        .header {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        
        .main {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 2rem;
        }
        
        .sidebar {
          order: 2;
          background: #f0f0f0;
          padding: 2rem;
        }
        
        .content {
          order: 1;
          flex: 1;
        }
        
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .footer {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        
        /* Tablet+ */
        @media (min-width: 768px) {
          .main {
            flex-direction: row;
            padding: 3rem;
          }
          .sidebar {
            order: 1;
            flex: 0 0 250px;
          }
          .content {
            flex: 1;
            margin-left: 2rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="app">
        <header class="header">
          <h1>My Responsive App</h1>
        </header>
        <main class="main">
          <aside class="sidebar">
            <h2>Sidebar</h2>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </ul>
          </aside>
          <section class="content">
            <h2>Main Content</h2>
            <div class="cards">
              <div class="card">
                <h3>Card 1</h3>
                <p>Content goes here...</p>
              </div>
              <div class="card">
                <h3>Card 2</h3>
                <p>More content...</p>
              </div>
              <div class="card">
                <h3>Card 3</h3>
                <p>Even more...</p>
              </div>
            </div>
          </section>
        </main>
        <footer class="footer">
          <p>&copy; 2026 Responsive App</p>
        </footer>
      </div>
    </body>
    </html>

## QUICK CHOICE GUIDE

```
Need it FAST?     → Bootstrap
Need it CUSTOM?   → Tailwind + custom CSS
Need it SIMPLE?   → Bulma or vanilla Flex/Grid
Team EXPERIENCE?  → Match what they already know
PERFORMANCE?      → Tailwind (post-purge)
```

**FLEX vs GRID**: Use flex for components, grid for page layout[1]


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
