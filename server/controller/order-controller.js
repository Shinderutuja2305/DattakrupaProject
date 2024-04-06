import Order from "../model/Order.js";



export const addOrder = async (request, response) => {
    try {
        const comment = await new Order(request.body);
        comment.save();

        response.status(200).json('Order saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getOrder = async (request, response) => {
    try {
        const comments = await Order.find({ });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deleteOrders=async(request,response)=>{
    try {
        const comment = await Order.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}