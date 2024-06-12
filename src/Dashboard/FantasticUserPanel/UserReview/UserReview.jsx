import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const UserReview = () => {
    const [review, setReview] = useState({
        product: '',
        rating: '',
        comment: ''
    });

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);

        if (review) {
            toast.success("review send successfully")
        }

        onSubmit(review);
        setReview({ product: '', rating: '', comment: '' });
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('Review data:', review);
    //     try {
    //         const response = await fetch(`http://api.ecom-bd.com/api/v1/seller/add_review?sellerId=${sellerId}&user=${user}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(review)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();
    //         console.log('Success:', data);

    //         setReview({ product: '', rating: '', comment: '' });
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
                        Product
                    </label>
                    <input
                        type="text"
                        id="product"
                        name="product"
                        value={review.product}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <select
                        id="rating"
                        name="rating"
                        // value={review.rating}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={review.comment}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserReview;