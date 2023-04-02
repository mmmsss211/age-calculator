import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} bg-[#F0F0F0]`}>
      <Component {...pageProps} />
    </main>
  );
}
