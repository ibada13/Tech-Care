'use client';
import CenterBar from "./layout/components/CenterBar";
import LeftBar from "./layout/components/LeftBar";
import RightBar from "./layout/components/RightBar";
import { patients } from "./layout/components/Lib/data";
import { useParams } from "next/navigation";
export default function page() { 
    const params = useParams<{ id: string }>()
    
    console.log(params.id )
    const id = Number(params.id)
    return (
        <div className="flex justify-between gap-x-4">
        <LeftBar selected={id} patients={patients}/>
        <CenterBar patient={patients[id]}/>
        <RightBar patient={patients[id]}/>
        </div>
    )
}