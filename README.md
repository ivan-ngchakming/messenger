# Messenger

This project started out as a facebook messenger clone, but I started taking references from other messenger such as WhatsApp and Telegram.
Now the project has evolved into my own version of messenger.

## What is used in this project

1. React.js & TypeScript

    Using React as the Javascript UI framework with TypeScripts. Functional components and custom hooks are used.

    React-testing-lib is used for unit testing and cypress is used for end-to-end testing. (todo)

2. Firebase

    FireStore is used as the database of the application.

    Firebase Auth for user management and authentication.

    Firebase hosting to host the application at my custom domain using cloudflare DNS. And GitHub action for continuous integration and deployment to firebase.

3. Material UI
    MUI is used as the UI library, I have customized the majority of component used in an attempt to match the facebook messenger using styled component.
