
const AddProducts = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-8">Add your product</h1>
            <form className="border-2 p-3 bg-[#f4d8ed] rounded-lg">
                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
               <div className="flex justify-center">
               <input className="w-9/12 bg-orange-300 btn my-5" type="button" value="Add product" />
               </div>
            </form>
        </div>
    );
};

export default AddProducts;