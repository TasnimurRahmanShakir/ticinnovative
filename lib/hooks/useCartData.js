
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCart } from '@/app/actions/cartActions';

export const cartkey = ['cart'];

export function useCartData() {
  const { data, isLoading, error } = useQuery({
    queryKey: cartkey,
    queryFn: getCart,
  });

  const cartCount = (data || []).reduce((sum, item) => sum + item.qty, 0);

  return { data, cartCount, isLoading, error };
}