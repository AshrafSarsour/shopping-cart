import { Item } from '../models/item';

export class ItemManager {
  private static items: Item[] = [
    { id: 1, name: 'T-shirt', description: 'A stylish T-shirt', price: 12.99, currency: 'USD', quantity: 100 },
    { id: 2, name: 'Jeans', description: 'Comfortable jeans', price: 25.0, currency: 'USD', quantity: 50 },
    { id: 3, name: 'Dress', description: 'Elegant dress', price: 20.65, currency: 'USD', quantity: 40 },
  ];

  public static getAllItems(): Item[] {
    return this.items;
  }

  public static getItemById(itemId: number): Item | undefined {
    return this.items.find((item) => item.id === itemId);
  }

  public static updateCartItem(itemId: number, quantity: number): boolean {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      this.items[itemIndex].quantity = quantity;
      return true;
    }

    return false;
  }

  public static getItemByName(itemName: string): Item | undefined {
    return this.items.find((item) => item.name === itemName);
  }
}
