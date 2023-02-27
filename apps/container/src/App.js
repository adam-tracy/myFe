import React from "react";
// Funky, use "mount" if marketing has "export default", use "{mount}" if marketing has "export {mount}"
import MarketingApp from "./components/MarketingApp";

export default () => {
  return <div>
    <h1>Hi there!</h1>
    <hr/>
    <MarketingApp/>
  </div>;
}