
<template>
  <el-form ref="form" :rules="validation" :model="localContact">
    <el-table :data="contacts" @row-click="onEditContact">
      <el-table-column prop="image" label="image">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.image" fit="cover" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="name">
        <template #default="scope">
          <el-form-item v-if="edit === scope.row.id" prop="name" @click.stop>
            <el-input v-model="localContact.name" />
          </el-form-item>
          <template v-else>{{ scope.row.name }}</template>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
        <template #default="scope">
          <el-form-item v-if="edit === scope.row.id" prop="description" @click.stop>
            <el-input v-model="localContact.description" />
          </el-form-item>
          <template v-else>{{ scope.row.description }}</template>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template #default="scope">
          <div>
            <template v-if="edit === scope.row.id">
              <el-button link type="danger" size="large" @click.stop="offEdit">
                Cancel
              </el-button>
              <el-button link type="primary" size="large" @click.stop="update(localContact)">
                Save
              </el-button>
            </template>
            <template v-else>
              <el-button link type="danger" size="large" @click.stop="deleteContact(scope.row)">
                Delete
              </el-button>
              <el-button link type="primary" size="large" @click.stop="turnOnEdit(scope.row)">
                Edit
              </el-button>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
defineProps<{ contacts: IContact[] }>()
const inputElRef: Ref<HTMLInputElement | undefined> = ref()
const edit = ref(null)
const form = useElFormRef()
const localContact = useElFormModel<IContact>({
  id: 0,
  name: '',
  description: '',
  image: ''
})

const validation = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

const emit = defineEmits(['deleteContact', 'updateContact', 'editContact'])

async function update(contact: IContact): Promise<void> {
  const isValid = await form.value?.validate()
  if (isValid) {
    emit('updateContact', contact)
    edit.value = null
  }
}

async function triggerEditOn(contact: IContact): Promise<void> {
  edit.value = contact.id
  const updatedLocalContact = {
    id: contact.id,
    name: contact.name,
    description: contact.description,
    image: contact.image
  }
  Object.assign(localContact, updatedLocalContact)

  await nextTick()
  if (inputElRef.value) {
    inputElRef.value.focus()
  }
}

function offEdit() {
  edit.value = null
}
function turnOnEdit(contact: IContact) {
  edit.value = contact.id
  triggerEditOn(contact)
}

function onEditContact(contact: IContact) {
  emit('editContact', contact.id)
}
function deleteContact(contact: IContact) {
  emit('deleteContact', contact)
}
</script>

<style>

.el-button{
  
}
.cell {
  text-align: start;
}

.el-tabs__nav {
  display: flex;
  padding-top: 10px;
}

.el-tabs__item {
  margin: 0 10px 0 0;
  cursor: pointer;
}

.el-table--fit {
  padding-top: 20px;
}

.el-image {
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
}

.el-image__inner {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>