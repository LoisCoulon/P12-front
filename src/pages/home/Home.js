import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main>
      <NavLink to={`dashboard/12`}>
        <button>Go to USER 12</button>
      </NavLink>
      <NavLink to={`dashboard/18`}>
        <button>Go to USER 18</button>
      </NavLink>
    </main>
  );
}

export default Home;
