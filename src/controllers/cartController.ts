import { Request, Response, NextFunction } from 'express';
import { Item } from '../models/item';
import { sendJsonResponse } from '../utils/jsonResponse';
import { ItemManager } from '../utils/itemManager'; // Import the ItemManager class

class CartController {
  private cart: Item[] = [];

  constructor() {
    this.cart = []; 
     // Bind methods to the class to retain the correct `this` context
     this.getCart = this.getCart.bind(this);
     this.addToCart = this.addToCart.bind(this);
     this.removeFromCart = this.removeFromCart.bind(this);
     this.getTotalPrice = this.getTotalPrice.bind(this);
  }




  public getCart(req: Request, res: Response, next: NextFunction): void {
    try {
      sendJsonResponse(res, 200, { success: true, data: this.cart });
    } catch (error) {
      next(error);
    }
  }




  public addToCart = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const itemId = parseInt(req.params.id, 10);
      const quantity = parseInt(req.body.quantity, 10) || 1;
  
      const item = ItemManager.getItemById(itemId);  
  
      if (!item) {
        sendJsonResponse(res, 404, { success: false, error: 'Item not found' });
      } else {
        const existingCartItem = this.cart.find((cartItem) => cartItem.id === itemId);
  
        if (existingCartItem) {
          existingCartItem.quantity += quantity;
        } else {
          const itemWithQuantity = { ...item, quantity };
          this.cart.push(itemWithQuantity);
        }
  
        sendJsonResponse(res, 200, { success: true, data: this.cart });
      }
    } catch (error) {
      next(error);
    }
  };
  


  public removeFromCart(req: Request, res: Response, next: NextFunction): void {
    try {
      const itemId = parseInt(req.params.id, 10);

      const itemIndex = this.cart.findIndex((cartItem) => cartItem.id === itemId);

      if (itemIndex === -1) {
        sendJsonResponse(res, 404, { success: false, error: 'Item not found in the cart' });
      } else {
        this.cart.splice(itemIndex, 1);
        sendJsonResponse(res, 200, { success: true, data: this.cart });
      }
    } catch (error) {
      next(error);
    }
  }

  public getTotalPrice(req: Request, res: Response, next: NextFunction): void {
    try {
      if (!this.cart || this.cart.length === 0) {
        sendJsonResponse(res, 200, { success: true, data: { totalItems: 0, totalPrice: 0 } });
        return;
      }
  
      let totalQty = 0;
      let totalPrice = 0;
      let totalDiscount = 0;

      for (const item of this.cart) {
        totalQty += item.quantity;
        totalPrice += item.quantity * item.price;
      }

      let noOfFreeItems = Math.floor(totalQty / 3);

      if(noOfFreeItems === 0) {
        sendJsonResponse(res, 200, { success: true, data: { totalQty, totalPrice , totalDiscount} });
      }

      let orderedItemsByCheapest = this.cart.sort((one, two) => one.price - two.price);


      for (let index = 0; index < orderedItemsByCheapest.length; index++) {
        const item = orderedItemsByCheapest[index];
        if(item.quantity >= noOfFreeItems) {
          totalDiscount += item.price * noOfFreeItems;
          break;
        }

        totalDiscount += item.price * item.quantity;
        noOfFreeItems -= item.quantity;
      }

      totalPrice -=totalDiscount;
      
      sendJsonResponse(res, 200, { success: true, data: { totalQty, totalPrice ,totalDiscount} });
    } catch (error) {
      next(error);
    }
  }
}
export const CartControllerInstance = new CartController();
