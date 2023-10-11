const fs = require('fs')

const components = fs.readdirSync('./src/components')
const layouts = fs.readdirSync('./src/layout')

let base = `
|lista|

const venus = {
  install(Vue) {
    |vuecomponents|
  },
}

export default venus
`

let list = ''
let list2 = ''
for (let i = 0; i < components.length; i++) {
  const element = components[i]
  const comp = element.replace('.vue', '')
  list += `import ${comp} from '@/components/${element}'\n`
  list2 += `    Vue.component('${comp}',  ${comp})\n`
}

for (let i = 0; i < layouts.length; i++) {
  const element = layouts[i]
  const comp = element.replace('.vue', '')
  list += `import ${comp} from '@/layout/${element}'\n`
  list2 += `    Vue.component('${comp}',  ${comp})\n`
}

base = base.replace('|lista|', list)
base = base.replace('|vuecomponents|', list2)

fs.writeFileSync('./src/plugins/venus.js', base)
