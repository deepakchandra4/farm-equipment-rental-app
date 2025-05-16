import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'AgriRent - Agricultural Equipment Rental',
  description: 'Rent agricultural equipment for your farming needs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}