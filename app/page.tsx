"use client";
import { useState } from "react";
import * as _combos from "./crow-combos";
import { Player } from "./Player";

const combos = _combos as Record<string, ComboIn>;

type ComboIn = {
  url: string;
  notation: string;
  description: string;
  properties?: string[];
  position: string;
  type?: string;
};
type Combo = ComboIn & {
  embed: string;
  timestamp: number;
  starter: string;
};

const makeEmbed = (url: string) =>
  url
    .replace(".com/watch?v=", ".com/embed/")
    .replace("&t=", "?start=")
    .replace(/s$/, "") + "&rel=0&enablejsapi=1&autoplay=1";

const fixNotation = (notation: string) => notation.replace(/> \[/, ">&nbsp;");

const c = (combo: ComboIn): Combo => ({
  ...combo,
  embed: combo.url.match("embed")
    ? combo.url + "&playsInline=1"
    : makeEmbed(combo.url),
  timestamp: parseInt(combo.url.split("&t=")[1], 10),
  starter: combo.notation.split(">")[0],
  notation: fixNotation(combo.notation),
});

const Selector = ({
  options,
  label,
  setter,
  value,
}: {
  options: string[];
  label: string;
  setter: (value: string) => void;
  value: string;
}) => {
  return (
    <div className="flex justify-between align-center my-1">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setter(e.target.value)}
      >
        <option value="">All</option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function Home() {
  const [starter, setStarter] = useState("");
  const [position, setPosition] = useState("");
  const [property, setProperty] = useState("");
  const clear = () => {
    setStarter("");
    setPosition("");
    setProperty("");
  };
  const filters = (combo: Combo) => {
    if (starter !== "" && combo.starter !== starter) return false;
    if (position !== "" && combo.position !== position) return false;
    if (
      property !== "" &&
      (combo.properties?.indexOf(property) === -1 || !combo.properties)
    )
      return false;
    return true;
  };
  const starters = Object.values(combos)
    .reduce((acc, combo) => {
      const starter = combo.notation.split(">")[0];
      if (acc.indexOf(starter) === -1) acc.push(starter);
      return acc;
    }, [] as string[])
    .sort();
  const properties = Object.values(combos)
    .reduce((acc, combo) => {
      if (combo.properties)
        combo.properties.forEach((property) => {
          if (acc.indexOf(property) === -1) acc.push(property);
        });
      return acc;
    }, [] as string[])
    .sort();
  const positions = Object.values(combos).reduce((acc, combo) => {
    if (acc.indexOf(combo.position) === -1) acc.push(combo.position);
    return acc;
  }, [] as string[]);

  const comboList = Object.values(combos)
    .map((combo: ComboIn) => c(combo))
    .filter((x) => filters(x));
  comboList.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <main className="flex min-h-screen flex-col justify-between pt-2 pb-24 px-4 md:px-8">
      <div className="flex flex-row justify-between align-middle mb-4">
        <h1>Crow Guide</h1>
        <button onClick={() => clear()} className="text-blue-500 text-md">
          Clear
        </button>
      </div>
      <div className="border-b pb-2">
        <Selector
          setter={setStarter}
          value={starter}
          options={starters}
          label={"Starter"}
        />
        <Selector
          setter={setPosition}
          value={position}
          options={positions}
          label={"Position"}
        />
        <Selector
          setter={setProperty}
          value={property}
          options={properties}
          label={"Property"}
        />
      </div>
      <section className="flex flex-col">
        {comboList.length === 0 && (
          <div className="text-center h-screen pt-40 align-middle">
            <span className="text-lg italic">No results</span>
            <br />
            <button
              onClick={() => clear()}
              className="text-blue-500 mt-2 text-xl"
            >
              Clear
            </button>
          </div>
        )}
        {comboList.map(
          ({
            url,
            notation,
            description,
            embed,
            type,
            position,
            properties,
          }) => (
            <div key={description} className="flex flex-col py-4">
              <a href={url}>
                <h1 className="text-mono">
                  <kbd className="bg-slate-800 px-2 leading-relaxed text-xl rounded-md">
                    {notation}
                  </kbd>
                </h1>
              </a>
              <h2 className="text-sm">{description}</h2>
              <div className="flex flex-row">
                <span className="text-xs bg-indigo-100 text-black px-2 mr-1 my-2 rounded-md">
                  {position}
                </span>
                {properties &&
                  properties.map((property) => (
                    <span
                      key={property}
                      className="text-xs bg-violet-950 px-2 mr-1 my-2 rounded-md"
                    >
                      {property.replaceAll("-", " ")}
                    </span>
                  ))}
              </div>
              {type === "clip" && <Player embed={embed} />}
            </div>
          )
        )}
      </section>
    </main>
  );
}
