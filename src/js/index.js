import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/Roman_Artemyev_CV.pdf";
import tags from "./tags";

export default function initApp() {
  initSr();
  initTilt();
  tags();
  addResume(resume);
}
