"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c Hey. %c\n\nYou opened DevTools — I respect it.\nBuilt by Gahan Patel · patel.gah@northeastern.edu\ngithub.com/gahanpatel\n\nFeel free to poke around.",
      "background:#d4a020;color:#1c1813;font-size:14px;font-weight:700;padding:3px 8px;border-radius:3px;",
      "color:#9a9086;font-size:12px;line-height:1.8;"
    );
  }, []);

  return null;
}
