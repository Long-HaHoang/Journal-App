import "./App.css";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import EntryForm from "./componet/EntryForm";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className="app__main">
        <EntryForm></EntryForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
