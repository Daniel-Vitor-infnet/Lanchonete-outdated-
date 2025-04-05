import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/libs/supabaseClient';
import { Ingrediente } from '@/types';

type IngredienteRelacionamento = {
  ingredientes: Ingrediente[];
};

export const useIngredientesPorComida = (comidaId: string) => {
  return useQuery<Ingrediente[]>({
    queryKey: ['ingredientes', comidaId],
    enabled: !!comidaId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ingredientes_por_comida')
        .select('ingredientes:ingrediente_id(id, title, description, price, image, stock, sale)')
        .eq('comida_id', comidaId);

      if (error) throw new Error(error.message);

      return (data as IngredienteRelacionamento[])
        .flatMap((rel) => rel.ingredientes); // Corrigido aqui
    }
  });
};
