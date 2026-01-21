import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
    return (
        <div className="is-loading">
          <Spinner animation="border" style={{ height: "200px" }} />
          <p className="loading-text">Loading Resume Page...</p>
        </div>
      );
};

export default Loading;