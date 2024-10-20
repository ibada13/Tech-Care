import { IoMdClose } from "react-icons/io";
import { patient } from "./Lib/defintions";
import PatientForList from "./Lib/ui/patientsforlist";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
const LeftBar = ({ patients ,selected }: {patients:patient[] , selected:number }) => { 
    console.log("selected : " + selected)
    useEffect(() => { 
        SetpatientList(patients);
    },[])
    const [patientsList, SetpatientList] = useState<patient[]>(patients);
    const [Searching, SetSearching] = useState<boolean>(false);
    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase()
        const filtredpatients = patients.filter(patient =>
            patient.name.toLowerCase().includes(query)
        )
        SetpatientList(filtredpatients)
     }
    return (
        <div className="flex flex-col flex-grow bg-white h-[150vh] p-2 gap-y-2 rounded-lg">
            <div className="flex justify-between">
                {<p className="font-bold w-1/2 inline-block">Patients</p>
                }
                
                <p onClick={() => SetSearching(e => !e)}>
                { 

                      Searching?<IoMdClose size={25}/> :  <IoSearch  size={25} />
                    }
                    </p>

            </div>
                { 
                    Searching&& <input onChange={e=>search(e)} className="w-1/2 self-center    border border-text rounded-md focus:outline-none p-1" type="text" name="" id="" />
                }
            <div className="overflow-y-auto overflow-x-hidden">

            {patientsList.map((patient, index) => (
                <div  className={`${index === selected && patientsList.length === patients.length? " bg-swg":""} rounded-lg`}>

                    <PatientForList id={index} Patient={patient} key={`p-${index}`} />
                </div>
            ))}
            </div>
        </div>
    );
}

export default LeftBar