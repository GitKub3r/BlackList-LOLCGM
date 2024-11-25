import "./App.css";
import { Header } from "./components/header/header";
import { Link } from "./types/Link";

const HEADER_TITLE = "BlackList";
const LINKS: Link[] = [
  {
    name: "Link1",
    src: "#",
  },

  {
    name: "Link2",
    src: "#",
  },

  {
    name: "Link3",
    src: "#",
  },
];

function App() {
  return (
    <>
      <Header title={HEADER_TITLE} linkSRC={LINKS} />
    </>
  );
}

export default App;
