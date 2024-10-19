import { patient } from "./Lib/defintions";
import ChartCard from "./Lib/ui/chartcard";
import { patients } from "./Lib/data";
import HealthCard from "./Lib/ui/healthcard";
export default function CenterBar() { 
    return (
        <div className="flex flex-col bg-white w-1/2 juss p-2">
            <p className="font-bold ">Diagnostic</p>
            <div className="h-screen flex flex-col justify-around bg-white ">

            <ChartCard diagnosis_history={patients[3].diagnosis_history}/>
                <HealthCard diagnosis_history={ patients[3].diagnosis_history[0]} />
            </div>
        </div>
    )
}