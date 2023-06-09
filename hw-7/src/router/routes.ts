import type { RouteRecordRaw } from 'vue-router'

import { contactRouteNames, contactsRoutes } from '@/views/contacts/contacts.routes'
import { jobOpeningsRouter } from '@/views/JobOpenings/JobOpenings.router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: contactRouteNames.contacts }
  },

  ...contactsRoutes,
  ...jobOpeningsRouter
]
