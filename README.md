# AMA AI

## Overview

[AMA AI](https://fun-with-ai-rho.vercel.app/) is a React application that allows the user to interact with an Artificial Intelligence (AI) technology called [OpenAI](https://beta.openai.com/overview). Try asking the OpenAI a question and see what response you get back. After inputing some text as a prompt, the AI will generate a text completion that attempts to match whatever context or pattern given. If you give the AI a prompt like “Write a tagline for an ice cream shop”, it will return a completion such as “We serve up smiles with every scoop!”. Try changing the settings to see if the AI will generate different responses.

Read more about the cool features this AI technology has in the [docs](https://beta.openai.com/docs/guides/completion/introduction).

Here's a link to the React application I built using the OpenAI API: [AMA AI](https://fun-with-ai-rho.vercel.app/).

# Learning Goals

- React fundamentals
- React Hooks
- Local storage
- Network request
- API
- Asychronous JavaScript
- CSS Flexbox
- Tailwind CSS

# Getting Started

To get a local copy up and running follow these simple steps:

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:lswatson16/fun_with_ai.git
   ```
2. cd into the root directory
   ```sh
   cd fun_with_ai
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to see the application in the browser
   ```sh
   npm start
   ```
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.

# Challenges and Wins

I wanted to get more practice with React hooks. Implementing local storage with hooks was a huge win for me. It was important that I get the application working first with a few features (eg. adding presets and ability to change the engine, temperature, and max tokens). Once that was complete, I created a feature branch called `feature/local-storage` to convert all class components to functional components with React hooks. On this feature branch, I implemented local storage using the React hooks, `useState` and `useEffect`. See [branch](https://github.com/lswatson16/fun_with_ai/tree/feature/local-storage) here.

This was the first time I implemented local storage. I found this article, [Local Storage in React](https://www.robinwieruch.de/local-storage-react/), very helpful. After implementing local storage to the form, I realized I needed to add an additonal button to reset the form to create a better user experience.

Another thing I want to improve on as a front end developer is design. I was able to accomplish a clean and responsve design using Tailwind CSS and plan to use Tailwind in future projects.

Here's some other helpful articles:

- [Using React useState with an object](https://blog.logrocket.com/using-react-usestate-object/)
- [Returning Object Literals from Arrow Functions in JavaScript](https://mariusschulz.com/blog/returning-object-literals-from-arrow-functions-in-javascript)

# Features

### List messages from newest to oldest

The user can enter a prompt to ask the AI a question like "Who is Malcom X?". When the AI responds, the messages between the user and AI are displayed in a list from newest to oldest.

### Local Storage

The messages and input values persist on the page even when the page reloads due to local storage.

### Presets & ability to change settings

The form allows the user to play around with the settings for the engine, temperature, and max tokens.

If a user doesn't want to change the settings, then the default engine is `Curie` and the request body will send these presets to the API:

- temperature: 0.5
- max tokens: 60

![List](https://media.giphy.com/media/qHCkzkp4JlDsLLJIMe/giphy.gif)

![Responsive Design](https://media.giphy.com/media/bODEUeKWNFyNB75Osk/giphy.gif)

# Future Additions

- Favoriting messages between the user and AI
- Example prompts that the user can easily copy and paste into the form to get started using the application
- Narrowing down an audience/niche and specific topics to ask the AI (eg. Black history in America)
- Removing persisted messages from local storage
- Adding CSS animation to the AI response text

# Technologies Used

- React
- Javascript
- HTML/CSS
- Tailwind CSS
- Lighthouse (Chrome Dev Tools)
- React Dev Tools (Chrome Dev Tools)

# Deployment

This application is hosted on [Vercel](https://www.vercel.com/). Please use this deploy link to skip installation and view the application: [AMA AI](https://fun-with-ai-rho.vercel.app/).

# Contributors

Lauralyn Watson

- [GitHub](https://github.com/lilydev16)
- [LinkedIn](https://www.linkedin.com/in/lauralyn-watson/)
- [Portfolio](https://portfolio-lswatson16.vercel.app/)
- [Turing Alumni Portfolio](https://terminal.turing.edu/profiles/1340)

# Credits

- [OpenAI](https://beta.openai.com/overview)
- [Create React App](https://create-react-app.dev/)
- [Vercel](https://www.vercel.com/)
- [Favicon generator](https://favicon.io/favicon-generator/)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI Slider API](https://mui.com/material-ui/api/slider/)
