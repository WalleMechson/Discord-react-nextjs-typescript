<div align="center">
  <br/>
            <h1 style="font-size: 70px;"><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/discord-logo-discord-icon-transparent-free-png.webp" />  Responsive Nextjs Discord clone with Livekit 🚀</h1>
  <br/>
  <p>
Create servers, manage roles, and chat in real-time with WebSocket and React-Query. Enjoy audio/video calls with LiveKit, and handle files with UploadThing. Powered by Clerk for auth, Neon.tech for the database, and Prisma ORM.
  </p>

  <p>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit" alt="last update" />
    </a>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/network/members">
      <img src="https://img.shields.io/github/forks/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit" alt="forks" />
    </a>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/stargazers">
      <img src="https://img.shields.io/github/stars/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit" alt="stars" />
    </a>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/issues/">
      <img src="https://img.shields.io/github/issues/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit" alt="open issues" />
    </a>
  </p>
   
  <h4>
    <a href="#">Demo currently not avaliable because of the cost of third-party tools</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/readme.md">Documentation</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/issues/">Report Bug</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/issues/">Request Feature</a>
  </h4>
</div>

<br/>

# Discord clone by Geri Fixit (pseudo-name)

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
  git clone https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit
  ```

- Navigate to the project directory:

  ```bash
  cd discord
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Create .env file and setup all the neccessary env variables (Project uses NeonDb, UploadThing, ClerkJs and LiveKit as a third party db and SaaS)

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
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/1pic-light.PNG" alt="10pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/1pic.PNG" alt="10pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/1mobile.PNG" alt="13mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/2pic-light.PNG" alt="11pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/2pic.PNG" alt="11pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/2mobile.PNG" alt="1mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/3pic-light.PNG" alt="12pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/3pic.PNG" alt="12pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/3mobile.PNG" alt="2mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/4pic-light.PNG" alt="13pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/4pic.PNG" alt="13pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/4mobile.PNG" alt="3mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/13pic-light.PNG" alt="1pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/13pic.PNG" alt="1pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/13mobile.PNG" alt="4mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/5pic-light.PNG" alt="2pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/5pic.PNG" alt="2pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/5mobile.PNG" alt="5mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/6pic-light.PNG" alt="3pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/6pic.PNG" alt="3pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/6mobile.PNG" alt="6mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/7pic-light.PNG" alt="4pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/7pic.PNG" alt="4pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/7mobile.PNG" alt="7mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/8pic-light.PNG" alt="5pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/8pic.PNG" alt="5pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/8mobile.PNG" alt="8mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/9pic-light.PNG" alt="6pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/9pic.PNG" alt="6pic" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/9mobile.PNG" alt="9mobile" width="100"></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/10pic-light.PNG" alt="7pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/10pic.PNG" alt="7pic" width="100"></td>
            <td></td>
        </tr>
        <tr>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/11pic-light.PNG" alt="8pic-light" width="100"></td>
            <td><img src="https://github.com/GeriFixit/Responsive-Nextjs-Discord-clone-with-Livekit/blob/main/github_assets/11pic.PNG" alt="8pic" width="100"></td>
            <td></td>
        </tr>
</table>

<br/>

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
