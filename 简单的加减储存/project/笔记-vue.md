vue（是一套用于构建用户界面的渐进式框架）
框架是为了解决一类问题而开发出来的产品，基于自身的特点向用户提供一套完整的解决方案

在html使用vue
先引入vue文件，再实例化一下
vue实例上的方法用$开头
其中el表示和某个html标签关联,也可以用$mount vm.$mount('#app')
插值表达式{{}}，不仅仅可以写变量，也可以写js语法
const vm = new Vue({
    el: '#app',
    data: {
        a: 10
    }
    
})

vm.a = 20;
console.log(vm.a)
console.log(vm.$el.innerHTML)

等待dom执行完毕再执行
vm.$nextTick(() => {
    console.log(vm.$el.innerHTML)
})

v-bind 绑定属性 v-bind:src="url" 简写为:  img举例
v-bind 绑定class 绑定多个class名字用数组格式，也可以用对象的形式 :class="{key: value}" 通过value的值是否为真来决定是否绑定key这么一个class名，也可以用三元表达式
v-bind 绑定style需要用{}把样式包起来，不是变量的需要用''包起来， 绑定多个style用数组的形式[{width: 变量}, imgStyle]
imgStyle: {
    border: '1px solid red'
}
举例绑定相同样式的优先级

监听事件
v-on:事件类型="要执行的函数" 可以简写为@
定位函数的如果不传实参，形参的某人第一个参数就是事件对象， 如果穿了实参，$event就是事件对象