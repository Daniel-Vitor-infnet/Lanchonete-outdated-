import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/libs/supabaseClient'
import { Comida } from '@/types'

export const useComidasPorCategoria = (categoriaId: string) => {
  return useQuery<Comida[]>({
    queryKey: ['comidas', categoriaId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('comidas')
        .select('*')
        .eq('categoria_id', categoriaId)

      if (error) throw new Error(error.message)
      return data || []
    },
    enabled: !!categoriaId
  })
}
