# Pakphire - Logistics & Fulfillment Web Application

Welcome to the **Pakphire** web application repository. This project is a modern Next.js application designed to showcase logistics and fulfillment services, including Amazon FBA/FBM, Walmart Fulfillment Services (WFS), and courier delivery.

## 🚀 Features

- **Dynamic Service Pages**: Reusable layouts for various services (Amazon FBA, WFS, etc.).
- **Interactive Forms**:
  - **Contact Form**: General inquiries.
  - **Warehouse Booking**: Request warehouse space.
  - **Courier Delivery**: Ship, Buy For Me, and Ship For Me requests.
- **Email Integration**: Secure server-side email sending using **Nodemailer** via a centralized API route.
- **Dockerized**: Optimized Docker setup for easy deployment.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Modern UI/UX**: Smooth animations with Framer Motion and clean aesthetics.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)

## 📂 Project Structure

```
├── app/
│   ├── (main)/             # Main application routes
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Dynamic service pages
│   │   └── ...
│   ├── actions/            # Client-side actions (form submission)
│   ├── api/                # Server-side API routes
│   │   └── send-email/     # Centralized email sending endpoint
│   └── layout.js           # Root layout
├── components/             # Reusable React components
├── Constants/              # Static data and configuration
├── lib/                    # Utilities and hooks
├── public/                 # Static assets (images, icons)
├── .env.local              # Environment variables (not committed)
├── Dockerfile              # Docker build configuration
└── next.config.mjs         # Next.js configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-repo/pakphire.git
    cd pakphire
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your SMTP credentials:

    ```env
    SMTP_HOST=smtp.example.com
    SMTP_PORT=587
    SMTP_USER=your_email@example.com
    SMTP_PASS=your_password
    SMTP_FROM_EMAIL=your_email@example.com
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Deployment

This project includes a multi-stage `Dockerfile` optimized for production.

### Build the Image

```bash
docker build -t pakphire-app .
```

### Run the Container

```bash
docker run -p 3000:3000 pakphire-app
```

The application will be available at `http://localhost:3000`.

## 📧 API Documentation

### Send Email

**Endpoint**: `POST /api/send-email`

Sends an email using the configured SMTP server.

**Request Body**:

```json
{
  "to": "recipient@example.com", // Optional, defaults to configured receiver
  "subject": "Email Subject",
  "html": "<h1>HTML Content</h1>"
}
```

**Response**:

- `200 OK`: Email sent successfully.
- `500 Internal Server Error`: Failed to send email.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📄 License

This project is proprietary software. All rights reserved.
