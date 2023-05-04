<template>
  <el-header class="flex items-center gap-4">
    <h3 class="flex- font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>
    <el-button class="!ml-0" :type="$elComponentType.danger" @click="$router.replace({ name: $routeNames.login })">
      Logout
    </el-button>
  </el-header>
  <el-main>
    <el-tabs v-model="activeName" type="card" class="">
      <el-tab-pane label="Card" name="first">
        <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
          <Card
            v-for="contact in contacts"
            :key="contact.id"
            class="cursor-pointer"
            :contact="contact"
            @click="editContact(contact.id)"
            @delete="deleteContact" @save="updateContact"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="Table">
        <Table
          :contacts="contacts"
          @deleteContact="deleteContact"
          @updateContact="updateContact"
          @editContact="editContact"
        />
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>
<script lang="ts" setup>
import Card from './components/Card.vue'
import Table from './components/Table.vue'
const router = useRouter()

const { $routeNames } = useGlobalProperties()

const activeName = ref('first')

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function createNewContact() {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact(contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

</script>
