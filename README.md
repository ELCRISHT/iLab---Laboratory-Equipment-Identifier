# iLab - Laboratory Equipment Identifier
A web application for identifying and learning about laboratory equipment through camera capture, providing detailed information about equipment usage, safety protocols, and best practices.
## Features

- 📷 Real-time camera capture for equipment identification
- 📚 Comprehensive equipment library
- 🔬 Detailed equipment information and specifications
- ⚠️ Safety protocols and guidelines
- 📖 Interactive documentation
- 🔒 Privacy-focused design

## Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- Modern web browser with camera support (Chrome, Firefox, Safari, Edge)

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

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
iLab---Laboratory-Equipment-Identifier/
├── components/           # React components
│   ├── CameraOverlay.tsx
│   ├── Documentation.tsx
│   ├── Header.tsx
│   ├── Library.tsx
│   ├── Privacy.tsx
│   ├── ResultCard.tsx
│   └── SafetyProtocols.tsx
├── services/            # Service layer
│   └── geminiService.ts
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── types.ts             # TypeScript type definitions
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Usage

1. **Launch the application** in your browser
2. **Grant camera permissions** when prompted
3. **Navigate through the tabs**:
   - **Camera**: Capture images of laboratory equipment
   - **Library**: Browse equipment database
   - **Safety**: Review safety protocols
   - **Documentation**: Access user guides
   - **Privacy**: Review privacy policy

4. **Identify Equipment**:
   - Position the equipment in camera view
   - Click the capture button
   - View identification results and detailed information

## Technology Stack

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript 5.0.0
- **Build Tool**: Vite 6.0.0
- **Styling**: Tailwind CSS (inline styles)
- **API Integration**: Google Generative AI

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Camera Not Working
- Ensure browser has camera permissions
- Check if another application is using the camera
- Try a different browser

### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Project Link: [https://github.com/ELCRISHT/iLab---Laboratory-Equipment-Identifier](https://github.com/ELCRISHT/iLab---Laboratory-Equipment-Identifier)
