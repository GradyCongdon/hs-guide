import * as combos from "./crow-combos";
import { Player } from "./Player";

const makeEmbed = (url: string) =>
  url
    .replace(".com/watch?v=", ".com/embed/")
    .replace("&t=", "?start=")
    .replace(/s$/, "") + "&rel=0&enablejsapi=1&autoplay=1";

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

const fixNotation = (notation: string) => notation.replace(/> \[/, ">&nbsp;");

const c = (combo: ComboIn): Combo => ({
  ...combo,
  embed: combo.url.match("embed")
    ? combo.url + "&playsInline=1"
    : makeEmbed(combo.url),
  timestamp: parseInt(combo.url.split("&t=")[1], 10),
  starter: combo.notation.split(" ")[0],
  notation: fixNotation(combo.notation),
});

export default function Home() {
  const comboList = Object.entries(combos).map(([_, combo]: [any, ComboIn]) =>
    c(combo)
  );
  comboList.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <main className="flex min-h-screen flex-col justify-between py-24 px-4 md:px-8">
      <p>Crow Guide</p>
      <section className="flex flex-col">
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
