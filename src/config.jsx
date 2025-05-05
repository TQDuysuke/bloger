const config = {
  personalInfo: {
    name: "Tran Duy",
    title: "a Developer.",
    intro: "I use technology to simplify experiences and create meaningful interactions. Explore my blog to see how I bring ideas to life.",
    about: {
      greeting: "Hello!",
      description: "I'm Duy, an embedded systems enthusiast from Can Tho, Vietnam. I'm currently developing a personal blog platform using ReactJS to share my technical notes and Markdown (.md) articles. I'm also using Cloudflare Tunnel to host the blog on my local machine and make it remotely accessible.",
      journey: "My focus is on embedded systems development, especially with the ESP32 platform. I’ve built sound simulators, MQTT-controlled devices, and real-time embedded applications. My blog project also supports uploading and viewing Markdown articles with images, making it easy to document and share embedded-related content.",
      skills: [
        "Embedded Systems", "ESP32", "FreeRTOS", "MQTT", "C/C++", "ReactJS",
        "Markdown Integration", "Cloudflare Tunnel", "Docker", "Linux (Ubuntu)",
        "Web-based Control Interfaces", "Microcontroller Programming", "WebSocket"
      ]
    },
    github: "https://github.com/TQDuysuke"
  },
  images: {
    profile: require('./pictures/tranduy.jpg'),
    slideshow: [
      require('./pictures/image1.jpg'),
      require('./pictures/image2.jpg'),
      require('./pictures/image3.jpg')
    ],
    logo: require('./pictures/logo.png')
  }
};

export default config;
