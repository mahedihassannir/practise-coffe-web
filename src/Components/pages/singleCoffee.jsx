import React from 'react';

const SingleCoffee = ({ data }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = data


    let handleDelete = (_id) => {
        console.log(_id);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })

            .then(res => res.json())

            .then(data => {
                console.log(data);
            })





    }



    return (
        <div>
            <div className="  card  p-4 card-side bg-base-100 shadow-xl">

                <figure><img src={photo} alt="Movie" /></figure>

                <div className="flex justify-between w-full pr-4">

                    <div>

                        <h2 className="card-title">Name: {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>

                    </div>

                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>

                            <button className="btn">Edit</button>

                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn bg-orange-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;