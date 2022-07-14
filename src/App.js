import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavToggle from "./components/NavToggle/NavToggle";
import { useState } from "react";
import { MathJaxContext } from "better-react-mathjax";

function App() {
  const [mobileNav, setMobileNav] = useState(true);
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };

  return (
    <MathJaxContext version={3} config={config}>
      <>
        <NavToggle mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <Main />
        <Footer />
        <BackToTop />
      </>
    </MathJaxContext>
  );
}

export default App;
