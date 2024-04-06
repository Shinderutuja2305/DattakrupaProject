export const API_NOTIFICATION_MESSAGES={
loading:{
    title:"Loading...",
    message:"Data is being loaded,Please wait"
},
success:{
    title:"Success",
    message:"Data successfully loaded"
},
responseFailure:{
    title:"Error",
    message:"An error occured while fetching response from the server.Please try again"
},
requestFailure:{
    title:"Error",
    message:"An error occured while parsing request data"
},
networkError:{
    title:"Error",
    message:"Unable to connect with the server.Please check connectivity and try again later"
}
}


export const SERVICE_URLS={
    adminLogin:{url:'/logina',method:'POST'},
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'},
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadfile:{url:'/file/upload',method:'POST'},
    createPost:{url:'/add',method:'POST'},
    getAllPosts:{url:'/product',method:'GET',params:true},
    getPostById:{url:'/post',method:'GET',query:true},
    deleteBlog:{url:'/deleteproduct',method:'DELETE',query:true},
    updatePost:{url:'/update',method:'PUT',query:true},
    userQuery:{url:'/query',method:'POST'},
    getAllUser:{url:'/alluser',method:'GET'},
    deleteUser:{url:'/deleteuser',method:'DELETE',query:true},
    getAllquery:{url:'/allqueries',method:'GET'},
    getItems:{url:'/items',method:'GET'},
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    addOrder:{url:'/order',method:'POST'},
    getOrder:{url:'/orders',method:'GET'},
    deleteOrders:{url:'/order/delete',method:'DELETE',query:true},
    getAllProducts:{url:'/getproduct',method:'GET',params:true},



}