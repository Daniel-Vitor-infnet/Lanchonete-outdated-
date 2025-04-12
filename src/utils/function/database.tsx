import Loading from '@/components/layout/database/Loading'
import ErrorMessage from '@/components/layout/database/ErrorMessage'
import EmptyMessage from '@/components/layout/database/EmptyMessage'

export function handleStatusDataBase(
  isLoading: boolean,
  error: Error | null,
  isEmpty: boolean,
  emptyMsg = 'Nenhum item encontrado.'
) {
  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (isEmpty) return <EmptyMessage message={emptyMsg} />
  return null
}
