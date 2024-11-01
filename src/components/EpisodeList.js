import React from "react";

const EpisodeList = ({ episodes, selectedEpisode, onSelect, onDeselect }) => {
  return (
    <ul className="episode-list list-none pb-10  ">
      {episodes.map((episode) => (
        <li
          key={episode.id}
          className={
            selectedEpisode === episode.id
              ? "selected border-[3px] bg-slate-300 rounded-2xl border-black cursor-pointer p-2"
              : "cursor-pointer border-b p-2"
          }
          onClick={() => {
            if (selectedEpisode === episode.id) {
              onDeselect();
            } else {
              onSelect(episode.id, episode.name);
            }
          }}
        >
          {episode.name}
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
