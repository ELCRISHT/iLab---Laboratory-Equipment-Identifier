<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# iLab - Laboratory Equipment Identifier

A modern web application for identifying and learning about laboratory equipment through image recognition. Built with React, TypeScript, and Vite for a fast and responsive user experience.

## Features

- 📸 **Equipment Identification**: Upload images or use your camera to identify lab equipment
- 📚 **Equipment Library**: Browse a comprehensive database of laboratory equipment
- 🛡️ **Safety Protocols**: Access important safety information and guidelines
- 📖 **Documentation**: Complete user guides and technical documentation
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 💾 **History Tracking**: Keep track of previously identified equipment

## Prerequisites

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ELCRISHT/iLab---Laboratory-Equipment-Identifier.git
   cd iLab---Laboratory-Equipment-Identifier
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

## Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
iLab---Laboratory-Equipment-Identifier/
├── components/           # React components
│   ├── CameraOverlay.tsx    # Camera interface component
│   ├── Documentation.tsx    # Documentation viewer
│   ├── Header.tsx          # Application header
│   ├── Library.tsx         # Equipment library
│   ├── Privacy.tsx         # Privacy policy
│   ├── ResultCard.tsx      # Result display component
│   └── SafetyProtocols.tsx # Safety information
├── services/            # Service layer
│   └── geminiService.ts    # Image recognition service
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── types.ts             # TypeScript type definitions
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

## Usage

1. **Identify Equipment**
   - Click on the camera icon or upload button
   - Take a photo or select an image from your device
   - Wait for the identification process to complete
   - View detailed information about the equipment

2. **Browse Library**
   - Navigate to the Library section
   - Browse through the equipment catalog
   - Click on any item for detailed information

3. **Safety Protocols**
   - Access the Safety section from the navigation
   - Review safety guidelines and protocols
   - Learn about proper equipment handling

4. **View History**
   - Your identification history is automatically saved
   - Access previous identifications from your local storage
   - Clear history as needed

## Technologies Used

- **React 19** - UI framework
- **TypeScript 5** - Type-safe JavaScript
- **Vite 6** - Fast build tool and dev server
- **CSS3** - Modern styling with dark mode support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.
