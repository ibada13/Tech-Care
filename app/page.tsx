'use client'
import Image from "next/image";
import NavBar from "./layout/NavBar";
import Body from "./layout/Body";
export default function Home() {
  return (
    <div className="text-text p-3 bg-background flex flex-col gap-y-5">
      <NavBar />
      <Body />
  
    </div>
  );
}
