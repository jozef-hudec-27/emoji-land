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
          const [emojiObj, quantity] = item

          return (
            <tr key={i}>
              <td>{emojiObj.emoji}</td>
              <td>{quantity}</td>
              <td>{emojiObj.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
