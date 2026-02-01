# ✨ JavaScript 30: Logic & Showcase
> A collection of 30 mini-sites focused on mastering Vanilla JavaScript, DOM manipulation, Web APIs, modern CSS and browser-native features without external libraries or frameworks. **This repo serves as my technical log for the JavaScript30 Challenge by Wes Bos.**

**Live Demo**: 

![Preview](/images/display1.png)

### ✨ Technical Mastery/Projects Breakdown
Across these 30 projects, I practiced fundamental pillars of modern web development:

| # | Project | Topic | Category |
|---|---|---|---|
| 01 | JavaScript Drum Kit | DOM Events, Keyboard Input | Web APIs & Multimedia |
| 02 | JS and CSS Clock | CSS Transforms, setInterval | CSS & Styling |
| 03 | CSS Variables | Real-time CSS Variable Updates | CSS & Styling |
| 04 | Array Cardio Day 1 | Array Methods (filter, map, reduce) | Data & Logic |
| 05 | Flex Panel Gallery | CSS Flexbox, Transitions, Click Events | Advanced DOM & Events |
| 06 | Type Ahead | Fetch, Regex, Custom Search UI | Data & Logic |
| 07 | Array Cardio Day 2 | Array Methods (find, every, some, flat) | Data & Logic |
| 08 | Fun with HTML5 Canvas | 2D Drawing, Mouse Tracking | Web APIs & Multimedia |
| 09 | Dev Tools Domination | Console API, Object Inspection | Core JS Concepts |
| 10 | Hold Shift and Check Checkboxes | Event Delegation, Shift Logic | Advanced DOM & Events |
| 11 | Custom Video Player | HTML5 Video, Playback Controls | Web APIs & Multimedia |
| 12 | Key Sequence Detection | Keyboard Events, Array Buffer | Advanced DOM & Events |
| 13 | Slide in on Scroll | Intersection Observer, CSS Transitions | Advanced DOM & Events |
| 14 | JavaScript References VS Copying | Pass-by-Reference, Object Cloning | Core JS Concepts |
| 15 | LocalStorage | Client-side Storage, State Persistence | Data & Logic |
| 16 | Mouse Move Shadow | Mouse Events, CSS Text Shadow | CSS & Styling |
| 17 | Sort Without Articles | String Manipulation, Array Sorting | Data & Logic |
| 18 | Adding Up Times with Reduce | Array Reduce, Time Parsing | Data & Logic |
| 19 | Webcam Fun | getUserMedia, Canvas Filters | Web APIs & Multimedia |
| 20 | Speech Detection | SpeechRecognition API | Web APIs & Multimedia |
| 21 | Geolocation | Geolocation API, Compass Heading | Web APIs & Multimedia |
| 22 | Follow Along Link Highlighter | Mouse Events, getBoundingClientRect | Advanced DOM & Events |
| 23 | Speech Synthesis | SpeechSynthesis API, Voice Control | Web APIs & Multimedia |
| 24 | Sticky Nav | Intersection Observer, Sticky Positioning | Advanced DOM & Events |
| 25 | Event Capture, Propagation, Bubbling and Once | Event Phases, Listener Options | Advanced DOM & Events |
| 26 | Stripe Follow Along Nav | Mouse Events, Dynamic Positioning | Advanced DOM & Events |
| 27 | Click and Drag | Mouse Drag Events, Scroll Manipulation | Advanced DOM & Events |
| 28 | Video Speed Controller | HTML5 Video, Range Input, playbackRate | Web APIs & Multimedia |
| 29 | Countdown Timer | setInterval, Time Calculation | Timers & Countdowns |
| 30 | Whack A Mole | Game Logic, Timers, Random Placement | Games |

### ✨ Dashboard
To host these projects, I built a Next.js Dashboard utilizing a centralized, data-driven architecture. Instead of managing 30 disconnected files, this is design as a scalable system where a   `projects.ts` file acts as a mock database for all project metadata (project preview image, project name, description, tags), feeding into a component-based UI that uses TypeScript for full type safety. This design ensures that each project remains a self-contained environment within the `public/` directory while being dynamically rendered as interactive cards. The interface is built using shadcn/ui components to provide a polished user experience.

[Visit the Live Dashboard] (Insert link)

