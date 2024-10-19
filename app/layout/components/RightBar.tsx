import Image from "next/image";
import { patient } from "./Lib/defintions";
export default function RightBar({ patient }: {patient:patient}) { 
    return (
        <div className="h-[140vh] flex flex-col w-[30%] p-4 rounded-md bg-white">
            <div className="w-full  h-[28%] flex flex-col items-center justify-between ">
                <div className="w-32 h-32  flex justify-center">
                    
                <Image className=" bg-cover  w-full h-full" width={100} height={100} src={ patient.profile_picture} alt=""/>
            </div>
                <p className="text-xl font-bold">{ patient.name}</p>
            </div>
            <div></div>
        </div>
    );
}