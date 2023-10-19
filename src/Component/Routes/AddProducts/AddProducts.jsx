
const AddProducts = () => {
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.Image.value;
        const name = form.Name.value;
        const brand = form.Brand.value;
        const type = form.Type.value;
        const price = form.Price.value;
        const description = form.Description.value;
        const rating = form.Rating.value;

        const productData = {
            image, name, brand, type, price, description, rating

        }
        console.log(productData);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-8">Add your product</h1>
            <form onSubmit={handleAddProduct} className="border-2 p-3 bg-[#f4d8ed] rounded-lg">
                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Image" placeholder="Image url" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Name" placeholder="Product name" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
               <div className="flex justify-center">
               <input className="w-9/12 bg-orange-300 btn my-5" type="submit" value="Add product" />
               </div>
            </form>
        </div>
    );
};

export default AddProducts;