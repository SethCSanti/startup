# LoadMap

[My Notes](notes.md)

LoadMap is a web application designed to help students visualize and manage their academic workload. Instead of relying on simple to-do lists or excel spreadsheets, LoadMap shows how heavy or light a student’s schedule is across daily, weekly, and monthly views by weighting assignments based on due dates, importance, and estimated worklaod. Students will be able to plan out not just academic deadlines, but personal and work goals and deadlines as well. Calendar view will also allow students to be able to properly organize themselves. This allows students to plan ahead, avoid burnout, and make informed decisions about their time.

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

![Design image](images/app_sketch.png)

The application uses a calendar-based layout with three primary views: daily, weekly, and monthly. The weekly view is the main planning interface, displaying assignment density and total workload per day. The monthly view provides a high-level overview to identify heavy weeks in advance, while the daily view focuses on detailed task planning. Students will be able to swap between School, Work, and Personal planning and see their individual folders as well.

Assignments are visually represented using color intensity and bars to indicate workload weight. Users can add, edit, or delete assignments, and the visual workload updates immediately to reflect changes.

---

### Key features

- Daily, weekly, and monthly planning views
- Visual workload indicators based on assignment weight
- Assignment creation, editing, and deletion
- Forecasting of heavy workload days and weeks
- User accounts with saved personal data
- Personal, Work, and Academic planning
- Calendar view to see overview of assignments

---

### Technologies

I am going to use the required technologies in the following ways:

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

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://loadmap.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I made 5 different pages: Home, Tasks, Calendar, Notes, and About
- [x] **Proper HTML element usage** - I spent a lot of time working on the navigation elements and placeholder elements.
- [x] **Links** - I put a link to my GitHub repo and links between pages.
- [x] **Text** - Most of the pages have some sort of text.
- [x] **3rd party API placeholder** - I put this placeholder on the calendar page to use Google Calendar.
- [x] **Images** - I made a gallery on the home page to put images.
- [x] **Login placeholder** - I put a login placeholder at the top of the home page.
- [x] **DB data placeholder** - I put this in a dashboard at the top of the home page.
- [x] **WebSocket placeholder** - I put this in a dashboard at the top of the home page.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I made a header, footer, and overall style guide with specific colors.
- [x] **Navigation elements** - I made the navigation links apart of the styled header. (Bootstrap)
- [x] **Responsive to window resizing** - I made sure the pages resize with the window. (Mainly with Bootstrap and the flex elements.)
- [x] **Application elements** - I did a lot of overall styling of the various elements, especially the placeholders, to match the branding and colors that I want.
- [x] **Application text content** - I mainly styled the organization of it and allignment.
- [x] **Application images** - I styled the gallery on the home page.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I just followed the commands to install and use Vite.
- [x] **Components** - Moving the files and folders around along with the html and css code was pretty straightforward but it took a lot to figure out the difference between the home page and app.jsx.
- [x] **Router** - I had to rework the given router code a good bit once moving my files and folders around.

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
