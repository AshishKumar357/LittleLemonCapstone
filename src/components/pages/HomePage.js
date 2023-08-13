import React from "react";
import Heading from "../sections/headingPage/Heading";
import Specials from "../sections/headingPage/Special";
import Testimonials from "../sections/headingPage/Testimonials";
import About from "../sections/headingPage/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
