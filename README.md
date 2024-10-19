# Focus Lamp Web-App 🌟

Welcome to Focus Lamp web-app! 
A community-space where one can manage their goals using an engaging lamp theme, share their story, connect with community members. With seamless Google sign-in and real-time goal management.


## Features 🚀

- **Google Authentication**: Sign in and manage your goals securely with Google.
- **Real-time Goal Management**: Add, view, and remove goals with instant updates.
- **Dynamic Lamps**: Each goal is represented by a lamp that updates based on your goals.
- **Profile Management**: View and update your profile photo and name.
- **Story Management**: Add or View member stories with a wordcloud based on content of story.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used 🔧

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Firebase (Authentication, Firestore)


## Getting Started 💻

Follow these steps to run the App locally:

1. **Clone the Repository 📲**
   ```bash
   git clone https://github.com/Monika5S/HackBrew-24.git
   cd HackBrew-24


2. **Install Dependencies ⚙️**
    - This project uses Firebase via CDN, so no additional dependencies are required.


3. **Configure Firebase 🔥**
    - Go to the Firebase Console.
    - Create a new project and enable Authentication and Firestore.
    - Replace the Firebase configuration in source/firebase/firebaseConfig.js with your project's credentials.


4. **Run the App 🌞**
    - Open index.html in your browser to view the application locally.
    - Optionally, deploy the app to Netlify for hosting.

    
5. **File Structure 📁**
    - index.html: The main page where you interact with goals and sign in.
    - profile.html: Page for viewing user profile information.
    - reflect.html: Page for viewing and adding stories to share with everyone.
    - styles/style.css: CSS file for styling the application.
    - source/firebase/firebaseConfig.js: Firebase configuration and initialization.
    - source/firebase/auth.js: Handles user authentication logic.
    - source/goals.js: Manages goal-related functions and UI updates.
    - source/profile.js: Handles display of profile related info.
    - source/reflect.js: Manages Stories updates and wordcloud generation.


6. **Key Features Implementation 🔑**

    **Authentication**
    - auth.js: Handles sign-in, sign-out, and UI updates based on authentication state.
    - firebaseConfig.js: Initializes Firebase and exports necessary functions.
    
    **Goals Management**
    - goals.js: Manages goal operations, including adding, displaying, and removing goals. Lamps update dynamically based on the goals.
    
    **Profile Page**
    - profile.js: Displays and updates user profile information such as photo and name.
    
    **Reflect Page**
    - reflect.js: Manages stories operation, including adding, displaying stories and word cloud generation based on content of each story.


  5. **Contributing 🤝**
   - Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

  <img width="948" alt="image" src="https://github.com/user-attachments/assets/04c10d1a-c571-4b74-86b4-cc6989d5e1e7">

