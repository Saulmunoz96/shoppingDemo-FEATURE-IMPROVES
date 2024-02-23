import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />}></Route>
        ))}
        <Route path="*" element={<Navigate to="/notroute" />} />
      </Routes>
    </BrowserRouter>
  );
};
