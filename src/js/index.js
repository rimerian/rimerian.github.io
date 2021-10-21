import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/Roman_Artemyev_CV.pdf";
import resumeRu from "../assets/Roman_Artemyev_CV_RU.pdf";
import tags from "./tags";

export default function initApp() {
  initSr();
  initTilt();
  tags();
  //addResume(resume);
}
