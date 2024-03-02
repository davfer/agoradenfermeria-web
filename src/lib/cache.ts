import type {Ref} from "vue";

export interface CachedItem<T> {
  key: string;
  value: T;
  fetchedAt: Date;
}

export async function getCached<T>(cache: Ref<CachedItem<T>[]>, key: string, TTL: number, fetchFn: () => Promise<T>): Promise<T> {
  const candidateIdx = cache.value.findIndex((item) => item.key === key)
  if (candidateIdx !== -1 && cache.value[candidateIdx].fetchedAt > new Date(new Date().getTime() - TTL)) {
    return cache.value[candidateIdx].value
  }
  const value = await fetchFn()
  if (candidateIdx !== -1) {
    cache.value[candidateIdx].value = value
    cache.value[candidateIdx].fetchedAt = new Date()
  } else {
    cache.value.push({
      key: key,
      value: value,
      fetchedAt: new Date(),
    })
  }
  return value
}
