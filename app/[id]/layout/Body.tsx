import CenterBar from "./components/CenterBar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { patients } from "./components/Lib/data";
import { useParams } from "next/navigation";
export default function Body() { 
    const params = useParams<{ id: string }>()
    console.log(params.id)
    const id = Number(params.id)
    return (
        <div className="flex justify-between gap-x-4">
        <LeftBar selected={id} patients={patients}/>
        <CenterBar patient={patients[id]}/>
        <RightBar patient={patients[id]}/>
        </div>
    )
}