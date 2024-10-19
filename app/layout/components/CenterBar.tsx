import { patient } from "./Lib/defintions";
import ChartCard from "./Lib/ui/chartcard";
import { patients } from "./Lib/data";
import HealthCard from "./Lib/ui/healthcard";
import DiagnosisList from "./Lib/ui/diagnosisList";
export default function CenterBar() { 
    return (
        <div className="flex flex-col w-1/2 gap-y-4">

        <div className="flex flex-col bg-white w-full juss p-2 rounded-md">
            <p className="font-bold ">Diagnostic</p>
            <div className="h-screen flex flex-col justify-around bg-white ">

            <ChartCard diagnosis_history={patients[3].diagnosis_history}/>
            <HealthCard diagnosis_history={ patients[3].diagnosis_history[0]} />
            </div>
            </div>
            <DiagnosisList diagnostic_list={patients[3].diagnostic_list}/>
        </div>
    )
}