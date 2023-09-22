import React from "react";
import "./Greeting.css";
const Greeting: React.FC = () => {
  return (
    <section className="hello">
      <h1 className="section-name">Hello</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat
        tortor, tincidunt et venenatis eget, malesuada vel velit. Vestibulum
        vitae tortor quis urna placerat convallis id non est. Praesent
        condimentum in ipsum vitae viverra. Nunc vitae arcu nec justo accumsan
        fermentum.
      </p>
    </section>
  );
};
export default Greeting;
