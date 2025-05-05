# Bloger - A Personal Blog Platform

Welcome to **Bloger**, a personal blog platform built with ReactJS. This project allows you to share technical notes and Markdown articles in a visually appealing and interactive way.

## Features

- **Markdown Support**: Write and display posts in Markdown format.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Content**: Fetch posts dynamically from a JSON file.
- **Customizable Themes**: Includes dark mode and customizable styles.
- **Interactive Components**: Features like a slideshow, table of contents, and export functionality.
- **GitHub Integration**: Links to your GitHub profile for easy access.
- **Easy Personalization**: Update personal information and images via a single configuration file.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TQDuysuke/bloger.git
   cd bloger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Customization

To personalize the blog for your own use, edit the `config.jsx` file located in the `src` directory. This file contains all the personal information and image paths used throughout the application.

#### Example:
```javascript
const config = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    intro: "A short introduction about yourself.",
    github: "https://github.com/TQDuysuke",
    about: {
      greeting: "Hello!",
      description: "A detailed description about yourself.",
      journey: "Your career journey and projects.",
      skills: ["Skill1", "Skill2", "Skill3"]
    }
  },
  images: {
    profile: require('./pictures/your-profile-image.jpg'),
    slideshow: [
      require('./pictures/image1.jpg'),
      require('./pictures/image2.jpg'),
      require('./pictures/image3.jpg')
    ],
    logo: require('./pictures/logo.png')
  }
};
```

Replace the placeholder values with your own details and images.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

Ejects the app configuration for advanced customization.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Live Demo

Check out the live demo of the project [here](https://blog.tqduy.id.vn/).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
