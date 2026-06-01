# PocketPOS 
### Empowering Small Businesses with Seamless POS Experience
## Overview
PocketPOS  is a lightweight, cross‑platform point‑of‑sale (POS) application built with **React Native** and **Expo**. It provides a smooth, modern UI for small businesses to manage sales, inventory, and analytics on both mobile devices and the web.

---

## Features
- **User Authentication** – Secure login flow with context‑based auth handling.
- **Dashboard & Analytics** – Real‑time sales charts and summary statistics.
- **Inventory Management** – Add, edit, and delete products; barcode scanning support.
- **POS Scanning** – Integrated barcode scanner to quickly add items to the cart.
- **Cart & Receipts** – Interactive cart with printable receipt screen.
- **Sales History** – View past transactions with filtering.
- **Business Profile & Tax Settings** – Configure store details and tax rates.
- **Push Notifications** – Order ready and low‑stock alerts (via `expo-notifications`).
- **Offline Support** – SQLite database (`expo-sqlite`) stores data locally with graceful sync.
- **Theming** – Light/dark mode with custom theme provider and animated transitions.

---

## Tech Stack
| Layer | Technology |
|---|---|
| **Framework** | React Native (Expo SDK) |
| **Navigation** | React Navigation (native stack + bottom tabs) |
| **State Management** | React Context API (Auth & Theme) |
| **Database** | Expo SQLite (`expo-sqlite`) |
| **UI Components** | Custom components + Lucide icons |
| **Styling** | Styled with a design system (`src/theme`) – supports dark mode, shadows, typography |
| **Barcode Scanning** | `expo-barcode-scanner` (wrapped in `PosScannerScreen`) |
| **Notifications** | `expo-notifications` |
| **Build Targets** | Android, iOS, Web (via Expo) |
| **Language** | JavaScript (ES2022) |

---

## Getting Started
### Prerequisites
- Node.js ≥ 18
- **Expo CLI** (`npm i -g expo-cli`)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/yourorg/LightPOS.git
cd LightPOS

# Install dependencies
npm install

# Start the development server
expo start
```
Choose **Run on Android device/emulator**, **iOS simulator**, or **Web** from the Expo DevTools.

---

## Project Structure
```
LightPOS/
├─ App.js                # Root component with navigation & providers
├─ app.json               # Expo configuration (name, icons, plugins)
├─ src/
│  ├─ screens/           # All screen components (Landing, Dashboard, etc.)
│  ├─ theme/             # Design tokens, colours, typography, shadows
│  ├─ AuthContext.js     # Authentication context
│  ├─ ThemeContext.js    # Theme handling (light/dark)
│  └─ database.js        # SQLite init & helper functions
└─ assets/                # Images, icons, splash screens
```

---

## Usage
- **Landing** – Welcome screen with login/register navigation.
- **Dashboard** – Overview of daily sales, inventory alerts.
- **Inventory** – List of products; tap **+** to add new items.
- **Scanner** – Scan barcodes to add products to the cart instantly.
- **Cart** – Review items, adjust quantities, and checkout.
- **Receipt** – Displays printable receipt after purchase.
- **Analytics** – Bar/line charts for sales trends.
- **Settings** – Theme toggle, account management, and app preferences.

---

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Make your changes and ensure the app still builds with `expo start`.
4. Write or update tests if applicable.
5. Submit a Pull Request with a clear description of the changes.

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For questions or support, open an issue on the GitHub repo or contact the maintainers at `support@lightpos.io`.
