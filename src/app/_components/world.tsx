"use client"
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";

import { BunnySprite } from "./bunny-sprite";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Graphics,
  Sprite,
});

import { type ReactElement } from "react";

export default function World(): ReactElement {
  return (
    <Application>
      <BunnySprite />
    </Application>
  );
}
