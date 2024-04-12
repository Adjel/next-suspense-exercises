import React from "react";
import { range } from "../../utils";
import { random } from "../../utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

async function VaporExercise() {
  const games = range(0, random(3, 10));
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>
          <span className="num-of-games">{10}</span> games in library
        </p>
      </header>
      <div className="game-grid">
        {games.map((game) => (
          <LibraryGameCardSkeleton key={game} />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
