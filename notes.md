# CS 260 Notes

[LoadMap](README.md)

# Code for Deployment:
./deployService.sh -k ~/260_key_pair.pem -h loadmap.click -s startup

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

## What React Is
React is a JavaScript library for building user interfaces, especially single-page applications (SPAs). It focuses on creating reusable UI components and efficiently updating the DOM when data changes.

## Core Concepts
- **Component-Based Architecture**: UIs are built from small, reusable components.
- **Declarative**: You describe *what* the UI should look like, and React handles *how* it updates.
- **Unidirectional Data Flow**: Data flows from parent components down to child components via props.

## JSX
- JSX is a syntax extension that looks like HTML but compiles to JavaScript.
- You can embed JavaScript expressions using `{}`.
- JSX must return a single parent element.
- Attributes use camelCase (e.g., `className`, `onClick`).

## Components
### Functional Components
- The most common type of component.
- Written as JavaScript functions.
- Can use hooks for state and lifecycle features.

### Class Components (Legacy)
- Use ES6 classes.
- Have lifecycle methods like `componentDidMount`.
- Less common in modern React.

## Props
- Short for “properties.”
- Used to pass data from parent to child components.
- Read-only (cannot be modified by the child).
- Enable component reusability.

## State
- Represents data that can change over time.
- Managed inside a component.
- When state changes, React re-renders the component.
- State updates are asynchronous.

## Hooks
Hooks allow functional components to use React features.
- **useState**: Adds local state to a component.
- **useEffect**: Handles side effects (data fetching, subscriptions, timers).
- **useContext**: Accesses context without prop drilling.
- **useRef**: Stores mutable values that don’t cause re-renders.
- **useMemo / useCallback**: Performance optimizations.

## useEffect Basics
- Runs after render.
- Can depend on values using a dependency array.
- Can return a cleanup function.
- Common use cases: API calls, event listeners, subscriptions.

## Virtual DOM
- React keeps a lightweight copy of the real DOM.
- When state changes, React compares the new Virtual DOM with the old one (diffing).
- Only the necessary changes are applied to the real DOM (reconciliation).

## Rendering and Reconciliation
- React batches updates for performance.
- Keys help React identify which items changed in lists.
- Incorrect keys can cause rendering bugs or performance issues.

## Conditional Rendering
- Use `if` statements, ternary operators, or logical `&&`.
- Allows UI to change based on state or props.

## Lists and Keys
- Lists are rendered using `map()`.
- Each list item must have a unique `key`.
- Keys should be stable and predictable.

## Events
- Event handlers use camelCase (e.g., `onClick`).
- Functions are passed, not invoked.
- Synthetic events normalize behavior across browsers.

## Forms
- Controlled components store input values in state.
- Inputs update state via `onChange`.
- Enables validation and dynamic behavior.

## Context API
- Used to share data globally (theme, auth, settings).
- Avoids deeply nested prop passing.
- Best for data that many components need.

## Lifting State Up
- Move shared state to the closest common ancestor.
- Ensures consistent data between components.

## Component Composition
- Components can contain other components as children.
- Encourages reusable and flexible UI patterns.

## React Router
- Used for client-side routing.
- Enables navigation without full page reloads.
- Uses routes, links, and parameters.

## Performance Optimization
- Avoid unnecessary re-renders.
- Use memoization hooks when needed.
- Split code with lazy loading and suspense.

## Best Practices
- Keep components small and focused.
- Use descriptive component and prop names.
- Separate logic and presentation when possible.
- Prefer functional components and hooks.
- Avoid mutating state directly.

## React Ecosystem
- Works well with libraries like Redux, Zustand, and React Query.
- Often paired with frameworks like Next.js for SSR and routing.
- Strong community and large ecosystem of tools.

## Common Pitfalls
- Forgetting dependency arrays in `useEffect`.
- Mutating state instead of creating new objects.
- Overusing global state.
- Using array index as a key when list order can change.

## Why React Is Popular
- Efficient rendering.
- Strong developer tooling.
- Massive ecosystem.
- Scales well for large applications.
- Backed by Meta and widely adopted in industry


# React Part 2: Reactivity

## Reactivity
- Reactivity = automatic UI updates when state changes.
- UI is a function of state.
- When state updates, React rerenders affected components.
- Data flows downward via props (parent → child).

## useState
- Syntax:

    const [color, updateColor] = React.useState('#737AB0');

- `color` = current state value.
- `updateColor(newValue)` = schedules state update.
- State is stored internally by React, not directly in the component.
- Calling the setter triggers a rerender.

## Props
- Passed from parent to child.
- Read-only inside child components.
- Used to pass both data and setter functions.

## Example: Color Picker Reactivity

