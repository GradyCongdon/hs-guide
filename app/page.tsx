import * as combos from "./crow-combos";

const makeEmbed = (url: string) =>
  url
    .replace(".com/watch?v=", ".com/embed/")
    .replace("&t=", "?start=")
    .replace(/s$/, "") + "&rel=0&enablejsapi=1&autoplay=1";

const c = (
  combo:
    | {
        category: string;
        description: string;
        url: string;
        author: string;
        position: string;
        properties: string[];
        damage: { sol: number };
        notation: string;
      }
    | {
        category: string;
        description: string;
        url: string;
        author: string;
        position: string;
        properties: string[];
        damage: { sol: number };
        notation: string;
      }
    | {
        category: string;
        description: string;
        url: string;
        author: string;
        position: string;
        properties: string[];
        damage: { sol: number };
        notation: string;
      }
    | {
        category: string;
        url: string;
        author: string;
        position: string;
        properties: string[];
        damage: { sol: number };
        description: string;
        notation: string;
      }
    | {
        category: string;
        url: string;
        author: string;
        position: string;
        properties: string[];
        damage: { sol: number };
        description: string;
        notation: string;
      }
    | {
        category: string;
        url: string;
        author: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { may: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        characters: string[];
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        characters: string[];
        notation: string;
        properties: string[];
        damage: { axl: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
        properties: string[];
        damage: { sol: number };
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
    | {
        category: string;
        author: string;
        url: string;
        position: string;
        description: string;
        notation: string;
      }
) => ({
  ...combo,
  embed: makeEmbed(combo.url),
  timestamp: parseInt(combo.url.split("&t=")[1], 10),
  starter: combo.notation.split(" ")[0],
});

export default function Home() {
  const comboList = Object.entries(combos).map(([name, combo]) => c(combo));
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
