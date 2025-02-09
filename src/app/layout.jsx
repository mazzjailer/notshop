import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx"
import CartProvider from "../contexts/cartContext.jsx";
import FavProvider from "../contexts/favContext.jsx";
import ProductsData from "../contexts/productsData.jsx";
import Session from "../contexts/session.jsx";

const roboto = Inter({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "notShop",
  description: "a beautiful and modern e-commerce website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className + " flex flex-col min-h-[100vh]"}
      >
        <Session>
          <ProductsData>
            <FavProvider>
              <CartProvider>
                <div className="flex flex-row justify-center w-full">
                  <Header />
                </div>
                {children}
                <Footer />
              </CartProvider>
            </FavProvider>
          </ProductsData>
        </Session>
      </body>
    </html>
  );
}
