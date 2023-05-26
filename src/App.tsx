import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Episode, Home, Podcast } from "@/pages";
import { Header } from "@/components";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="podcast/:podcastId" element={<Podcast />} />
          <Route path="podcast/:podcastId/episode/:episodeId" element={<Episode />} />
        </Routes>
      </Router></Provider>

  )
}

export default App;
