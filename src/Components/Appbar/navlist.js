import * as React from "react";
import { Link } from "@mui/joy";
import Other from "./other";

const navlist = [
  "GAME INFO",
  "MEDIA",
  "NEWS",
  "LEADERBOARDS",
  "SUPPORT",
  "OUR SOCIALS",
  "MORE",
];

export default function Navlist() {
  return (
    <div className="">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          {navlist.map((i) => (
            <li className="nav-item m-3">
              <Link underline="none" sx={{ color: "#FFF" }}>
                {i}
              </Link>
            </li>
          ))}
        </ul>
        <Other />
      </div>
    </div>
  );
}
