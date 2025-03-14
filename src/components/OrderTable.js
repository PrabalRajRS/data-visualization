const OrderTable = ({ items }) => (
    <div className='chart-container'>
        <h4>Table Chart</h4>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Type</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item, i) => (
                    <tr key={i}>
                        <td>{item.Item_Name}</td>
                        <td>${item.Item_Price}</td>
                        <td>{item.Quantity}</td>
                        <td>${item.Total_Price}</td>
                        <td>{item.Item_Type || '-'}</td>
                        <td>{item.Rating || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default OrderTable;
