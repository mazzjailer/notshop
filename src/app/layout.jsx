import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx"
import CartContext from "../contexts/cartContext.jsx";
import FavProvider from "../contexts/favContext.jsx";
import ProductsData from "../contexts/productsData.jsx";

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
        className={roboto.className}
      >
        <ProductsData>
          <FavProvider>
            <CartContext>
              <div className="flex flex-row justify-center w-full">
                <Header />
              </div>
              {children}
              <Footer />
            </CartContext>
          </FavProvider>
        </ProductsData>
      </body>
    </html>
  );
}
