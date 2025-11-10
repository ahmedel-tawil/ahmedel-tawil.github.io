import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Eltawil | Robotics Engineer",
  description: "Robotics Engineer specializing in ROS/ROS2, autonomous systems, and full-stack development. Building intelligent systems from circuits to cloud.",
  keywords: ["Robotics Engineer", "ROS", "ROS2", "Python", "C++", "FastAPI", "Django", "Autonomous Systems", "SLAM", "Control Systems"],
  authors: [{ name: "Ahmed Eltawil" }],
  openGraph: {
    title: "Ahmed Eltawil | Robotics Engineer",
    description: "Building intelligent robotic systems from circuits to cloud",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
