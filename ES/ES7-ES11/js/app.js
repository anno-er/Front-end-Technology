//静态方法
/* import * as hl from './hello.js'

const btn = document.getElementById('btn')

btn.onclick = function(){
    hl.hello()
} */

//动态方法 需要时再引入
const btn = document.getElementById('btn')
btn.onclick = function () {
    import('./hello.js').then(module => {
        module.hello()
    })
}
