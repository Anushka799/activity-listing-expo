Activity Listing App

An interactive learning activities dashboard built using Expo + React Native Web, inspired by modern LMS UI layouts. It allows users to view, filter, and interact with learning activities like online classes, quizzes, assignments, and discussions — with light/dark theme support.

Features

Beautiful and responsive UI for Web & Android (Expo)

Category-based activity filtering

Interactive action buttons per activity (Join / Start / Review / Continue)

Light/Dark mode toggle 

Mock data-driven structure (ready for real API integration)

Modular + scalable architecture

Tech Stack
Technology	Purpose
Expo (React Native)	Single codebase for Web + Android
React Native Web	Render React Native UI on the browser
Context API	Centralized theme management
FlatList & RN Components	Efficient UI rendering across platforms
Tech Choices & Tradeoffs
Choice	Reason	Tradeoff
Expo	Fast development & multi-platform builds	Slightly heavier bundle sizes
React Native Web	UI reuse across Android + Web	Some web-specific styling limitations
Context API for theme	Simplicity — no extra deps	Not ideal for very large-scale state
Mock data	Quick prototyping	No real backend functionality yet
Pure JS styling	Works across platforms	No CSS/HTML flexibility on web
Project Structure
activity-listing-expo/
 ├── app/
 │    ├── index.js
 │    ├── screens/
 │    │     └── ActivityListing.js
 │    ├── components/
 │    │     ├── ActivityCard.js
 │    │     ├── Filters.js
 │    │     └── Header.js
 ├── data/
 │    └── activities.js
 ├── theme.js
 ├── package.json

▶️ Running the App
1️⃣ Install dependencies
npm install

2️⃣ Run on Web 🌐
npx expo start --web

3️⃣ Run on Android 📱

(Requires Expo Go app installed on phone)

npx expo start


Then scan the QR code from your Android device.
