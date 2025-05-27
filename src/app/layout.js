import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/styles.scss";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Morent",
  description: "Morent Car Rental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>
      <Header isDashboard={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
