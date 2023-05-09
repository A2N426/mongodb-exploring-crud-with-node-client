import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TeaCard = ({ tea, teas, setTeas }) => {
    const { _id, name, quantity, supplier, taste, photo } = tea;

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/teas/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = teas.filter(tear => tear._id !== id)
                        setTeas(remaining)
                    })

            }
        })
    }
    return (
        <div className="card bg-[#F5F4F1] flex justify-center items-center mt-10 card-side shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <div className="text-xl">
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
            </div>
            <div className="card-actions mr-4 justify-end">
                <div className="btn-group space-y-3 btn-group-vertical">
                    <button className="btn">View</button>
                    <Link to={`/updateTea/${_id}`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600">X</button>
                </div>
            </div>
        </div>
    );
};

export default TeaCard;