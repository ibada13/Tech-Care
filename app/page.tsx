'use client'
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-[80vh] ">
      <div className="h-2/3 w-3/4 flex flex-col justify-between items-center ">
        <p className="font-bold text-2xl">this web site was build by Nextjs and tailwind </p>
        <Link href={"/0"} className="w-1/4 bg-sg p-3 rounded-lg font-bold text-center">visit the project</Link>
      </div>
    </div>
  );
}
