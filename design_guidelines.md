# Design Guidelines: PLAIN TIME - Retro Pixelated Stopwatch

## Design Approach
**Retro Pixelated Aesthetic** - A minimalist, nostalgic gaming-inspired timer application with a strict adherence to retro visual language.

## Core Design Elements

### A. Color Palette
- **Background**: Pure blue (#0000FF) - full viewport coverage
- **Text & UI Elements**: Pure white (#FFFFFF) for all text and interactive elements
- **No gradients, shadows, or additional colors** - maintain strict two-color simplicity

### B. Typography
**Font Family**: 'Press Start 2P' (Google Fonts) - applied to all text elements
- **Title ("PLAIN TIME")**: 32px
- **Timer Display**: 48px
- **Buttons**: 20px
- **Fallback**: cursive

### C. Layout System
**Flexbox-based vertical centering**:
- Full viewport height (100vh) container
- Centered content both horizontally and vertically
- Vertical stacking: Title → Timer Display → Button Row
- Use consistent spacing between elements (e.g., 40-60px gaps)

### D. Component Specifications

**Title Section**:
- Text: "PLAIN TIME"
- Position: Top of centered content area
- Style: Large, bold, pixelated

**Timer Display**:
- Format: MM:SS.ss (switches to H:MM:SS.ss after 1 hour)
- Center-aligned, largest text on screen
- Monospaced appearance via Press Start 2P font

**Buttons**:
- Two text-based buttons in horizontal row
- Play/Pause Toggle: Dynamic text ("<start>" when paused, "<pause>" when running)
- Reset Button: Static text "reset", visually disabled state when timer is running
- Text-only appearance (no borders, backgrounds, or heavy styling)
- Simple hover states appropriate for retro aesthetic

### E. Interaction States
- **Disabled state** for reset button: Reduced opacity or color shift while timer is running
- **Button hover**: Subtle visual feedback maintaining pixelated aesthetic
- **No animations** - instant state changes for authentic retro feel

## Technical Constraints
- No frameworks or libraries beyond vanilla JavaScript
- Minimalist approach - no extra features or settings
- Clean, straightforward implementation matching early gaming interfaces

## Images
**No images required** - This is a pure text-based interface maintaining retro gaming terminal aesthetics.