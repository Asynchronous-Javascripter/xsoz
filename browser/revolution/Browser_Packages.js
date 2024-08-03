import * as THREE from "three";
import * as cannon from "cannon";
import MILLIFY from "millify";
import cannonDebugger from "cannon-es-debugger";
import gsap from "gsap";

const CANNON = cannon.default;
const millify = MILLIFY.default;

export {
  THREE,
  CANNON,
  millify,
  cannonDebugger,
  gsap
}