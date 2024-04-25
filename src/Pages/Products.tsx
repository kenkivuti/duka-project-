import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/product.css"; 

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'http://127.0.0.1:5000/product';
        const Token = localStorage.getItem('Token');
        if (! Token) {
          throw new Error('Token not found');
        }

        const response = await axios.get<Product[]>(apiUrl, {
          headers: {
            'Authorization': `${Token}`,
          }
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h3>My Products</h3>
      <div className="table-container"> 
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
