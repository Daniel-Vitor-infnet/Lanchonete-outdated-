import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/libs/supabaseClient'
import { Categoria } from '@/types'

export const useCategorias = () => {
  return useQuery<Categoria[]>({
    queryKey: ['categorias'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categorias')
        .select('id, title, description, image, icon, stock, sale')

      if (error) throw new Error(error.message)
      return data || []
    },
    staleTime: 1000 * 60 * 10 // cache de 10 minutos
  })
}
