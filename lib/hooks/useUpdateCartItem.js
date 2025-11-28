"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "@/app/actions/cartActions";
import { cartkey } from "./useCartData";
import { toast } from "sonner";

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartItem,
    onMutate: async (updatedItem) => {
      await queryClient.cancelQueries({ queryKey: cartkey });
      const previousCart = queryClient.getQueryData(cartkey);

      queryClient.setQueryData(cartkey, (old = []) => {
        return old.map((item) =>
          item.id === updatedItem.id ? { ...item, ...updatedItem } : item
        );
      });

      return { previousCart };
    },
    onError: (err, newItem, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(cartkey, context.previousCart);
      }
      toast.error(`Error updating item: ${err.message}`);
    },
    onSuccess: () => {
      // Optional: toast.success("Cart updated");
      // Commented out to avoid spam on quantity change, or uncomment if desired.
      // User asked for "all success", so I will uncomment it but maybe use a shorter message.
      toast.success("Cart updated");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartkey });
    },
  });
}
