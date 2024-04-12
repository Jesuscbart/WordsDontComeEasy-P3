import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Fragment } from "preact/jsx-runtime";
import Axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";

type LoverT = {
  _id: string;
  foto: string;
};

type PokemonT = {
  _id: string;
  image: string;
};

export const handler: Handlers = {    // Handler que contiene un GET
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, { pageData: LoverT[] | PokemonT[] }>,  // Contexto de la página
  ) => {
    const { pagesection } = ctx.params; // Contexto con propiedad params con los parámetros de la URL
    
    
    if (pagesection === "lovers") {                   // Si la seccion de la URL es "lovers"
      const getData = await Axios.get<LoverT[]>(      // Hace una petición GET a la URL de la API
        `https://lovers.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });  // Renderiza la página con los datos de la API
    } 
    
    else if (pagesection === "pokemons") {            // Si la seccion de la URL es "pokemons"
      const getData = await Axios.get<PokemonT[]>(    // Hace una petición GET a la URL de la API
        `https://lospoquimones.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });  // Renderiza la página con los datos de la API
    } 
    
    else if (pagesection === "superheroes") {         // Si la seccion de la URL es "superheroes"
      const getData = await Axios.get<PokemonT[]>(    // Hace una petición GET a la URL de la API
        `https://supermondongo.deno.dev/`,
      );
      return ctx.render({ pageData: getData.data });  // Renderiza la página con los datos de la API
    } 
    
    else {
      return ctx.render({ pageData: [] });  // Si no es ninguna de las anteriores, renderiza la página sin datos
    }
  },
};

const LoversPage = (props: PageProps<{ pageData: LoverT[] | PokemonT[] }>) => { // Componente que recibe props que contienen los datos
  const lovers = props.data.pageData; // Array PageData que contiene las props y se asigna a la variable lovers
  const partLength = lovers.length / 3; // Se divide el array en 3 partes
  const firstPart = lovers.slice(0, partLength); // Se asigna la primera parte a firstPart
  const secondPart = lovers.slice(partLength, partLength * 2); // Se asigna la segunda parte a secondPart
  const thirdPart = lovers.slice(partLength * 2); // Se asigna la tercera parte a thirdPart     

  return (
    <Fragment>
      <div class={`titleSection ${props.url.pathname.slice(1)}`}>
        {props.url.pathname.slice(1) === "lovers" &&
          <h1 class="modernist">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "pokemons" &&
          <h1 class="fifties">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "superheroes" &&
          <h1 class="ninetyfive">{props.url.pathname.slice(1)}</h1>}
      </div>
      <div class="columns">
        <div class="column column-reverse">
          {secondPart.map((lover, n) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).image}
              key={n}
            />
          ))}
        </div>
        <div class="column">
          {firstPart.map((lover, n) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).image}
              key={n}
            />
          ))}
        </div>
        <div class="column column-reverse">
          {thirdPart.map((lover, n) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).image}
              key={n}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LoversPage;
