import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import FicheLogement from "../../pages/FicheLogement/";
import APropos from "../../pages/APropos/";
import Error from "../../pages/Error/";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GlobalStyle from "../GlobalStyle";
import useWindowSize from "../../utils/functions/useWindowSize";

const AppRouter = () => {
  const windowSize = useWindowSize();
  let isDesktop = windowSize.width > 930 ? true : false;

  return (
    <Router>
      <GlobalStyle />
      <Header isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
        <Route
          path="/ficheLogement/:idLogement"
          element={<FicheLogement isDesktop={isDesktop} />}
        />
        <Route path="/APropos" element={<APropos isDesktop={isDesktop} />} />
        <Route path="*" element={<Error isDesktop={isDesktop} />} />
      </Routes>
      <Footer isDesktop={isDesktop} />
    </Router>
  );
};

export default AppRouter;
