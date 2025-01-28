# Personal Notes App 🗒️

This is a React-based web application that allows users to create, manage, and organize their personal notes effectively. The project was developed as part of the Dicoding certification program for React Web Development. 🚀

## About The Project 📝

The Personal Notes App is designed to help users manage their notes efficiently. This application is part of the Dicoding certification program, an online learning platform that offers various programming courses. You can view the certification details [here](https://www.dicoding.com/certificates/MRZMN4GGNPYQ).

### Features:

1. **View Notes List**: Display a list of notes with initial data provided.
2. **Add New Notes**: Users can create new notes with titles and content.
3. **Delete Notes**: Remove unwanted notes from the list.
4. **Search Notes**: Search for specific notes based on their titles.
5. **Character Limit**: Title input is limited to 50 characters with remaining character count display.
6. **Archive System**: 
   - Archive/unarchive notes as needed
   - Separate views for active and archived notes
7. **Empty State Handling**: Displays "No Notes" message when no notes are available.

## Project Structure 📁

The project utilizes React components and state management to handle note operations efficiently. It implements controlled components for form inputs and uses array mapping to display the notes list.

## Getting Started 🛠️

### Prerequisites
- Node.js installed on your computer
- npm (Node Package Manager)
- Git
- Code editor (VS Code recommended)

### Installation

To install and run the Personal Notes App, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/salviaaaa/Notes_App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Notes_App
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

### Using Vite.js with React

Vite is a modern build tool that provides a fast development environment for web applications. When you run the development server, Vite serves your application at `http://localhost:5173/`. This allows for hot module replacement (HMR), meaning that any changes you make to your code will be reflected in the browser without needing a full page reload. This significantly speeds up the development process and improves the developer experience.

#### Steps to Set Up Vite.js with React

**Step 1 - Install Node.js**

Before we proceed, you need to install Node.js on your computer. If you haven't installed it yet, you can download it from [Node.js official website](https://nodejs.org/en/). 

To check if Node.js is installed successfully, run the following commands in your terminal:

```bash
node --version
npm --version
```

**Step 2 - Create a React Project with Vite**

Once Node.js is installed, you can create a new React project using Vite. Navigate to the folder where you want to store your project and run the following command in your terminal:

```bash
npm create vite@latest react-crud -- --template react
```

If the command runs successfully, it will create a new project folder named `react-crud`.

Next, navigate into the project folder:

```bash
cd react-crud
```

**Step 3 - Install Required Libraries**

Run the following command to install the necessary libraries:

```bash
npm install
```

Please wait for the installation process to complete and ensure you are connected to the internet.

**Step 4 - Run the React Project with Vite**

After the installation process is complete, run the following command to start your React project using Vite:

```bash
npm run dev
```

If successful, your project will be running at `http://localhost:5173/`. You can open this URL in your web browser to view the application.

## Usage 💻

The application provides an intuitive interface where you can:
- Create new notes using the input form
- Search for specific notes using the search bar
- Archive/unarchive notes as needed
- Delete notes you no longer need
- View remaining character count while typing note titles

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📜

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

## Live Demo 🌐

Project Link: [https://notes-app-react-omega.vercel.app/](https://notes-app-react-omega.vercel.app/)