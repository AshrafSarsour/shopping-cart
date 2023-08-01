import express, { Router } from 'express';
import { ItemsControllerInstance as ItemsController } from '../controllers/itemsController';
import { CartControllerInstance } from '../controllers/cartController';

const router: Router = express.Router();

router.get('/items', ItemsController.getAllItems);
router.get('/items/:id', ItemsController.getItemById);


router.get('/cart', CartControllerInstance.getCart);
router.post('/cart/:id', CartControllerInstance.addToCart);
router.delete('/cart/:id', CartControllerInstance.removeFromCart);
router.get('/cart/total', CartControllerInstance.getTotalPrice);

export const AppRouter: Router = router;

