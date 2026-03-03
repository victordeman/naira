# NAIRA - African AI & XR Excellence Hub

## Project Description
NAIRA (NBU Artificial Intelligence Research & Advancement Institute) is a pioneering hub dedicated to transforming education and innovation through immersive Extended Reality (XR) experiences and agentic AI architectures. Our mission is to embed African languages, culture, and indigenous knowledge into global technology solutions, driving a Renaissance in African AI.

## Tech Stack
- **Frontend Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Backend & Auth:** [Supabase](https://supabase.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter)
- **Deployment & Form Handling:** Formspree (for Partner With Us forms)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd naira-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Start the production server:
   ```bash
   npm run start
   ```

## Project Structure
- `app/`: Next.js App Router directory.
  - `layout.tsx`: Root layout component.
  - `page.tsx`: Main landing page.
  - `globals.css`: Global styles and Tailwind directives.
  - `components/`: React components (Navbar, Footer, PillarCards).
  - `actions.ts`: Server actions for data fetching and auth.
- `public/`: Static assets (Images, Favicon, Manifest).
- `supabase/`: Supabase configuration and migrations.
- `utils/`: Utility functions and Supabase client.
- `tailwind.config.js`: Tailwind CSS configuration.
- `next.config.js`: Next.js configuration.

## Contribution Guidelines
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure all new code follows the project's architectural patterns and includes necessary documentation.

## License
This project is licensed under the ISC License.
