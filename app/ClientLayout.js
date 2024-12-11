"use client";

import localFont from "next/font/local";
import "./globals.css";
import { Oswald, Space_Grotesk, Poppins } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["200", "700"],
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true); // State for loading screen
  const [startClicked, setStartClicked] = useState(false); // State to track if the "Start" button has been clicked

  // Function to handle "Start" button click and redirect to portfolio
  const handleStartClick = () => {
    setStartClicked(true); // Change state to allow navigation
    setIsLoading(false); // Hide loading screen after click
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${space.variable} antialiased`}
    >
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen onStartClick={handleStartClick} /> // Pass the click handler to LoadingScreen
      ) : (
        children // Render the main content of the page
      )}
    </div>
  );
}
