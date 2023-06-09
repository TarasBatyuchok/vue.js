import { readdirSync } from 'fs'
import { join as pathJoin } from 'path'
import Components from 'unplugin-vue-components/vite'
import type { ConfigEnv } from 'vite'

/* CONFIGURATION FOR COMPONENTS AUTO-IMPORT */
export const ComponentsBuilder = (config: ConfigEnv) => Components({
  dts: config.command === 'serve' && './dts/components.d.ts',
  dirs: [
    './src/components',
    './src/layouts',
    ...buildViewsComponents()
  ]
})

function buildViewsComponents () {
  const componentsDirs: string[] = []
  function getComponentsDirs (dirName: string) {
    try {
      const dirs = readdirSync(dirName, { withFileTypes: true }).filter(dirent => dirent.isDirectory())
      dirs.forEach((dir) => {
        const dirPath = pathJoin(dirName, dir.name)
        if (dirPath.includes('/components')) {
          console.log(dirPath)
          componentsDirs.push(dirPath)
        }
        getComponentsDirs((dirPath))
      })
    } catch {
      console.warn(`No such file or directory, ${dirName}`)
    }
  }
  getComponentsDirs('./src/views')
  return componentsDirs
}
