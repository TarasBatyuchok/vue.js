import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const searchInputValue = ref('')
  const roles = ref('All')
  const responsibilities = ref(['All', 'User', 'Admin'])
  const defSortValue = ref('Default')
  const sortValue = ref(['Default', 'Ascending', 'Descending'])
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    }
  ])

  function addContact (contact: IContact) {
    contacts.value.push({ ...contact })
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  // function search computed(() {
  // console.log(contacts.value)
  // console.log(searchInputValue.value)
  // })

  const search = computed(() => contacts.value
    .filter(item => (item.name.toLocaleLowerCase()
      .includes(searchInputValue.value.toLocaleLowerCase())) ||
      (item.description.toLocaleLowerCase().includes(searchInputValue.value.toLocaleLowerCase()))
      ? item
      : null)
    .filter(item => {
      if (item.role.toLocaleLowerCase() === roles.value.toLocaleLowerCase()) {
        return item
      }

      if (roles.value.toLocaleLowerCase() === responsibilities.value[0].toLocaleLowerCase()) {
        return item
      }
    }

    )
    .sort((prev, next) => {
      switch (defSortValue.value) {
      case 'Ascending':
        return prev.name < next.name ? -1 : 1
      case 'Descending':
        return prev.name > next.name ? -1 : 1
      default:
        return 0
      }
    })

  )

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  return {
    contacts,
    search,
    responsibilities,
    roles,
    searchInputValue,
    addContact,
    deleteContact,
    updateContact,
    sortValue,
    defSortValue

  }
})
