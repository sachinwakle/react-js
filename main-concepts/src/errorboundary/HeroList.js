import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

function HeroList() {
  return (
    <div>
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default HeroList;
