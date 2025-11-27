# Fly Global Trading Website

This is a Next.js project for Fly Global Trading, a global ICT components distribution company.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Run the development server:

    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the page routes and layout.
  - `page.tsx`: Homepage
  - `products/page.tsx`: Products page
  - `solutions/page.tsx`: Solutions page
  - `about/page.tsx`: About Us page
  - `contact/page.tsx`: Contact page
  - `globals.css`: Global styles and Tailwind configuration.
- `components/`: Reusable UI components (Header, Footer, Hero, etc.).
- `public/`: Static assets (images, logos).

## Customization

- **Colors & Theme:** Defined in `app/globals.css` using CSS variables and Tailwind v4 `@theme`.
- **Content:** Text content is directly in the page components.
- **Images:** Place new images in `public/images` and reference them in the code.

## Deployment

### Option 1: Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import your project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Your application will be deployed instantly.

### Option 2: Self-Hosting (VPS / Node.js Server)

To deploy on a Linux server (e.g., Ubuntu, CentOS) or any Node.js environment:

1.  **Prerequisites:**
    - Node.js (v18 or later)
    - npm or yarn
    - Git

2.  **Setup on Server:**
    ```bash
    # Clone the repository
    git clone https://github.com/Elliot-TangS/FlyGlobalTradingICT.git
    
    # Navigate to the website directory
    cd FlyGlobalTradingICT/website
    
    # Install dependencies
    npm install
    ```

3.  **Build the Application:**
    ```bash
    npm run build
    ```

4.  **Start the Production Server:**
    ```bash
    npm start
    ```
    The app will run on port 3000 by default.

5.  **Process Management with PM2 (Recommended for Production):**
    To keep the application running in the background and automatically restart on crash or reboot:

    ```bash
    # Install PM2 globally
    npm install -g pm2
    
    # Start the app
    pm2 start npm --name "fly-global-website" -- start
    
    # Save the process list to restart on reboot
    pm2 save
    pm2 startup
    ```
