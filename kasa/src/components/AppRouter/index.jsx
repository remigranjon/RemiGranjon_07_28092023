import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import FicheLogement from "../../pages/FicheLogement/";
import APropos from "../../pages/APropos/";
import Error from "../../pages/Error/";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GlobalStyle from "../GlobalStyle";

const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficheLogement/:idLogement" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
