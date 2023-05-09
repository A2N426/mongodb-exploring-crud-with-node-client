import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTea = () => {
    const loadedTea = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo }=loadedTea;
    // console.log(loadedTea)
    const handleUpdateTea = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateTea = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateTea)
        fetch(`http://localhost:5000/teas/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateTea)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tea updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">update Tea</h2>
            <form onSubmit={handleUpdateTea}>
                {/* form name and quantity row */}
                <div className="md:flex gap-5 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tea Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex gap-5 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-5 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="md:flex gap-5 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update TEA" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateTea;