# Exercise 2: My Messenger

A simple react-native app named 'My Messenger'

## Project Overview

This document provides a comprehensive guide to configuring and running the 'My Messenger' app, a beginner-friendly react-native application that displays a list of directories and their associated messages. 
The application consists of two main screens:
1. Directory Screen: Shows a list of available directories with message counts.
2. Messages Screen: Displays the messages contained within a selected directory

## Project Structure
The project follows a standard React Native with TypeScript structure:
```bash
MyMessenger-ReactNative/
├── App.tsx                  # Main application entry point with navigation setup
├── index.ts                 # Root component wrapper
├── types.ts                 # TypeScript type definitions
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── screens/
│   ├── DirectoryScreen.tsx  # Directory listing component
│   └── MessagesScreen.tsx   # Messages view component
├── assets/                  # App images and assets
├── ScreenShots/             # Screenshots of application
│   ├── Web                  # Screenshots of app running on Edge browser
│   │   ├── web_1.png
│   │   ├── web_2.png
│   │   └── web_3.png
│   ├── Android              # Screenshots of app running on Android device
│   │   ├── app_1.png
│   │   ├── app_2.png
│   │   ├── app_4.png
│   │   └── app_4.png
└── app.json                 # Main expo configuration
```

## Configuration and Setup
### Prerequisites
1. Node.js
2. npm or Yarn
3. Expo CLI
4. A mobile device or emulator/simulator

### Installation/Local Setup Steps

Clone or extract the project files to your local machine
```bash
git clone https://github.com/tulsipatange/MyMessenger-ReactNative.git
```

Navigate to the project directory:
```bash
cd MyMessenger-ReactNative
```
Install dependencies:
```bash
npm install
```
or using Yarn:
```bash
yarn install
```

Start the development server:
```bash
npm start
```
or
```bash 
yarn start
```

To run on Mobile:
- Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal, or press 'a' to run on an Android emulator or 'i' to run on an iOS simulator.

To run on Web:
- press 'w' to open it in browser

### Screenshots
1. App running on Android device
![Screenshot](./ScreenShots/Android/app_1.png)
![Screenshot](./ScreenShots/Android/app_2.png)
![Screenshot](./ScreenShots/Android/app_3.png)
![Screenshot](./ScreenShots/Android/app_4.png)
3. App running on Web browser (Edge)
