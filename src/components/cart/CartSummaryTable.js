export default function CartSummaryTable({ items }) {
  return (
    <table className="cart-summary-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price ($)</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.emoji}</td>
              <td>10</td>
              <td>5</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
