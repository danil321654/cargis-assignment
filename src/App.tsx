import "./App.css";
import { Header, Sidebar } from "./layout";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Header />
      </main>
    </div>
  );
};

export default App;
