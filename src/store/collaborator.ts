// Utilities
import {defineStore} from 'pinia'
import {useFetcher} from "@/lib/fetcher";
import {ref} from "vue";

export const useCollaboratorStore = defineStore('collaborator', () => {

  const fetcher = useFetcher()
  const collaborators = ref<Collaborator[]>([])

  async function loadCollaborators() {
    collaborators.value = await fetcher.get(`collaborators`).then((response: any) => {
      let collaborators = [] as Collaborator[]
      for (let i = 0; i < response.data.length; i++) {
        const apiCollaborator = response.data[i]
        const m = {
          id: parseInt(apiCollaborator.id),
          position: parseInt(apiCollaborator.position),

          logo: apiCollaborator.file_path ? {
            file_path: apiCollaborator.file_path,
          } : undefined,
        } as Collaborator

        collaborators.push(m)
      }

      return collaborators
    })

    return collaborators
  }

  return {loadCollaborators, collaborators}
}, {persist: true})
