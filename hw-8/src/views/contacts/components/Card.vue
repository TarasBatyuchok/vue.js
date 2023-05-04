<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="flex p-[20px]">
      <div class="flex-grow text-sm truncate" @click.stop>
        <template v-if="editMode">
          <div class="flex flex-wrap gap-[2px]">
            <el-input
              ref="inputRef"
              v-model="localContact.name"
              clearable
              class="block font-medium w-full"
              :size="$elComponentSize.small"
            />
            <el-input
              v-model="localContact.description"
              clearable
              :size="$elComponentSize.small"
              class="block mt-1 text-gray w-full"
            />
          </div>
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <div
        class="flex items-center justify-center w-[40px] h-[40px] ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
      >
        <span
          v-if="imageHasError || !contact.image"
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>

        <img
          v-else
          class="object-cover"
          :src="contact.image"
          alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        >
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2 px-[20px]">
      <template v-if="editMode">
        <el-button
          link :type="$elComponentType.danger"
          class="font-medium text-xs cursor-pointer hover:underline"
          @click.stop="editMode = false"
        >
          Cancel
        </el-button>

        <el-button
          link :type="$elComponentType.primary"
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="onSave"
        >
          Save
        </el-button>
      </template>

      <template v-else>
        <div class="pb-[10px]">
          <el-button
            class="font-medium text-xs cursor-pointer hover:underline"
            link
            :type="$elComponentType.primary"
            @click.stop="triggerEditMode"
          >
            Edit
          </el-button>

          <el-button
            class="font-medium text-xs cursor-pointer hover:underline"
            link
            :type="$elComponentType.danger"
            @click.stop="$emit('delete', contact)"
          >
            Delete
          </el-button>
        </div>
      </template>
    </div>

    <div>
      <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
        <el-button link class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
          <IconEnvelope />
          <span class="ml-3">Email</span>
        </el-button>
        <div
          class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
        >
          <el-button link>
            <IconPhone />
            <span class="ml-3">Call</span>
          </el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const nameAbbrv = computed(() => {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

const imageHasError = ref(false)
</script>
