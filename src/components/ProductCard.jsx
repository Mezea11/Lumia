export default function ProductCard() {
  return (
    <>
      <div className="lamps">
        <div className="product clearfix">
          <img src="{product.image}" alt="{product.name}" />
          <div className="content">
            <h2>Bordslampa i guld</h2>
            <p>Mått Ø 55 cm, höjd 30 cm.</p>
            <button data-click="buy">Köp för 6900 kr</button>
          </div>
        </div>
      </div>
    </>
  );
}
