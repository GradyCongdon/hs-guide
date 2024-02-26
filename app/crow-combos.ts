export const twoP_1 = {
  category: "lights",
  description: "Basic confirm into knockdown off 2p mash",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=18s",
  author: "crow",
  position: "mid-screen",
  properties: ["knockdown"],
  damage: {
    sol: 62,
  },
  notation: "2p > 2p > 6p > 214s",
};

export const twoP_2 = {
  category: "lights",
  description: "Fast RC confirm from 2p",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=23s",
  author: "crow",
  position: "mid-screen",
  properties: ["wall-break"],
  damage: {
    sol: 128,
  },
  notation: "2p > 2p > 6p > 214s > 66RRC~5h > 214k > 5k > 6h > 623h",
};

export const twoP_3 = {
  category: "lights",
  description: "RRC conversion from 2p",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=29s",
  author: "crow",
  position: "mid-screen",
  properties: ["wall-break"],
  damage: {
    sol: 138,
  },
  notation: "2p > 2p > 6p > 214s > RRC > 66 5h > 623h > c.s > 6h > 623h",
};

export const twoP_4 = {
  category: "lights",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=38s",
  author: "crow",
  position: "mid-screen",
  properties: ["wall-break"],
  damage: {
    sol: 134,
  },
  description:
    "RRC conversion from 2p, lower damage more generous with spacing",
  notation:
    "2p > 2p > 6p > 214s > RRC > 66 5[D] > c.s > 5h > 214k > 66 2k > 6h > 623h",
};

export const twoP_5 = {
  category: "lights",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=48s",
  author: "crow",
  position: "back-to-wall",
  properties: ["wall-break"],
  damage: {
    sol: 135,
  },
  description: "RRC conversion from 2p, back to wall",
  notation: "2p > 2p > 6p > 214s > RRC > 66 5h > 623h > 2k > 6h > 623h",
};

export const twoP_6 = {
  category: "lights",
  url: "https://www.youtube.com/watch?v=z1ttonHkq7E&t=48s",
  author: "crow",
  position: "mid-screen",
  description: "WA conversion from 2p",
  notation: "2p > 2p > 6p > 236d > c.s > 2h > 214s > 66 5h > 236k (2) > 623h",
  properties: ["wall-break", "wild-assault"],
  damage: {
    sol: 109,
  },
};

const mts = (timeString) => {
  const [minutes, seconds] = timeString.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

const crowURL = (timestamp) =>
  `https://www.youtube.com/watch?v=z1ttonHkq7E&t=${mts(timestamp)}s`;

export const twoP_7 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:04"),
  position: "mid-screen",
  description: "ch 2p into stronger knockdown",
  notation: "CH 2p > 2k > 2d > dl. 236h",
  properties: ["counter-hit", "knockdown"],
  damage: {
    sol: 51,
  },
};

export const twoP_8 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:07"),
  position: "corner",
  description: "ch 2p corner combo",
  notation: "CH 2p > 6h > 214s > 66 5h > 6h > 623h > c.s > 623h",
  properties: ["counter-hit", "wall-break"],
  damage: {
    sol: 154,
  },
};

export const twoP_9 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:15"),
  position: "corner",
  description:
    "ch 2p corner combo - if you space yourself just right, 5k kara dp hits late in active frames allowing for more damage (This concept works in most dp relaunches but be detailed every single time. Experiment and find out)",
  notation: "CH 2p > 6h > 214s > 66 5k > dc 623h > c.s > 6h > 623h",
  properties: ["counter-hit", "wall-break"],
  damage: {
    sol: 156,
  },
};

export const twoP_10 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:21"),
  position: "corner",
  description:
    "SHOCK STATE ONLY - With shock state, you can go right into 623 for more damage",
  notation: "CH 2p > 6h > 623h > 2k > 6h > 214s > 5h > 214s (whiff) > 623h",
  properties: ["shock-state-required", "counter-hit", "wall-break"],
  damage: {
    sol: 162,
  },
};

export const twoP_11 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:29"),
  position: "mid-screen",
  description: "WA allow for full midscreen conversion off CH 2p",
  notation: "CH 2p > 6h > 236d > 6h > 5k > 6h > 623h > 623h",
  properties: ["counter-hit", "wall-break"],
  damage: {
    sol: 131,
  },
};

