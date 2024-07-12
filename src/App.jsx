import React, { useState } from "react";
import HomePage from "./components/HomePage";
import CustomPage from "./components/CustomPage";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <HomePage setUser={setUser} />
      ) : (
        <CustomPage />
      )}
    </div>
  );
}

export default App;
