import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function InvoiceItem(props) {
  // Function to handle changes in each field
  const onInputChange = (event, id) => {
    const { name, value } = event.target;
    props.onItemizedItemEdit({ target: { id, name, value } });
  };

  return (
    <Table bordered className="mb-5">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={item.id}>
            <td>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={(e) => onInputChange(e, item.id)}
                className="form-control"
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e) => onInputChange(e, item.id)}
                className="form-control"
              />
            </td>
            <td>
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => onInputChange(e, item.id)}
                className="form-control"
              />
            </td>
            <td>
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => onInputChange(e, item.id)}
                className="form-control"
              />
            </td>
            <td>{(item.quantity * item.price).toFixed(2)}</td>
            <td>
              <Button variant="danger" onClick={() => props.onRowDel(item)}>Delete</Button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="6">
            <Button variant="primary" onClick={props.onRowAdd}>Add Item</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InvoiceItem;
