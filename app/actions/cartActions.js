"use server";

// Use globalThis to persist data across server action invocations in development
if (!globalThis.mockCartDB) {
  globalThis.mockCartDB = [];
}
const mockCartDB = globalThis.mockCartDB;

const fetchData = async (method, data = null) => {
  // await new Promise(resolve => setTimeout(resolve, 500));

  // if (Math.random() < 0.2) {
  //     throw new Error("Failed to connect to cart service. Please try again.");
  // }

  switch (method) {
    case "GET":
      // TODO: Replace with real API call
      // const response = await fetch('https://api.example.com/cart');
      // return await response.json();
      return [...mockCartDB];

    case "POST":
      // TODO: Replace with real API call
      // const response = await fetch('https://api.example.com/cart', { method: 'POST', body: JSON.stringify(data) });
      // return await response.json();
      const newItem = {
        id: Date.now(),
        ...data,
      };
      mockCartDB.push(newItem);
      return { success: true, item: newItem };

    case "PUT":
    case "PATCH":
      // TODO: Replace with real API call
      // const response = await fetch(`https://api.example.com/cart/${data.id}`, { method: 'PUT', body: JSON.stringify(data) });
      // return await response.json();
      const updateIndex = mockCartDB.findIndex((item) => item.id === data.id);
      if (updateIndex === -1) {
        throw new Error("Item not found");
      }
      mockCartDB[updateIndex] = { ...mockCartDB[updateIndex], ...data };
      return { success: true, item: mockCartDB[updateIndex] };

    case "DELETE":
      // TODO: Replace with real API call
      // const response = await fetch(`https://api.example.com/cart/${data.id}`, { method: 'DELETE' });
      // return await response.json();
      const deleteIndex = mockCartDB.findIndex((item) => item.id === data.id);
      if (deleteIndex === -1) {
        throw new Error("Item not found");
      }
      const deletedItem = mockCartDB[deleteIndex];
      mockCartDB.splice(deleteIndex, 1);
      return { success: true, item: deletedItem };

    default:
      throw new Error(`Method ${method} not supported`);
  }
};

export async function getCart() {
  console.log("Server Action: Fetching Cart...");
  return await fetchData("GET");
}

export async function addToCart(productData) {
  console.log("Server Action: Adding to Cart...", productData);

  const payload = {
    productId: productData.productId,
    size: productData.selectedSize,
    qty: productData.quantity,
    price: productData.price,
    title: productData.title,
    image: productData.image,
  };

  return await fetchData("POST", payload);
}

export async function updateCartItem(itemData) {
  console.log("Server Action: Updating Cart Item...", itemData);
  return await fetchData("PUT", itemData);
}

export async function removeFromCart(itemId) {
  console.log("Server Action: Removing from Cart...", itemId);
  return await fetchData("DELETE", { id: itemId });
}
