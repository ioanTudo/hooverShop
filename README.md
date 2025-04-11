**HooverShop**

Features
	•	Product browsing with title, description, image, and price
	•	User authentication using Firebase (registration & login)
	•	Email verification after registration
	•	Protected routes (e.g., dashboard)
	•	Stripe Checkout for secure payments
	•	Order history display linked to Stripe sessions
	•	Responsive design for desktop and mobile
	•	Show/hide password toggle
	•	Burger menu navigation on smaller screens

Tech Stack
	•	Frontend: React, React Router, React Hook Form
	•	Authentication: Firebase Auth
	•	Payments: Stripe Checkout Sessions
	•	Styling: CSS
	•	Deployment: Optional (Vercel, Netlify, Firebase Hosting)
 
Setup Instructions
	1.	Clone the repository
git clone https://github.com/your-username/hoovershop.git
cd hoovershop
	2.	Install dependencies
npm install
	3.	Create a .env file in the root of the project with the following keys:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
	4.	Start the development server
npm start



Future Improvements
	•	Admin dashboard for product management
	•	Product filters and categories
	•	Pagination and search
	•	Wishlist functionality
	•	Ratings and reviews

Contact

For feedback or questions, contact: ioan_alexandru_tudor@yahoo.com
Or open an issue on this repository.
