import { auth } from "../firebase";

function NavBar({ user }) {
  const handleLogout = () => {
    auth
      .signOut()
      .then((res) => {
        alert("logged out!");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="NavBar d-flex align-items-center justify-content-between px-5">
      <h2 className="text-white">React + Firebase</h2>

      {user ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : null}
    </div>
  );
}

export default NavBar;
