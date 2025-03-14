const OrderSummary = ({ order }) => (
    <div className='chart-container'>
      <h3 style={{marginBottom: 10, color: 'black', fontWeight: "900"}}>Order Summary</h3>
      <p><strong>Order ID:</strong> {order.Order_ID}</p>
      <p><strong>Customer:</strong> {order.Customer_Name}</p>
      <p><strong>Phone:</strong> {order.Customer_Phone}</p>
      <p><strong>Address:</strong> {order.Customer_Address}</p>
      <p><strong>Delivery Person:</strong> {order.Delivery_Person}</p>
      <p><strong>Status:</strong> {order.Order_Status} ({order.Delivery_Status})</p>
    </div>
  );
  
  export default OrderSummary;
  