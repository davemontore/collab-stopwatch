# Collab Stopwatch - Cyberpunk Timer

A stunning countdown timer with a post-apocalyptic cyberpunk aesthetic inspired by Blade Runner. Perfect for virtual collaboration sessions, presentations, and screen sharing.

## Features

- ⏱️ **Countdown Timer**: Select time in 5-minute increments (5 to 60 minutes)
- 🎮 **Simple Controls**: Start, Stop, and Reset buttons
- 🌃 **Cyberpunk Design**: Flickering neon lights, scanlines, glitch effects, and worn textures
- 📺 **Screen Share Ready**: Full-screen optimized display perfect for presentations
- 🎨 **Blade Runner Aesthetic**: Earth tones meet dilapidated neon in a gritty, industrial design

## Design Features

The app features a rich cyberpunk aesthetic with:
- Flickering neon text (cyan, pink, purple)
- CRT monitor scanline effects
- Film grain and noise textures
- Glowing buttons with hover effects
- Glitch animations on the title
- Worn metal and concrete color palette
- Dramatic shadows and lighting
- Post-apocalyptic vignette effect

## Getting Started

### Prerequisites

You need Node.js installed on your computer. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository or download the files
2. Open a terminal/command prompt in the project folder
3. Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

This will start the app and display a local URL (usually `http://localhost:5173`). Open that URL in your browser.

### Building for Production

To create a production-ready version:

```bash
npm run build
```

The built files will be in the `dist` folder. You can open `dist/index.html` directly in a browser or host it on any web server.

## How to Use

1. **Select Duration**: Use the dropdown to choose your timer length (5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, or 60 minutes)
2. **Start**: Click the START button to begin the countdown
3. **Stop**: Click the STOP button to pause the timer
4. **Reset**: Click the RESET button to reset the timer to the selected duration
5. **Screen Share**: Share your browser window/tab in your video call to let others see the timer

## Tips for Screen Sharing

- Press F11 in your browser for fullscreen mode
- The timer display is large and easy to read from a distance
- The dramatic cyberpunk aesthetic makes it engaging for viewers
- The flickering effects are subtle enough not to be distracting

## Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and development server
- **CSS3**: Advanced animations and effects
- **Google Fonts**: Orbitron and Share Tech Mono fonts

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Project Structure

```
collab-stopwatch/
├── src/
│   ├── App.jsx          # Main timer component
│   ├── App.css          # Cyberpunk styling and animations
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Customization

Want to adjust the design? All styling is in `src/App.css`:
- Neon colors are defined as CSS variables at the top
- Animation timings can be adjusted in keyframe definitions
- Font sizes are responsive and adjust for mobile devices

## License

Feel free to use and modify this project for your needs.

## Credits

Design inspired by the visual aesthetics of Blade Runner and cyberpunk culture.
