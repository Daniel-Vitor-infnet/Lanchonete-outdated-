import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/libs/supabaseClient';

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['site_settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;

      // Transforma em objeto { key: value }
      const settings = data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {} as Record<string, string>);

      return settings;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