export const twoP_12 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:36"),
  position: "back-to-wall",
  description:
    "Back to Wall CH 2p WA conversion. Mostly universal but 2h requies a delay on certain characters",
  notation: "CH 2p > 6h > 236d > 2h (2) > 214k > 5h > 214k",
  properties: ["counter-hit"],
  damage: {
    may: 94,
  },
};

export const twoP_13 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:43"),
  position: "back-to-wall",
  description: "Higher damage character specific conversion",
  characters: ["ky", "sol", "leo", "i-no", "happy chaos", "bridget", "sin"],
  notation: "CH 2p > 6h > 236d > 5h > 5h > 214k",
  properties: ["counter-hit", "character-specific"],
  damage: {
    sol: 93,
  },
};

export const twoP_14 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:49"),
  position: "back-to-wall",
  description: "Character specific corner to corner wall break",
  characters: ["axl", "millia", "ram", "anji"],
  notation: "CH 2p > 6h > 236d > 2h (1) > 214k > 5h > 214k > 66 623h",
  properties: ["counter-hit", "character-specific"],
  damage: {
    axl: 126,
  },
};

export const twoP_15 = {
  category: "lights",
  author: "crow",
  url: crowURL("1:56"),
  position: "mid-screen",
  description:
    "MAX RISC Only - Example of combo in cause you hit someone with 2p while RISC is maxed out (1)",
  notation: "CH 2p > 66 c.s > DC 214s > 66RRC~5h > 623h > c.s > 6h > 623h",
  properties: ["counter-hit", "max-risc"],
  damage: {
    sol: 238,
  },
};

export const twoP_16 = {
  category: "lights",
  author: "crow",
  url: crowURL("2:04"),
  position: "mid-screen",
  description:
    "MAX RISC Only - Example of combo in cause you hit someone with 2p while RISC is maxed out (2)",
  notation:
    "CH 2p > 66 c.s > DC 236236p > 66 2h > 214k > c.s > 6h > 623h > 623h",
  properties: ["counter-hit", "max-risc"],
  damage: {
    sol: 261,
  },
};

export const fiveP_1 = {
  category: "lights",
  author: "crow",
  url: crowURL("2:13"),
  position: "mid-screen",
  description: "Anti air 5p conversion",
  notation: "aa 5p > 66 c.s > dc > c.s > 5h > 214k > 66 5k > 6h > 623h > 623h",
};

export const fiveP_2 = {
  category: "lights",
  author: "crow",
  url: crowURL("2:22"),
  position: "mid-screen",
  description: "Anti air 5p conversion closer to corner",
  notation: "aa 5p > 66 c.s > dc > c.s > 6h > 5k > 6h > 214s >6h >66 623h",
};

export const fiveP_3 = {
  category: "lights",
  author: "crow",
  url: crowURL("2:30"),
  position: "corner",
  description: "Anti air 5p conversion in corner",
  notation: "aa 5p > 66 c.s > dc 214s > 6h > 623h > c.s > 6h > 623h",
};

export const fiveP_4 = {
  category: "lights",
  author: "crow",
  url: crowURL("2:37"),
  position: "mid-screen",
  description: "K buttons confirm into 2d for a knockdown",
  notation: "2k/5k > 2d > dl. 236h",
};

// Skipped some

export const fiveK_1 = {
  category: "lights",
  author: "crow",
  url: crowURL("3:40"),
  position: "mid-screen",
  description: "5k BRC can lead to slump from a fair distance away from corner",
  notation: "5k > dc 66BRC > 2h > 236h > 66 c.s > 2h > 214k > 2k > 6p",
};
export const fiveK_2 = {
  category: "lights",
  author: "crow",
  url: crowURL("3:49"),
  position: "back-to-wall",
  description:
    "STANDING ONLY Due to 5k being jump cancellable, it can have very strong ch conversions",
  notation:
    "5k > 9 j.d > adc > j.p > dl. j.p > c.s > 5h > 236[D] > 2p (whiff) >66 c.s> 5h > 214k > 66 2k > 6h > 623h",
};

// 4:06
//
