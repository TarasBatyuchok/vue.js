import type { RouteRecordRaw } from 'vue-router'

import JobOpening from './JobOpening.vue'

export const jobOpeningsRouterNames = {
  jobOpening: 'jobOpening'
}

export const jobOpeningsRouter: RouteRecordRaw[] = [
  {
    path: '/job-opening',
    name: jobOpeningsRouterNames.jobOpening,
    component: JobOpening
  }
]
