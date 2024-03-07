import List from "../components/List";
export default function Home() {
  return (
    <>
      <div className="page corners padding transp">
        <header>
          <nav className="nav flex-column flex-sm-row">
            <a className="flex-sm-fill flex-grow-1 text-sm-left nav-link active">
              <h1>Lumia</h1>
            </a>
          </nav>
        </header>
        <main>
          <List />
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
