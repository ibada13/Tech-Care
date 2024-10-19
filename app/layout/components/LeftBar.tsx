
import { patients } from "./Lib/data";
import PatientForList from "./Lib/ui/patientsforlist";
import { IoSearch } from "react-icons/io5";
const LeftBar = () => { 
    return (
        <div className="flex flex-col flex-grow bg-white h-[150vh] p-2 gap-y-2 ">
            <div className="flex justify-between">
                <p className="font-bold">Patients</p>
                <IoSearch size={25}/>
            </div>
            <div className="overflow-y-auto overflow-x-hidden">

            {patients.map((patient, index) => (
                
                <PatientForList Patient={patient} key={`p-${index}`} />
            ))}
            </div>
        </div>
    );
}

export default LeftBar