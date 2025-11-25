# Sweets by Servis

A demo website for a homemade bakery stand showcasing products, events, and customer registration.

## Features

- **Home Page** - Hero section with welcome message, best sellers showcase, and upcoming events preview
- **About Page** - Company information, mission, promise, and contact CTA
- **Products Page** - Product categories including cookies, waffles, macaroons with filtering
- **Events Page** - Interactive calendar with event carousel for browsing upcoming events
- **Registration Page** - Email registration form with name and phone number for monthly newsletters and promotions

## Tech Stack

- React 18
- React Router DOM v6
- React Day Picker v8 (for calendar functionality)
- Vite 5
- CSS3

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Shared components (Header, Footer)
├── pages/          # Page components (Home, About, Products, Events, Registration)
├── App.jsx         # Main app with routing
├── main.jsx        # React entry point
└── index.css       # Global styles
```

## Design

The website features a pink and sage green color scheme with:
- Primary color: #FF6B9D (pink)
- Secondary color: #A8D5BA (sage green)
- Background gradients with soft pink tones
- Rounded corners and modern card layouts
- Responsive design for mobile and desktop
