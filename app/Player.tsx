"use client";
import { useState } from "react";

type PlayerProps = {
  embed: string;
};

export const Player = ({ embed }: PlayerProps) => {
  const [playing, setPlaying] = useState(true);
  if (!playing) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: 360, width: 640, cursor: "pointer" }}
        onClick={() => setPlaying(true)}
      >
        Play
      </div>
    );
  }
  return (
    <iframe
      src={embed}
      frameBorder="0"
      allowFullScreen
      className="aspect-video width-full"
    />
  );
};

// export const Play = ({ iframeId, timeStamp }) => {
//   const seek = () => {
//     const player = new YT.Player(iframeId, {
//       events: {
//         onReady: onPlayerReady,
//       },
//     });
//     console.log("playerP", player);
//     player.seekTo(timeStamp, true);
//   };
//   function onPlayerReady(event) {
//     document.getElementById(iframeId).style.borderColor = "#FF6D00";
//   }
//   return <button onClick={seek}>Play</button>;
// };

// export const Player2 = () => {
//   const thing = () => {
//     console.log("thing");
//     const iframeId = "crow-guide";
//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new YT.Player(iframeId, {
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//       console.log("player", window.player);
//     };
//     function onPlayerReady(event) {
//       document.getElementById(iframeId).style.borderColor = "#FF6D00";
//     }
//     function changeBorderColor(playerStatus) {
//       var color;
//       if (playerStatus == -1) {
//         color = "#37474F"; // unstarted = gray
//       } else if (playerStatus == 0) {
//         color = "#FFFF00"; // ended = yellow
//       } else if (playerStatus == 1) {
//         color = "#33691E"; // playing = green
//       } else if (playerStatus == 2) {
//         color = "#DD2C00"; // paused = red
//       } else if (playerStatus == 3) {
//         color = "#AA00FF"; // buffering = purple
//       } else if (playerStatus == 5) {
//         color = "#FF6DOO"; // video cued = orange
//       }
//       if (color) {
//         document.getElementById(iframeId).style.borderColor = color;
//       }
//     }
//     function onPlayerStateChange(event) {
//       changeBorderColor(event.data);
//     }
//   };

//   return (
//     <>
//       <iframe
//         id="crow-guide"
//         src={"https://www.youtube.com/embed/z1ttonHkq7E"}
//         frameBorder="0"
//         allowFullScreen
//         width={640}
//         height={360}
//       />
//       <Script src="https://www.youtube.com/iframe_api" onReady={thing} />
//     </>
//   );
// };

// export const Player3 = () => {
//   const thing = () => {
//     console.log("fuck");
//     const iframeId = "crow-guide";
//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new YT.Player("z1ttonHkq7E", {
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//       console.log("crow", window.player);
//     };
//     function onPlayerReady(event) {
//       document.getElementById(iframeId).style.borderColor = "#FF6D00";
//     }
//     function onPlayerStateChange(event) {
//       console.log("statet");
//     }
//   };
//   return (
//     <>
//       <div id="crow-guide"></div>
//       <Script src="https://www.youtube.com/iframe_api" onReady={thing} />
//     </>
//   );
// };
