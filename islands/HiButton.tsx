import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals"; // Import Signal

const HiButton: FunctionComponent<
  { 
    type?: string; 
    children?: any;
    SayHi: Signal<any>; // Añadimos el Signal SayHi
    nombre: Signal<string>; // Añadimos el Signal nombre
    apellido: Signal<string>; // Añadimos el Signal apellido  
  }> = ({ type, children, SayHi, nombre, apellido },) => {  // Añadimos los Signals a la función
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={(e) => {
        if (audio) {
          audio.play(); // Verificamos si audio existe, si es así, lo reproducimos.
        }
        e.preventDefault(); // Prevenimos el comportamiento por defecto del botón.
        SayHi.value = `${nombre.value} ${apellido.value}`;  // Asignamos el valor de SayHi a nombre y apellido.
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;

// Fichero corregido.