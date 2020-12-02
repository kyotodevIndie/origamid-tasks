import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

export default function Task3() {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <h4>Task 3</h4>
      <Header />
      <Component />
    </section>
  );
}
