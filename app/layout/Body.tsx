import CenterBar from "./components/CenterBar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { patients } from "./components/Lib/data";
import { useParams } from "next/navigation";
export default function Body() { 
    const params = useParams<{ selected: string }>()
    console.log(params.selected)
    return (
        <div className="flex justify-between gap-x-4">
        {/* <LeftBar /> */}
        <CenterBar />
        <RightBar patient={patients[3]}/>
        </div>
    )
}