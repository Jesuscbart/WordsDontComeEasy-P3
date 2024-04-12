import { Signal } from "@preact/signals";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

// Le he pasado el ShowerProps
type ShowerProps = {
  name: Signal<string>;
  surname: Signal<string>;
};

const Shower: FunctionalComponent<ShowerProps> = (Shower) => {
  return (
    <div class="vintage__container">
      <h1 class="vintage vintage__top">{Shower.name.value} {Shower.surname.value}</h1>
    </div>
  );
};

export default Shower;


