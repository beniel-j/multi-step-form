Multi-Step Form
This is a responsive and feature-rich multi-step form project built with Next.js, Tailwind CSS, and Zustand. The form allows users to navigate through multiple steps, manage form data, and experience smooth animations and transitions.

Features
Step-by-Step Navigation: Personal Information, Address Details, Preferences, and Review & Submit.
Dark Mode: Toggle between light and dark themes.
Real-Time State Management: Shared state across steps using Zustand.
Animations: Smooth transitions between steps with Framer Motion.
Responsive Design: Optimized for all screen sizes.
Getting Started
Prerequisites
Node.js (v16 or later)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/beniel-j/multi-step-form.git
cd multi-step-form
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open in your browser:

arduino
Copy code
http://localhost:3000
How to Use
Navigate through the steps using the navigation bar or buttons.
Enter your information in each step.
Review your data in the final step before submitting.
Tech Stack
Framework: Next.js
Styling: Tailwind CSS
State Management: Zustand
UI Components: ShadCN UI
Animations: Framer Motion
Folder Structure
plaintext
Copy code
multi-step-form/
├── pages/            # Application pages
├── components/       # Reusable components
├── styles/           # Tailwind CSS styles
├── state/            # Zustand store for state management
├── public/           # Static files
└── README.md         # Project documentation
