import { patient } from "./Lib/defintions";
import Chart from "./Lib/ui/chart";
import { patients } from "./Lib/data";
export default function CenterBar() { 
    return (
        <div className="flex flex-col bg-white w-1/2">
            <p className="font-bold ">Diagnostic</p>
            <Chart Patient={patients[3]}/>
        </div>
    )
}