import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Episode, Home, Podcast } from "@/pages";
import { Header } from "@/components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcast" element={<Podcast />}>
          <Route path="episode" element={<Episode />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