App component:
    function App() {
      const [color, updateColor] = React.useState('#737AB0');

      return (
        <div>
          <h1>Pick a color</h1>
          <ColorDisplay color={color} />
          <ColorPicker color={color} updateColor={updateColor} />
        </div>
      );
    }

ColorDisplay:
    function ColorDisplay({ color }) {
      return (
        <div>
          Your color: <span style={{ color: color }}>{color}</span>
        </div>
      );
    }

ColorPicker (controlled input):
    function ColorPicker({ color, updateColor }) {
      function onChange(e) {
        updateColor(e.target.value);
      }

      return (
        <div>
          <span>Pick a color: </span>
          <input type='color' onChange={onChange} value={color} />
        </div>
      );
    }

## Flow of Reactivity
1. App holds state.
2. State passed to children as props.
3. User changes input.
4. Setter function runs.
5. React updates internal state.
6. React rerenders components that depend on that state.
7. UI reflects new state.

## Conceptual Internal Model (Simplified)

    let color;
    let colorNext;

    setInterval(() => {
      if (colorNext && color !== colorNext) {
        color = colorNext;
        root.render(ColorPicker());
      }
    }, 50);

    React.useState = (defaultValue) => {
      color = color || defaultValue;
      const updateColor = (newColor) => (colorNext = newColor);
      return [color, updateColor];
    };

- React stores state externally.
- Setter updates next value.
- React detects change.
- Rerender occurs only when state changes.

## Assignment: React P2 – Reactivity
- Clone simon-react project.
- Implement startup reactivity.
- Deploy application.
- Backend may be mocked.
- Startup should function fully and reactively.


# Backend Web Service

## 1. Client–Server Architecture

Client:
- Sends HTTP requests
- Receives HTTP responses
- Often a browser or frontend app

Server:
- Listens on a port
- Processes requests
- Returns responses
- May serve both APIs and static files

HTTP is:
- Stateless (each request independent)
- Request–response based

---

## 2. REST API Design

REST principles:
- Resources are represented by URLs
- HTTP methods define actions

Common Methods:
- GET → retrieve data
- POST → create data
- PUT → update data
- DELETE → remove data

Good API design:
- Use clear route structure
- Use proper HTTP status codes
- Return JSON for structured data

Example route pattern:

    /api/resource
    /api/resource/:id

---

## 3. Express Framework (Node.js)

Express is:
- A minimal web framework for Node.js
- Used to define routes and middleware

Basic structure:

    const express = require('express');
    const app = express();

Routes:

    app.get('/path', handler);
    app.post('/path', handler);

Server start:

    app.listen(port);

---

## 4. Middleware

Middleware:
- Functions that run during request processing
- Can modify request or response
- Can terminate request or pass control

Signature:

    (req, res, next)

If next() is called:
- Control moves to next middleware

If response is sent:
- Request lifecycle ends

Common middleware uses:
- Authentication
- Logging
- JSON parsing
- Error handling

---

## 5. JSON Parsing

Servers often receive JSON in request bodies.

Enable parsing:

    app.use(express.json());

Effect:
- Automatically parses JSON
- Makes data available on req.body

---

## 6. Cookies & Sessions

Cookies:
- Small pieces of data stored in browser
- Sent automatically with each request

Used for:
- Session tracking
- Authentication tokens

Secure cookie options:
- httpOnly → not accessible via JavaScript
- secure → HTTPS only
- sameSite → restricts cross-site sending

Session pattern:
1. Server generates token
2. Sends token in cookie
3. Client includes cookie in future requests
4. Server validates token

---

## 7. Authentication Concepts

Authentication = verifying identity.

Common approach:
- Store hashed passwords
- Never store plaintext passwords

Password hashing:

    bcrypt.hash(password, saltRounds)

Password verification:

    bcrypt.compare(input, storedHash)

Token-based authentication:
- Generate random token (e.g., UUID)
- Associate token with user
- Validate token on protected routes

---

## 8. Authorization Middleware

Authorization:
- Determines whether user can access a resource

Pattern:

    const verifyAuth = (req, res, next) => {
      if (validUser) {
        next();
      } else {
        res.status(401).send();
      }
    };

Attach to routes:

    app.get('/protected', verifyAuth, handler);

If unauthorized:
- Route handler never runs

---

## 9. In-Memory vs Persistent Storage

In-memory storage:
- Uses variables/arrays
- Fast
- Data lost on server restart

Persistent storage:
- Database (SQL/NoSQL)
- Survives restarts
- Scales better

Tradeoffs:
- Memory → simple, temporary
- Database → durable, scalable

---

## 10. Static File Serving

Servers can serve:
- HTML
- CSS
- JavaScript
- Images

Example:

    app.use(express.static('public'));

Behavior:
- Looks for requested file in directory
- Returns file if found

---

## 11. Development vs Production

Development:
- Separate frontend and backend servers
- Often different ports
- Use proxy to avoid CORS issues

