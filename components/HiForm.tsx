import { FunctionComponent } from 'preact';
import { Signal } from "@preact/signals";

// He creado este fichero

// Props
type HiProps = {
    name: Signal<string>;
    surname: Signal<string>;
    check: Signal<boolean>;
}

const HiForm:FunctionComponent<HiProps> = (HiProps) => {

    return (
        <form class="formBox">
          <h3>Say hi hi hi</h3>
          <input type="text" name="nombre" placeholder={"Name"} 
            onFocus={(e)=>HiProps.check.value = false}
            onInput={(e)=>HiProps.name.value = e.currentTarget.value}/>
          <br />

          <input type="text" name="apellido" placeholder={"Last name"} 
            onInput={(e)=>HiProps.surname.value = e.currentTarget.value} 
            onFocus={(e)=>HiProps.check.value = false} // Para que se repinte el shower
          />
          <br />
        </form>
    );
}

export default HiForm;