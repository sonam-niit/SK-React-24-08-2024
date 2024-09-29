import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                product ?
                    <div className="row">
                        <div className="col-4">
                            <img src={product.images[0]} alt={product.title}
                                height='400' />
                        </div>
                        <div className="col-8 mt-5">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h5>Reviews</h5>
                            <div className="row">
                                {
                                    product.reviews.map((review, index) => (
                                        <div key={index} className="col-3">
                                            <p>
                                                Rating: {review.rating} Star <br />
                                                Comment: {review.comment} <br />
                                                Date: {review.date} <br />
                                                Reviewer Name: {review.reviewerName} <br />
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div> :
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </div>
    );
}

export default ProductDetail;