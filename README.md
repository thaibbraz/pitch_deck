# Jobbyo Pitch Deck

A React-based presentation app showcasing the Jobbyo pitch deck with slide navigation.

## Features

- **Slide Navigation**: Navigate through 9 different slides using arrow buttons, keyboard, or slide indicators
- **Interactive UI**: Click on slide indicators to jump directly to any slide
- **Responsive Design**: Works on both desktop and mobile devices
- **Tailwind CSS**: Styled with the same Tailwind configuration as the original Jobbyo website

## Slides

1. **The Problem** - Job hunting challenges and pain points
2. **Market Opportunity** - TAM, SAM, SOM market analysis
3. **Our Team** - Core team members and advisors
4. **Business Model** - Revenue streams and monetization
5. **Go-to-Market** - Marketing and growth strategy
6. **Evolution Timeline** - History of HR tech and job hunting
7. **How it Works** - Step-by-step process
8. **Platform Features** - Key product features
9. **Pricing** - Plans and feature comparison

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to this directory:
   ```bash
   cd jobbyo-pitch-presentation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Navigation Controls

- **Arrow Keys**: Use left/right arrow keys to navigate
- **Mouse/Touch**: Click the arrow buttons on the sides
- **Slide Indicators**: Click the dots at the top to jump to specific slides
- **Footer Navigation**: Use Previous/Next buttons in the footer

## Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - React application setup

## Project Structure

```
src/
├── components/
│   └── PitchDeck.jsx    # Main pitch deck component
├── assets/              # Images and media files
├── App.js              # Main app component
├── index.css           # Global styles with Tailwind
└── index.js            # React entry point
```

## Customization

The pitch deck is fully customizable. Each slide is a separate React component that can be modified independently. The slide navigation system automatically adjusts to the number of slides.

To add a new slide:
1. Create a new slide component
2. Add it to the `slides` array in `PitchDeck.jsx`
3. The navigation will automatically include the new slide

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)