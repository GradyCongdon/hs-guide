import * as combos from "./crow-combos";

const makeEmbed = (url: string) =>
  url
    .replace(".com/watch?v=", ".com/embed/")
    .replace("&t=", "?start=")
    .replace(/s$/, "") + "&rel=0&enablejsapi=1&autoplay=1";

type ComboIn = {
  url: string;
  notation: string;
  description: string;
};
type Combo = ComboIn & {
  embed: string;
  timestamp: number;
  starter: string;
};
const c = (combo: ComboIn): Combo => ({
  ...combo,
  embed: makeEmbed(combo.url),
  timestamp: parseInt(combo.url.split("&t=")[1], 10),
  starter: combo.notation.split(" ")[0],
});

export default function Home() {
  const comboList = Object.entries(combos).map(([_, combo]: [any, ComboIn]) =>
    c(combo)
  );
  comboList.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <p>Crow Guide</p>
      {comboList.map(({ url, notation, description, embed, timestamp }) => (
        <div key={description} className="flex flex-col my-8 text-lg">
          <a href={url}>
            <h1 className="text-mono">{notation}</h1>
          </a>
          <h2>{description}</h2>
        </div>
      ))}
    </main>
  );
}
