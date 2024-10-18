import CenterBar from "./components/CenterBar";
import LeftBar from "./components/LeftBar";


export default function Body() { 
    return (
        <div className="flex justify-between gap-x-4">
        <LeftBar />
        <CenterBar />
            <div className="bg-white flex-grow p-4">fdsfdsf</div>

        </div>
    )
}