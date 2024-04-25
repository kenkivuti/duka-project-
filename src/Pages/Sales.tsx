import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface Sale {
    id: number;
    pid: number;
    quantity: number;
    created_at: string;
}

const Sales: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const fetchsales = async () => {
        try {
            const apiUrl = 'http://127.0.0.1:5000/sales';
            const Token = localStorage.getItem('Token');
            if (! Token) {
              throw new Error('Token not found');
            }
    
         const response = await axios.get<Sale[]>(apiUrl, {
            headers: {
                'Authorization': `${Token}`,
              }
         })
            setSales(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching products:', error);
          }
        };

          fetchsales();
        },[]);
        

    return (
        <div>
            <h2>Sales</h2>
            <table className='sales-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product id</th>
                        <th>Quantity</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.pid}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Sales;