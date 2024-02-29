"use client";
import Image from "next/image";
import { useState } from "react";

import * as _combos from "./crow-combos";
import { Player } from "./Player";

import sixK from "./6k.png";
import externalLink from "./external-link.svg";

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
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        value={value}
        className="border text-sm rounded-lg block p-1 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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

const Helper = () => {
  const [notationText, setNotationText] = useState("");
  const [embed, setEmbed] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [category, _setCategory] = useState("c.s - slash of the close variety");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("mid-screen");
  const notationOutput = notationText
    .replaceAll(">", " > ")
    .replaceAll("  ", " ")
    .replaceAll("adc", "ADC");
  const example = `export const c_${embed?.split("clip=")[1]} = {
    category: "${category}",
    author: "crow",
    type: "clip",
    timestamp: mts("${timestamp}"),
    url: "${embed}",
    position: "${position}",
    properties: [" ", " "],
    description: "${description}",
    notation: "${notationText}"
}`;
  if (process.env.NODE_ENV !== "development") return <div></div>;
  return (
    <div className="grid" style={{ gridTemplateColumns: "90px 200px" }}>
      <label
        htmlFor="position"
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        position
      </label>
      <input
        type="text"
        className="border rounded-lg ml-auto p-1 text-black"
        onChange={(e) => setPosition(e.target.value)}
        placeholder={position}
      />

      <label
        htmlFor="notation"
        className="block text-sm mr-8 font-medium text-white"
      >
        notation
      </label>
      <input
        type="text"
        className="border rounded-lg ml-auto p-1 text-black"
        onChange={(e) => setNotationText(e.target.value)}
      />

      <label
        htmlFor="description"
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        description
      </label>
      <input
        type="text"
        className="border rounded-lg ml-auto p-1 text-black"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label
        htmlFor="timestamp"
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        timestamp
      </label>
      <input
        type="text"
        className="border rounded-lg ml-auto p-1 text-black"
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <label
        htmlFor="embed"
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        embed
      </label>
      <input
        type="text"
        className="border rounded-lg ml-auto p-1 text-black"
        onChange={(e) => setEmbed(e.target.value)}
      />

      {/* <label
        htmlFor="category"
        className="block text-sm width-xl mr-8 font-medium text-white"
      >
        category
        <input
          type="text"
          className="border rounded-lg ml-auto p-1 text-black"
          onChange={(e) => setCategory(e.target.value)}
        />
      </label> */}
      <pre>Crow - {notationOutput}</pre>
      <br />
      <pre>{example}</pre>
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
    <main className="flex min-h-screen flex-col justify-between pt-2 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
      <div className="flex flex-row justify-between align-middle mb-4">
        <h1>
          heckscape&apos;s guide to Crow&apos;s
          <i> GGST Ky Season 3 Combo Guide (as of version 1.30)</i>
        </h1>
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
      <Helper />
      <section className="flex flex-col min-h-screen">
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
                <h1 className="mt-4 mb-1 -ml-2 flex align-center">
                  <kbd className="bg-slate-800 px-2 leading-relaxed text-xl rounded-md">
                    {notation}
                  </kbd>
                  <Image
                    width={24}
                    height={24}
                    className="invert ml-1"
                    src={externalLink}
                    alt="external link"
                  />
                </h1>
              </a>
              <h2 className="py-1">{description}</h2>
              <div className="flex flex-row mb-2">
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
      <div
        className="relative mx-auto"
        style={{ transform: "scale(.5) translateX(62.5px)" }}
      >
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{
            position: "absolute",
            opacity: 0.1,
            transform: "translateX(-125px) scale(1.2)",
          }}
        />
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{
            position: "absolute",
            opacity: 0.2,
            transform: "translateX(-100px) scale(1.16)",
          }}
        />
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{
            position: "absolute",
            opacity: 0.3,
            transform: "translateX(-75px) scale(1.12)",
          }}
        />
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{
            position: "absolute",
            opacity: 0.5,
            transform: "translateX(-50px) scale(1.08)",
          }}
        />
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{
            position: "absolute",
            opacity: 0.6,
            transform: "translateX(-25px) scale(1.02)",
          }}
        />
        <Image
          src={sixK}
          alt="k k k k k k"
          style={{ transform: "translateX(0) scale(.95)" }}
        />
      </div>
    </main>
  );
}
