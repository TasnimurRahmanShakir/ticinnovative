"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "@/app/actions/cartActions";
import { cartkey } from "./useCartData";
import { toast } from "sonner";

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromCart,
    onMutate: async (itemId) => {
      await queryClient.cancelQueries({ queryKey: cartkey });
      const previousCart = queryClient.getQueryData(cartkey);

      queryClient.setQueryData(cartkey, (old = []) => {
        return old.filter((item) => item.id !== itemId);
      });

      return { previousCart };
    },
    onError: (err, itemId, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(cartkey, context.previousCart);
      }
      toast.error(`Error removing item: ${err.message}`);
    },
    onSuccess: () => {
      toast.success("Item removed from cart");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartkey });
    },
  });
}
