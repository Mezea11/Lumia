const List = () => {
  return (
    <div>
      <div className="lamps">
        <div className="product clearfix">
          <img src="https://miljogarden.se/wp-content/uploads/2022/02/Mirror-ball-gold-taklampa-pendel-polykarbonat-olika-storlekar-Tom-Dixon.jpg?q=85&amp;w=670&amp;h=447&amp;dpr=2" />
          <div className="content">
            <h2>Bordslampa i guld</h2>
            <p>Mått Ø 55 cm, höjd 30 cm.</p>
            <button data-click="buy">Köp för 6900 kr</button>
          </div>
        </div>
        <div className="product clearfix">
          <img src="https://www.ikea.com/se/en/images/products/nymane-led-ceiling-lamp-white__0880019_pe659686_s5.jpg?q=85&amp;w=670&amp;h=447&amp;dpr=2" />
          <div className="content">
            <h2>Vit taklampa</h2>
            <p>Mått Ø 25 cm, höjd 20 cm.</p>
            <button data-click="buy">Köp för 2500 kr</button>
          </div>
        </div>
        <div className="product clearfix">
          <img src="https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&amp;w=670&amp;h=447&amp;dpr=2" />
          <div className="content">
            <h2>Vit golvlampa</h2>
            <p>Mått Ø 15 cm, höjd 200 cm.</p>
            <button data-click="buy">Köp för 1780 kr</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
