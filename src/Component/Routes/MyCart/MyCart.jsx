import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
    const loadedProductData = useLoaderData();
    const [remainingData, setRemainingData] = useState(loadedProductData);

    const handleDelete = id =>{
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/selectedProducts/${id}`, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            if (data.deleteCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
            }
            const remaining = remainingData.filter(singleData => singleData._id !== id)
            setRemainingData(remaining)
        } 
        )  
            }
          })  
    }
    return (
        <div className='min-h-screen'>
            <h1 className='lg:text-2xl font-semibold my-5'>Your selected products:</h1>
            {
                remainingData.map((productData, index) => <div key={productData._id}>
                   <p className='my-5'>
                    {index+1}. {productData.name} ({productData.brand}) 
                    <button onClick={()=> handleDelete(productData._id)} className='btn bt-secondary ml-5'>Delete</button>
                   </p>

                </div>)
            }
        </div>
    );
};

export default MyCart;