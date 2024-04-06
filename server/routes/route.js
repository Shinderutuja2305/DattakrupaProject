import express from 'express';
import { loginAdmin } from '../controller/admin-controller.js';
import { signupUser , loginUser, getAllUser, deleteUser } from '../controller/user-controller.js';
import { uploadImage , getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { createPost, deleteBlog, getAllPosts, getItems, getPost, updatePost } from '../controller/product-controller.js';
import { getAllquery, userQuery } from '../controller/query-controller.js';
import { authenticateToken,createNewToken } from '../controller/jwt-controller.js';
import { deleteComment, getComments, newComment } from '../controller/comment-controller.js';
import { addOrder, deleteOrders, getOrder } from '../controller/order-controller.js';



const router=express.Router();

router.post('/logina',loginAdmin);

router.post('/signup',signupUser);
router.post('/login',loginUser);

router.post('/token', createNewToken);

router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);

router.post('/add',createPost);
router.get('/product',getAllPosts);
router.get('/post/:id',getPost);
router.delete('/deleteproduct/:id',deleteBlog);
router.put('/update/:id',updatePost);

router.get('/alluser',getAllUser);
router.delete('/deleteuser/:id',deleteUser);

router.post('/query',userQuery);
router.get('/allqueries',getAllquery);

router.get('/items',getItems);

router.get('/products',getItems);

router.get('/current/:id',getPost);

router.post('/comment/new',newComment);
router.get('/comments/:id',getComments);
router.delete('/comment/delete/:id',deleteComment);

router.post('/order',addOrder);
router.get('/orders',getOrder);

router.delete('/order/delete/:id',deleteOrders);

router.get('/getproduct',getAllPosts);
export default router;
