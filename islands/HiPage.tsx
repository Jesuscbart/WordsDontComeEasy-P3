import { useSignal } from "@preact/signals";
import { FunctionComponent } from 'preact';
import HiForm from "../components/HiForm.tsx";
import Shower from "../components/Shower.tsx";

const HiPage:FunctionComponent = () => {    // Añadimos los Signals
    const name = useSignal<string>("");     
    const surname = useSignal<string>("");
    const check = useSignal<boolean>(false); // Pintar el shower (contenedor de texto)

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

// Fichero corregido.