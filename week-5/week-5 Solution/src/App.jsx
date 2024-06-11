import { useState } from "react";
import "./App.css";
import { BusinessCard } from "./BusinessCard";

function App() {
  const [count, setCount] = useState(0);
  const interests = ["Problem Solving", "Open Source", "Web Dev"];

  return (
    <div>
      <BusinessCard
        name={"Saksham Khare"}
        description={"Self taught programmer. 100xDevs Cohort 2.0"}
        interests={interests}
        linkedIn={"https://www.linkedin.com/in/sakshamkhare/"}
        github={"https://github.com/tyrex1829"}
        twitter={"https://x.com/_tyrex__"}
      />
    </div>
  );
}

export default App;
