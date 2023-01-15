import "./App.scss";

import { routes } from "consts";
import { Header, Sidebar } from "layout";
import { Routes, Route, Navigate } from "react-router-dom";

export const App = () => (
  <div className="app">
    <Sidebar />
    <main className="content">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/orders" />} />
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