Example proxy concept:

    '/api' → http://localhost:3000

Production:
- Single server serves:
  - API endpoints
  - Static frontend files

---

## 12. Fetch API (Frontend)

Used to make HTTP requests from browser:

    fetch('/api/resource', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

Returns:
- Promise
- Must call .json() to parse body

Asynchronous model:
- Non-blocking
- Uses Promises

---

## 13. HTTP Status Codes (Core Set)

- 200 → OK
- 201 → Created
- 204 → No Content
- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 409 → Conflict
- 500 → Server Error

Proper status codes:
- Improve API clarity
- Help debugging
- Follow REST standards

---

## 14. Error Handling

Centralized error middleware:

    app.use((err, req, res, next) => {
      res.status(500).send({ message: err.message });
    });

Purpose:
- Catch unhandled errors
- Prevent server crashes
- Return structured error responses

---

## 15. Key Architectural Patterns

1. Separation of concerns
   - Routing
   - Middleware
   - Business logic

2. Stateless HTTP + Stateful sessions via cookies

3. Layered request flow:
   Client → Middleware → Route Handler → Response

4. Secure authentication:
   - Hash passwords
   - Use tokens
   - Protect routes

---

## Core Concepts to Understand

- HTTP request/response lifecycle
- RESTful routing
- Middleware chaining
- Cookie-based session auth
- Password hashing
- JSON parsing
- Static file serving
- Dev vs production architecture
- Asynchronous JavaScript (Promises)

---

# Data Services

## Overview
- Data services allow applications to **store, retrieve, and manage data through APIs and databases**.
- Typical web architecture:
  - **Frontend:** Browser (HTML, CSS, JavaScript, React)
  - **Backend:** Node.js web services
  - **Database:** MongoDB Atlas
  - **Infrastructure:** AWS EC2 server, Route53 DNS, security groups
- Flow:  
  Users → Web browser → HTTPS → Web server → Node.js API → Database → Response returned to client. :contentReference[oaicite:0]{index=0}

---

## Example API Service (High Scores)

## Endpoint
```
GET /api/scores
```

## Example Function
```
function getHighScores() {
  const query = {score: {$gt:0, $lt:900}};
  const options = {limit: 10};
  const cursor = scores.find(query, options);
  return cursor.toArray();
}
```

- Filters scores between **0 and 900**
- Limits results to **10 records**
- Returns **JSON documents** from MongoDB.

Example result:

```
{
 "_id": "...",
 "name": "Professor Jensen",
 "score": 337,
 "date": "2/24/2025",
 "ip": "128.187.112.3"
}
```

---

## Database Types

| Database | Specialty |
|---|---|
| MySQL | Relational queries |
| Redis | In-memory cache |
| ElasticSearch | Text search |
| MongoDB | JSON documents |
| DynamoDB | Key-value storage |
| Neo4J | Graph data |
| InfluxDB | Time-series data |

---

## MongoDB

## Characteristics
- **NoSQL document database**
- Stores data as **JSON-like documents**
- **Schema flexible** (documents can have different fields)

Example:

```
{
 _id: '63b9da7f79',
 name: 'Mystery player',
 score: 0,
 date: '1/7/2023'
}
```

- Fields can be **added or omitted**
- Supports **arrays and nested objects**

---

## MongoDB Atlas

- Cloud-hosted MongoDB database
- Features:
  - Automatic scaling
  - Managed infrastructure
  - Security and backups
  - Easy deployment

---

## Secure Configuration

Database credentials stored in:

```
dbConfig.json
```

Example:

```
{
 "hostname": "...mongodb.net",
 "userName": "...",
 "password": "..."
}
```

Important:
- **Do NOT commit credentials to GitHub**

---

## Installing MongoDB in Node

```
mkdir testMongo
cd testMongo
npm init -y
npm install mongodb
```

Installs the **MongoDB Node.js driver**.

---

## Connecting to MongoDB

```
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('rental');
const collection = db.collection('house');
```

Steps:
1. Import MongoDB client
2. Load credentials
3. Create connection
4. Select database
5. Select collection

---

## Testing the Connection

```
await db.command({ ping: 1 });
```

- Confirms the database is reachable.

---

## CRUD Operations

## Insert
```
await collection.insertOne(house);
```

## Query
```
collection.find();
collection.find({beds: {$gte: 2}});
collection.find({status:'open', beds:{$lt:3}});
collection.find({$or:[{beds:{$lt:3}}, {price:{$lt:1000}}]});
collection.find({summary: /(modern|beach)/i});
```

## Query Options
```
const options = {
 sort: { score: -1 },
 limit: 10
};
```

## Update
```
await collection.updateMany(query, { $set: { beds: 2 } });
```

## Delete
```
await collection.deleteMany(query);
await collection.deleteOne({_id: id});
```

---