<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
    <SearchInput v-model="searchInputValue" placeholder="Search" />
    <OptionalSelect v-model="roleValue" :options="roles" />
    <OptionalSelect v-model="sortingValue" :options="sorting" />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in search"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

import SearchInput from '@/components/SearchInput.vue'
import OptionalSelect from '@/components/OptionalSelect.vue'

const router = useRouter()

const contactsStore = useContactsStore()
const { searchInputValue, search } = storeToRefs(contactsStore)
const { roles, roleValue } = storeToRefs(contactsStore)
const { sortingValue,sorting } = storeToRefs(contactsStore)
// const { defSortValue, sortValue } = storeToRefs(contactsStore)
// const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
