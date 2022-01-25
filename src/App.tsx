import React from "react";
import AppRouter from "./AppRouter";
import Header from "./Components/Common/Header";

function App() {
  return (
    <div>
      <AppRouter>
        <Header />
      </AppRouter>
    </div>
  );
}

export default App;
