import CenterBar from "./components/CenterBar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { patients } from "./components/Lib/data";

export default function Body() { 
    return (
        <div className="flex justify-between gap-x-4">
        <LeftBar />
        <CenterBar />
        <RightBar patient={patients[3]}/>
        </div>
    )
}