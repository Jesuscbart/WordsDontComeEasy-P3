import { useSignal } from "@preact/signals";
import { FunctionComponent } from 'preact';
import HiForm from "../components/HiForm.tsx";
import Shower from "../components/Shower.tsx";

//  He creado este fichero 


const HiPage:FunctionComponent = () => {
    const name = useSignal<string>("");
    const surname = useSignal<string>("");
    const check = useSignal<boolean>(false);

    return (
        <>
            <div class="formBody">
                <HiForm name={name} surname={surname} check ={check}/>
                <button 
                    class="trippyBackgroundAnimated" 
                    onClick={(e)=> check.value = true }> Hi!
                </button>

                {check.value && <Shower name={name} surname={surname}/>}
            </div>
        </>
    );
};

export default HiPage;