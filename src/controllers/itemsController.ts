import { Request, Response, NextFunction } from 'express';
import { sendJsonResponse } from '../utils/jsonResponse';
import { ItemManager } from '../utils/itemManager'; // Import the ItemManager class

class ItemsController {
  public getAllItems(req: Request, res: Response, next: NextFunction): void {
    try {
      const items = ItemManager.getAllItems(); // Use the ItemManager to get all items
      sendJsonResponse(res, 200, { success: true, data: items });
    } catch (error) {
      next(error);
    }
  }

  public getItemById(req: Request, res: Response, next: NextFunction): void {
    try {
      const itemId = parseInt(req.params.id, 10);
      const item = ItemManager.getItemById(itemId); // Use the ItemManager to get the item by ID

      if (!item) {
        sendJsonResponse(res, 404, { success: false, error: 'Item not found' });
      } else {
        sendJsonResponse(res, 200, { success: true, data: item });
      }
    } catch (error) {
      next(error);
    }
  }
}

export const ItemsControllerInstance = new ItemsController();
