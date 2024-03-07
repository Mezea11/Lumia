import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="page corners padding transp">
        <header>
          <Link to={"/"}>
            <h1>Lumia</h1>
          </Link>
          <nav className="nav flex-column flex-sm-row">
            <Link to="/contact"></Link>
            <a className="text-sm-right nav-link active">Kontakta oss</a>
          </nav>
        </header>
        <main>
          <div className="contact">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Din email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="namn@exempel.se"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Ditt meddelande
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => alert("Du har klickat på knappen")}
              >
                Skicka ditt meddelande
              </button>
            </div>
          </div>
        </main>
        <div className="basket">
          <div className="overlay" data-click="hide"></div>
          <div id="cart" className="jumbotron corners padding transp">
            <h3>Varukorg</h3>
            <ul>
              <li className="total">
                Total <span>0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
