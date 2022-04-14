import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
//import ExportExample from "./exportExample/ExportExample";
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ background: "white" }}>
        <Header headerTitle="Ehtsham" />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
