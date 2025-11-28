"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "@/app/actions/cartActions";
import { useCartData, cartkey } from "./useCartData";
import { toast } from "sonner";

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,

    onMutate: async (newProduct) => {
      await queryClient.cancelQueries({ queryKey: cartkey });

      const previousCart = queryClient.getQueryData(cartkey);

      queryClient.setQueryData(cartkey, (oldCart = []) => {
        const tempId = Date.now();

        const newItem = {
          id: tempId,
          productId: newProduct.productId,
          size: newProduct.selectedSize,
          qty: newProduct.quantity,
          price: newProduct.price,
          name: newProduct.title,
          image: newProduct.image,
          isOptimistic: true,
        };
        return [...oldCart, newItem];
      });

      return { previousCart };
    },

    onError: (err, newProduct, context) => {
      console.error("Add to Cart Failed:", err.message);

      if (context?.previousCart) {
        queryClient.setQueryData(cartkey, context.previousCart);
      }
      toast.error(`Error: ${err.message}. Cart rolled back.`);
    },

    onSuccess: () => {
      toast.success("Item added to cart");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartkey });
    },
  });
}
