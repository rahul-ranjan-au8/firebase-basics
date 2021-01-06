import { withRouter } from "react-router-dom";

function NotFound({ history }) {
  return (
    <div className="NotFound">
      <h1 className="display-4">Page Not Found</h1>
      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </button>
    </div>
  );
}

export default withRouter(NotFound);
