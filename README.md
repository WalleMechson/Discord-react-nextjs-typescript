<div align="center">
  <br/>
            <h1 style="font-size: 70px;"><img src="discord-logo-discord-icon-transparent-free-png.webp" /> Nextjs Responsive Discord clone with Livekit</h1>
  <br/>
  <p>
The project is a Discord clone with responsive design that provides users with the ability to create servers and channels, manage members (including changing roles and kicking users), and invite others. It features a real-time, WebSocket and React-Query based text chat, where users can edit and delete messages, as well as upload pictures and files. The project also implements audio and video chat for server channels and direct messages using LiveKit. Authentication is handled by Clerk, file management by UploadThing, the database is powered by Neon.tech, and Prisma is used as the ORM.
  </p>

  <p>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/GeriFixit/Nextjs-Discord-clone-with-Livekit" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/GeriFixit/Nextjs-Discord-clone-with-Livekit" alt="last update" />
    </a>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/network/members">
      <img src="https://img.shields.io/github/forks/GeriFixit/Nextjs-Discord-clone-with-Livekit" alt="forks" />
    </a>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/stargazers">
      <img src="https://img.shields.io/github/stars/GeriFixit/Nextjs-Discord-clone-with-Livekit" alt="stars" />
    </a>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/issues/">
      <img src="https://img.shields.io/github/issues/GeriFixit/Nextjs-Discord-clone-with-Livekit" alt="open issues" />
    </a>
  </p>
   
  <h4>
    <a href="#">Demo currently not avaliable because of the cost of third-party tools</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/readme.md">Documentation</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/issues/">Report Bug</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/issues/">Request Feature</a>
  </h4>
</div>

<br/>

# Discord clone by Geri Fixit (pseudo-name)

## Features

## Features

1. **Server and Channel Creation:**

   - Users can create and manage multiple servers and channels, providing a flexible structure for communication.

2. **Member Management:**

   - Server admins and moderators can manage members, including changing roles, kicking users, and inviting others to join the server.

3. **Real-Time Text Chat:**

   - Implemented a WebSocket-based real-time chat system with React-Query, allowing users to send, edit, and delete messages.

4. **File and Image Uploads:**

   - Users can upload and share pictures and files within channels and direct messages.

5. **Audio and Video Chat:**

   - Integrated audio and video communication within server channels and direct messages using LiveKit.

6. **Clerk Authentication:**

   - Secure authentication using Clerk, supporting multiple authentication methods for users.

7. **File Management with UploadThing:**

   - Efficient file management and storage using UploadThing, ensuring a seamless experience for handling user uploads.

8. **Database Powered by Neon.tech:**
   - Utilizes Neon.tech for a scalable and performant database, with Prisma as the ORM for efficient data management.

<br/>

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit
  ```

- Navigate to the project directory:

  ```bash
  cd auth-savvy
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Create .env file and setup all the neccessary env variables (given project uses Neon.tech as a rdms provider)

```

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

- Set up Neon.tech and generate/push Prisma models:

  1. Open new terminal and exec `npx prisma generate`
  2. then `npx prisma db push`

<br/>

## Usage

- Start the development server:

  ```bash
  npm run dev
  ```

- Open your browser and visit `http://localhost:3000` to access the application.

<br/>

## :camera: Screenshots

<table>
  <tr>
    <td><img width="400" alt="2FA Code Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/2faCodePage.PNG"></td>
    <td><img width="400" alt="Admin Actions Permissions Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/adminActionsPermissionsPage.PNG"></td>
  </tr>
  <tr>
    <td><img width="400" alt="Client Side Actions Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/clientSideActionsPage.PNG"></td>
    <td><img width="400" alt="Edit Settings Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/editSettingsPage.PNG"></td>
  </tr>
  <tr>
    <td><img width="400" alt="Login Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/loginPage.PNG"></td>
    <td><img width="400" alt="Password Recovery Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/passwordRecoveryPage.PNG"></td>
  </tr>
  <tr>
    <td><img width="400" alt="Registration Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/registrationPage.PNG"></td>
    <td><img width="400" alt="Server Side Actions Page" src="https://github.com/GeriFixit/Nextjs-Discord-clone-with-Livekit/blob/main/public/serverSideActionsPage.png"></td>
  </tr>
</table>

<br/>

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
