import { Redirect } from "react-router-dom";

import { db } from "../firebase";

function Profile({ user, userData, getUserData }) {
  const handleUpdateName = () => {
    if (user) {
      const name = prompt("Enter you Name:");
      db.collection("users")
        .doc(user.uid)
        .set({ name: name }, { merge: true })
        .then(() => {
          alert("Name changed!");
          getUserData(user.uid);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container h-100 d-flex flex-column align-items-center">
      {userData ? <h1>Welcome {userData.name}</h1> : null}
      <button onClick={handleUpdateName} className="btn btn-warning my-4">
        Update Name
      </button>
    </div>
  );
}

export default Profile;
