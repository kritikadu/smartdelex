# SmartDealX - Tender Management Platform

A modern, AI-powered tender management and vendor rating solution.

## Features

- **Tender Marketplace**: Browse and filter active tenders.
- **Vendor Dashboard**: Track bids, win rates, and performance ratings.
- **Admin Analytics**: Visualize platform trends and statistics.
- **Property Comparison**: Compare real estate assets side-by-side.

## Getting Started Locally

To run this project on your local machine using VS Code:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 20 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. **Unzip the downloaded project folder.**
   - Right-click the `.zip` file.
   - Select "Extract All..." or "Unzip".
   - **Important**: Open the *new extracted folder*, not the zip file itself.

2. Open the folder in VS Code.
   - File > Open Folder... > Select the extracted folder.

3. Open a terminal (`Ctrl+` `) and install dependencies:

```bash
npm install
```

### Running the Development Server

**Option 1: Recommended (Frontend Only)**
This is the fastest way to run the design prototype and avoids common Windows issues.

```bash
npm run dev:client
```
Then open `http://localhost:5000`.

**Option 2: Full Server**
If you need the backend server (on Windows, this might require Git Bash):

```bash
npm run dev
```

### Troubleshooting

- **"NODE_ENV is not recognized"**: Use `npm run dev:client` instead.
- **"vite is not recognized"**: Make sure you ran `npm install` first.
- **VS Code shows empty files**: You might be viewing the zip file contents without extracting. Extract the folder first.


To create a production build:

```bash
npm run build
```

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: Wouter
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animation**: Framer Motion

## License

MIT
