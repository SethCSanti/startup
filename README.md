# LoadMap

[My Notes](notes.md)

LoadMap is a web application designed to help students visualize and manage their academic workload. Instead of relying on simple to-do lists, LoadMap shows how heavy or light a student’s schedule is across daily, weekly, and monthly views by weighting assignments based on due dates and importance. This allows students to plan ahead, avoid burnout, and make informed decisions about their time.

> [!NOTE]
> This README.md file documents the progress of the application across multiple deliverables. Each section corresponds to a specific Canvas submission and includes a checklist of rubric items along with descriptions of completed work.

---

## 🚀 Specification Deliverable

For this deliverable I completed the following items.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how I will use each technology
- [x] One or more rough sketches of the application

---

### Elevator pitch

College students often know what assignments they have due, but not how heavy their overall workload really is. LoadMap helps students visualize their academic load using daily, weekly, and monthly planning views. By weighting assignments based on due dates and importance, LoadMap highlights busy days and stressful weeks, allowing students to plan ahead, distribute work more evenly, and reduce last-minute stress.

---

### Design

![Design image](placeholder.png)

The application uses a calendar-based layout with three primary views: daily, weekly, and monthly. The weekly view is the main planning interface, displaying assignment density and total workload per day. The monthly view provides a high-level overview to identify heavy weeks in advance, while the daily view focuses on detailed task planning.

Assignments are visually represented using color intensity and bars to indicate workload weight. Users can add, edit, or delete assignments, and the visual workload updates immediately to reflect changes.

---

### Key features

- Daily, weekly, and monthly planning views
- Visual workload indicators based on assignment weight
- Assignment creation, editing, and deletion
- Forecasting of heavy workload days and weeks
- User accounts with saved personal data

---

### Technologies

I am going to use the required technologies in the following ways.

- **HTML**  
  Used to structure the application layout, including navigation, calendar views, forms, and modals.

- **CSS**  
  Used for responsive design, visual hierarchy, and color-coded workload indicators.

- **React**  
  Used to create reusable components such as calendar views, assignment cards, and input forms. React state and hooks will manage assignment data and view switching.

- **Service**  
  A Node.js and Express backend will handle API requests for creating, updating, and retrieving assignments and workload data.

- **DB/Login**  
  MongoDB will store user credentials and assignment data. Authentication will ensure each user only accesses their own data.

- **WebSocket**  
  WebSockets will provide real-time updates so that assignment changes instantly update workload visualizations.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
