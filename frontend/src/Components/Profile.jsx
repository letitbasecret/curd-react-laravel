import Header from "./Header";

export default function Profile() {
  return (
    <div>
      <Header />
      <div className="col-lg-4 offse-lg-4">
        <div className="card  col-lg-6 offset-lg-4 m-5 ">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
