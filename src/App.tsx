import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "consts";
import { Header, Sidebar } from "layout";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Header />
        <Routes>
          {routes.map(({ path, Component, subroutes }) => (
            <Route key={path} path={path}>
              <Route path="" element={<Component />} />
              {subroutes?.map(
                ({ path: subRoutePath, Component: SubRouteComponent }) => (
                  <Route
                    key={subRoutePath}
                    path={subRoutePath}
                    element={<SubRouteComponent />}
                  />
                )
              )}
            </Route>
          ))}
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
