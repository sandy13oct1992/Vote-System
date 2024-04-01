import React, { useState } from 'react';

const EComerceSite1 = () => {
  const categories = ['Electronics', 'Food', 'Skincare'];

  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  console.log("executing");
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      category,
      productName,
      price,
      id: new Date().getTime(),
    };

    // Update the products state with the new product
    setProducts([...products, newProduct]);

    // Reset the form fields
    setCategory('');
    setProductName('');
    setPrice('');
  };

  const handleDelete = (productId) => {
    // Filter out the product with the given ID
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update the products state without the deleted product
    setProducts(updatedProducts);
  };

  const handleEdit = (productId) => {
    // Find the product with the given ID
    const productToEdit = products.find((product) => product.id === productId);

    // Set the form fields with the values from the product to edit
    setCategory(productToEdit.category);
    setProductName(productToEdit.productName);
    setPrice(productToEdit.price);

    // Delete the product from the list
    handleDelete(productId);
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Products</h2>
      {categories.map((category1) => (
        <div key={category1}>
          <h3>{category1}</h3>
          <ul>
            {products
              .filter((product) => product.category === category1)
              .map((product) => (
                <li key={product.id}>
                  {product.productName} - ${product.price}
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EComerceSite1;