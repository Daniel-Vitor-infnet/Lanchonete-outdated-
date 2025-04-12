import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/libs/supabaseClient';
import { ComplementoComVersoes2, Versao2 } from '@/types';

interface ComplementoJoin {
  id: string;
  free: boolean;
  categoria_id: {
    id: string;
    title: string;
  } | null;
  comida_id: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    stock: boolean;
    sale: boolean;
  } | null;
  versao_id: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    stock: boolean;
    sale: boolean;
    free: boolean;
  } | null;
}

export const useComplementosPorComida = (comidaBaseId: string) => {
  return useQuery<Record<string, ComplementoComVersoes2[]>[]>({
    queryKey: ['complementos_formatado_com_join', comidaBaseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('complementos')
        .select(`
          id,
          free,
          categoria_id (
            id,
            title
          ),
          comida_id (
            id,
            title,
            description,
            image,
            price,
            stock,
            sale
          ),
          versao_id (
            id,
            title,
            description,
            image,
            price,
            stock,
            sale
          )
        `)
        .eq('comida_base_id', comidaBaseId) as { data: ComplementoJoin[] | null, error: any };

      if (error) throw new Error(error.message);
      if (!data || data.length === 0) return [];

      const agrupado = new Map<string, ComplementoComVersoes2[]>();

      data.forEach(item => {
        const categoriaTitle = item.categoria_id?.title || 'Sem Categoria';
        const complementoGratis = item.free;
        const comida = item.comida_id;
        if (!comida) return;

        const versao = item.versao_id;

        // Verificar se já existe o item comida no agrupamento da categoria
        const comidaFormatadaExistente = agrupado.get(categoriaTitle)?.find(comidaItem => comidaItem.id === comida.id);

        if (!comidaFormatadaExistente) {
          // Se não existir, cria a comida sem versão
          const comidaFormatada: ComplementoComVersoes2 = {
            id: comida.id,
            title: comida.title,
            description: comida.description,
            image: comida.image,
            price: comida.price,
            stock: comida.stock,
            sale: comida.sale,
            free: !versao && complementoGratis ? complementoGratis : null,
            version: versao
              ? [{
                  id: versao.id,
                  title: versao.title,
                  description: versao.description,
                  image: versao.image,
                  price: versao.price,
                  stock: versao.stock,
                  sale: versao.sale,
                  free: complementoGratis ? complementoGratis : null,
                }]
              : [], // se não tiver versão, array vazio
          };

          // Adiciona a comida sem versão
          if (!agrupado.has(categoriaTitle)) {
            agrupado.set(categoriaTitle, []);
          }

          agrupado.get(categoriaTitle)!.push(comidaFormatada);
        } else if (versao) {
          // Se já existir uma comida e houver versão, adicionar a versão à comida existente
          comidaFormatadaExistente.version.push({
            id: versao.id,
            title: versao.title,
            description: versao.description,
            image: versao.image,
            price: versao.price,
            stock: versao.stock,
            sale: versao.sale,
            free: complementoGratis ? complementoGratis : null,
          });
        }
      });

      // Converte o agrupamento para o formato final
      const resultadoFinal = Array.from(agrupado.entries()).map(([categoria, itens]) => ({
        [categoria]: itens,
      }));

      return resultadoFinal;
    },
    enabled: !!comidaBaseId,
  });
};


