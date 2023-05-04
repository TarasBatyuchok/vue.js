import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const searchInputValue = ref('')

  const roleValue = ref('All')
  const roles = ref(['All', 'User', 'Admin'])

  const sortingValue = ref('Default')
  const sorting = ref(['Default', 'Ascending', 'Descending'])

  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'User'
    }
  ])

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  const search = computed(() => contacts.value
    .filter(item => (item.name.toLowerCase()
      .includes(searchInputValue.value.toLowerCase())) ||
    (item.description.toLowerCase().includes(searchInputValue.value.toLowerCase()))
      ? item
      : null)
    .filter((item) => {
      if (item.role === roleValue.value) {
        return item
      }
      if (roleValue.value === 'All') {
        return item
      }
    })
    .sort((prev, next) => {
      if (sortingValue.value === 'Ascending') {
        return prev.name < next.name ? -1 : 1
      }
      if (sortingValue.value === 'Descending') {
        return prev.name > next.name ? -1 : 1
      }
      return 0
    })
  )

  return {
    sortingValue,
    sorting,
    roles,
    roleValue,
    search,
    searchInputValue,
    contacts,
    addContact,
    deleteContact,
    updateContact
  }
})
