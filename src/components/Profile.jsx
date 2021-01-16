import { Redirect } from "react-router-dom";

import { db } from "../firebase";

function Profile({ user, userData, getUserData }) {
  const handleUpdateName = () => {
    if (user) {
      const name = prompt("Enter you Name:");
      if (name) {
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
    }
  };

  const handleUpdateAge = () => {
    if (user) {
      const age = prompt("Enter you Age:");
      if (age) {
        db.collection("users")
          .doc(user.uid)
          .set({ age: age }, { merge: true })
          .then(() => {
            alert("Age changed!");
            getUserData(user.uid);
          })
          .catch((err) => {
            alert(err);
          });
      }
    }
  };

  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container h-100 d-flex flex-column align-items-center">
      {userData ? (
        <>
          <h1>Welcome {userData.name}</h1>
          <h1>Age: {userData.age}</h1>{" "}
        </>
      ) : null}
      <button onClick={handleUpdateName} className="btn btn-warning my-4">
        Update Name
      </button>
      <button onClick={handleUpdateAge} className="btn btn-warning my-4">
        Update Age
      </button>
    </div>
  );
}

export default Profile;
