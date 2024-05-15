import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
      <Outlet />
    </>
  );
};

export default App;
