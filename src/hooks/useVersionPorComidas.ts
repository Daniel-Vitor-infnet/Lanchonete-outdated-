import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/libs/supabaseClient'
import { Versao } from '@/types'

export const useVersionPorComidas = (comidaId: string) => {
  return useQuery<Versao[]>({
    queryKey: ['versoes', comidaId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('versoes')
        .select('*')
        .eq('comida_id', comidaId)

      if (error) {
        throw new Error(error.message)
      }

      return data || []
    },
    enabled: !!comidaId, // só executa se tiver o id
  })
}
