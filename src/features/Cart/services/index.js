import myLearn from "../../../services/config";

export const addToCart = (data) => {
    return myLearn.post('/v1/cart',data);
}

export const getCart = () => {
    return myLearn.get('/v1/cart');
}

export const deleteCourseFromCart = (id) => {
    return myLearn.delete(`/v1/cart/${id}`);
}