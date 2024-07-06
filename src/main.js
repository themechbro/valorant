import * as React from "react";
import Agent from "./Components/Agents/agents";
import Diff from "./Components/Diff/diff";
import Hero from "./Components/Hero/hero";
import Latest from "./Components/Latest/latestsection";
import Maps from "./Components/Maps/Maps";
import WerValo from "./Components/Wervalo/wervalo";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Latest />
      <Diff />
      <WerValo />
      <Agent />
      <Maps />
    </div>
  );
}
