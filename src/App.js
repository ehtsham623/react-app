import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  const age = 24;
  const myelement = <h1>{age < 20 ? "I am teen ager" : "I am adult"}</h1>;
  return (
    <div className="App">
      <center>
        <Header headerTitle="Props Example" />
        <Body bodyHeading={"Body heading"} bodyText={"This is body text"} />
        <h1>Hello World</h1>
        <p>{myelement}</p>
        <Footer />
      </center>
    </div>
  );
};

export default App;

const Footer = () => {
  return (
    <div>
      <h2>component in component example</h2>
    </div>
  );
};
