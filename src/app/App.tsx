import "./App.scss";

import { HomePage, Layout, SeatsPage } from "../pages";
import { Route, Routes } from "react-router-dom";
import { TicketsPage } from "../pages/tickets/ui/TicketsPage";
import { Trains } from "../pages/tickets/ui/trains";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tickets/" element={<TicketsPage />}>
            <Route index element={<Trains />} />
            <Route path="pick-seats" element={<SeatsPage />} />
            <Route path="passengers" element={<p>passengers!</p>} />
            <Route path="payment" element={<p>pay pay pay!</p>} />
            <Route path="checkout" element={<p>checking out!</p>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
