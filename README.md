# QuickShow

QuickShow is a modern theatre web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that delivers seamless movie browsing, ticket purchasing, and user management experiences. This project integrates various powerful tools and services to provide a full-featured, scalable, and event-driven application.

---

## Demo

Check out the live demo here: [QuickShow Live Demo](https://quickshow-hazel-seven.vercel.app/)

---

## Features

- User authentication & authorization powered by **Clerk**
- Fetches rich movie data via the **IMDb API**
- Secure payment processing implemented with **Stripe**
- Image and media management using **Cloudinary**
- Email notifications handled by **Nodemailer** & **Brevo**
- Event-driven workflows using **Inngest** and **Svix**
- Responsive UI built with **React** and styled with **Tailwind CSS**
- Backend built on **Express.js** and **Node.js**
- MongoDB Atlas for cloud-hosted, scalable database

---

## Technologies Used

- **MongoDB Atlas** - NoSQL database hosting
- **Express.js** - Backend framework
- **React** - Frontend UI library
- **Node.js** - Runtime environment
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **IMDb API** - Movie data source
- **Stripe** - Payment gateway
- **Cloudinary** - Media asset management
- **Nodemailer** & **Brevo** - Email sending
- **Inngest** & **Svix** - Event-driven architecture
- **Vercel** - Hosting and deployment

---

## Getting Started (user guide)
1.Login

First, create an account or log in using the authentication powered by Clerk. This allows you to access personalized features and proceed with bookings.

2.Visit the Movies Page

After logging in, navigate to the Movies page to browse the available movies fetched from the IMDb API.

3.View Movie Details

Click on a movie to see detailed information such as synopsis, cast, ratings, and media assets.

4.Click the Buy Ticket Button

On the movie detail page, click the Buy Ticket button to start the booking process.

5.Select Date

Choose your preferred date for watching the movie.

6.Click the Book Now Button

After selecting the date, click Book Now to proceed to the next step.

7.Select Available Time and Seats

On the next page, select a showtime from the available options.

Choose seats that are available for that showtime.

8.Proceed to Payment

After selecting the seats, continue to the payment page.

Complete the purchase securely using the Stripe payment integration.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- MongoDB Atlas account
- Stripe account
- Cloudinary account
- Clerk account

### Installation

1. Clone the repository:

git clone https://github.com/MinhajLahith2002/QuickShow.git
cd QuickShow


2. Install backend dependencies:

cd server
npm install


3. Install frontend dependencies:

cd ../client
npm install


4. Start the development servers:

- Backend:
  ```
  cd ../server
  npm run server
  ```

- Frontend:
  ```
  cd ../client
  npm run dev
  ```

---

## Folder Structure

├── client/ # React frontend
├── server/ # Express backend
├── README.md
└── ...


---

## Contributing

Feel free to open issues or submit pull requests! Any improvements or fixes are welcome.

---


## Contact

Project Link: https://github.com/MinhajLahith2002/QuickShow.git  
Live Demo: https://quickshow-hazel-seven.vercel.app/  

If you have any questions or feedback, feel free to reach out!

---

## Acknowledgements

Thanks to all the libraries and services that made this project possible: Clerk, IMDb, Stripe, Cloudinary, Nodemailer, Brevo, Inngest, Svix, Vercel, and Tailwind CSS.

