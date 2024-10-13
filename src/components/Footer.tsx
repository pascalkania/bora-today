import React from "react";

export default function Footer() {
  return (
    <footer className="absolute w-full py-5 text-center">
      <p className="text-balance text-sm leading-loose text-muted-foreground">
        Built by{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Pascal Kania
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/pascalkania/bora-today"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
