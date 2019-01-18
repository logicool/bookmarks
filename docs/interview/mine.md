# 总结的面试

## javascript

### 0. javascript 有几种类型机制？

> 基本类型和对象类型
>
> 基本类型包括：undefined、number、boolean、string、function、object、symbol(ES6)

### 0.5. ReferenceError 是什么种类的错误，TypeError 是什么种类的错误？

> ReferenceError 同作用域判别失败相关,而 TypeError 则代表作用域判别成功了,但是对 结果的操作是非法或不合理的。

### 1.script 标签的 defer、async 的区别?

> - defer 是在 HTML 解析完之后才会执行，如果是多个，按照加载的顺序依次执行;
> - async 是在加载完成后立即执行，如果是多个，执行顺序和加载顺序无关

### 2.延迟加载 js 的方法有哪些？你觉得最好的是哪个？

> defer, async, js 在页面底部；推荐用法：
>
> ```html
>     // 这些代码应被放置在</body>标签前(接近HTML文件底部)
>     <script type="text/javascript">
>       function downloadJSAtOnload() {
>         var element = document.createElement("script");
>         element.src = "defer.js";
>         document.body.appendChild(element);
>       }
>       if (window.addEventListener)
>         window.addEventListener("load", downloadJSAtOnload, false);
>       else if (window.attachEvent) window.attachEvent("onload", downloadJSAtOnload);
>       else window.onload = downloadJSAtOnload;
>     </script>
> ```

### 3.js 中改变上下文的方式有哪些？

> call，apply，bind

### 4.js 中的函数有几种？

> 普通函数，匿名函数， 闭包函数，自动执行函数等；

### 5. **@** 如下代码的区别是什么? `function a() {alert(1)}; var a = function() {alert(1)}`

> 函数声明和函数表达式； 在预解析的时候函数声明优于函数表达式（等同于变量声明）先声明

### 6.js 获取 url 参数的方法有什么？

> window.location.href/document.location.href

### 7.js 中创建 dom 节点的方法有哪些？

> createElement,createTextNode,createAttribute,createComment,createDocumentFragment(\*);

### 8. **@** createDocumentFragment 的常用方法是什么？

> 当需要添加多个 dom 元素时，如果先将这些元素添加到 DocumentFragment 中，再统一将 DocumentFragment 添加到页面，会减少页面渲染 dom 的次数，效率会明显提升

### 9. 最短的代码实现数组去重？

> `[...new Set([2, "1", 2, 1, 1, 3, "3"])]`

### 10. 用最短的代码实现一个长度为 m 且值都 n 的数组?

> `Array(m).fill(n)`

### 11. JS 的原型链是什么？

> 简单说就是查找**proto**直到存在或为 null

### 12. 假设有一个函数 obj 里定义了一个 print 方法输出 this，那么 obj.print()输出的是什么？var test = obj.print;test()输出的是什么？两者为什么不同？

> obj.print() -> obj;
>
> test() -> window;
>
> 原理：obj.print()等价于 obj.print.call(obj); test()等价于 test.call(undefined);

### 13. 为什么 0.1 + 0.2 != 0.3，请详述理由，如果想=0.3 要如何实现？

> 因为 JS 采用 IEEE 754 双精度版本（64 位）,小数的十进制用二进制表示，末尾会出现无限循环小数，而 0.1 和 0.2 都是这种小数，所以末尾四舍五入后 0.1+0.2=0.30000000000000004，

> 解决办法：parseFloat((0.1 + 0.2).toFixed(10))

## jquery & ajax

### 1.jquery 中的选择器有哪些？

> 基本选择器（id,tag,class,属性等），层次选择器，过滤选择器，表单选择器（不要求全答出来，至少答出 2 种就可以）

### 2.jq 的 ajax 请求有几种方法？

> load(),$.get(),$.post(),\$.ajax()

### 3.\$.ajax()一般什么时候使用？

> 需要提交前回调函数,失败后处理,成功后处理及请求完成后处理回调函数等的时候

### 4.用 jq 做过什么动画效果吗？描述一下实现的方式？

> 主要是了解下是否做过相关的动画

### 5.项目中 ajax 的跨域问题如何做的？

> 一般会用到 jsnop 或者 cors

### 6.针对 jsnop 或 cors 详细问，如何实现的？（jsnop 需要前后端做 callback 的配合，cors 的 java 设置也可以问一下！）

> 略。

### 7.如果用到 iframe，如何做跨域？（可以细问实现方法）

> 主域相同： document.domain；主域不同：location.hash 和 window.name

## vue

### 1.vue 的主要生命周期是什么？

> create mounted update beforeDestory （答出以上就可以）

### 2.methods 和 watch 的区别是什么？

> 只要发生重新渲染 method 总是会执行而 计算属性 watch 只有在它的相关依赖发生改变时才会重新求值

### 3.vue 如何做双向绑定?

> v-model

### 4.如何添加自定义事件？

> Vue.directive

### 5.你觉得哪些项目适合 vue 框架?

> 略；

### 6.单页（SPA）和多页哪个更优？

> 没有哪个更优，看看对于多页和单页的理解；

### 7.vue 可以做多页吗？ 搜索引擎优化怎么做？

> 可以； SEO 可以用 webpack 插件提前做静态 html 渲染（prerender）或者做 SSR（服务端渲染）；

### 8.vue 中父子组件中，父组件如何传值给子组件？ （可能会用 vuex 的方式回答，答完后可以接着问不用 vuex 的方式，下面 2 道题同样适用！）

> 通过子组件的 props 属性来实现父传子；

### 9.子组件如何传给父组件？

> 通过子组件使用`$emit`发出自定义事件触发父组件方法的方法来传值；

### 10.非父子组件如何通信呢？

> 通过 eventBus（消息总线）的方式，也就是先`let Bus = new Vue(); // 创建总线` ，然后通过`$emit`和`$on`来发送和接受消息；

### 11.vue-router 如何实现动态路由加载？

> 略；

### 12.路由实现有几种方式是什么？分别是什么？你用过哪种？

> 2 种；分别是 History 和 Hash；

### 13.如果用过 hash 的方式，那么后端是怎么配合的？有过什么坑？

> 后端需要配置 404 页面等路径；坑如：webpack 静态路径配置、baseRoute 设置等；

### 14.是否用 vue 做过组件？举个列子？

> 略；

### 15. **@** 想在组件的根元素上监听一个原生事件，如何做？

> 组件中`v-on:click.native="fucntion dosomething()"`

### 16.**@** 那么如果我不想用`click.native`而只想用`click`，那么要怎么做？或者说要怎么修改修改组件？

> 1、子组件监听父组件给的 click 事件；
>
> 2、子组件通过`$emit('click', fn)`的方式触发；

## css3

### 1.css3 与 css 有哪些区别？

> 多了些效果的支持，如圆角，渐变等；

### 2.是否用过 scss 或 less 等 css 预编译器？用他们有什么好处？实际怎么用的？

### 3.如果用过，那么问 pc 和 mobile 的适配如何做的？

> 主要看是否答出 rem，viewport，@media 等

### 4.可以深入的问 rem 的实现方式？

> 这个比较多，答案略吧。。。

### 5.如果适配回答用 2 个资源的方案，那么问如何判断 pc 和 mobile 端？

> navigator.userAgent

### 6.多浏览器如何适配？

> 这个问题很大，一般会答出一大堆东西，主要几点-moz-、-ms-、-webkit-和-o-的前缀，!important 这类东西，或者又说到 Normalize.css 或 Reset

### 7.box-sizing 的作用?

> 设置 CSS 盒模型为标准模型或 IE 模型。标准模型的宽度只包括 content，IE 模型包括 border 和 padding

### 8. css 的优先级是什么？

> ！important >>> 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 元素（类型）选择器 = 伪元素选择器

## webpack

### 1.webpack 配置文件主要有哪几部分？

> entry,output,Loader,Plugins

### 2.列举一下常用的插件有哪些？

> 各种 loader，Plugins；

### 3.想屏蔽掉生产环境中的 console 输出怎么做？

> UglifyJsPlugin 配置中 drop_console: true 屏蔽掉

### 4.**@** Loader 的主要用途是什么？

> 能够调用外部的脚本或者工具，实现对不同格式文件的处理;

### 5.是否做过 code-splitting？是否做过按需加载？如何实现？

> 分离业务代码和第三方库; 利用 import() 语法按需加载；

## 其他

### 0.**@** 描述一下什么是 CommonJS, AMD, CMD 规范?

> 主要内容：
>
> - CommonJS 定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}， NodeJS、webpack 都是用 CommonJS 规范编写的；
> - AMD 是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"，因为`require`是同步加载的，服务端还好，对于浏览器来说 commonJS 的 require 加载模块会造成阻塞，所以 AMD 的 require 的模块加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行，RequireJS，必须采用特定的 define()函数来定义，AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块；
> - CMD 即 Common Module Definition 公共模块定义，代表库 SeaJS，CMD 推崇就近依赖，只有在用到某个模块的时候再去 require；
> - 还有个 UMD 的概念，Universal Module Definition 通用模块定义，是 AMD 和 CommonJS 的一个糅合，AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载，如果要通用呢?那就先判断是否支持 node.js 的模块,存在就用 node，然后再判断是否支持 AMD（define 是否存在），存在就用 AMD 的方式加载。

### 1. 一个网页的浏览器的渲染过程是什么？

> - 首先获取 html，然后构建 dom 树；
> - 其次根据 css 构建 render 树，render 树中不包含定位和几何信息；
> - 最后构建布局数，布局是含有元素的定位和几何信息

### 1.1 浏览器的重绘和重排是什么？

> - 重绘是一个元素外观的改变所触发的浏览器行为，例如改变 visibility、outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，并不一定伴随重排。
> - 重排是更明显的一种改变，可以理解为渲染树需要重新计算。重排一定会引起浏览器的重绘，代价是很大的。
>
> 下面是常见的触发重排的操作：
>
> 1. DOM 元素的几何属性变化,浏览器会重新渲染该部分，而且会涉及到子节点/兄弟节点的重新计算;
> 2. DOM 树的结构变化,DOM 树的增、删、移动会出发重排，浏览器引擎布局过程是从上到下的，从左到右的过程；
> 3. 获取某些属性,例如： offset 系列，scroll 系列，client 系列，getComputedStyle()等，所以在多次使用这些值时应进行保存。
> 4. 改变元素样式 也会引起重排。
> 5. 浏览器窗口改变尺寸。
>
> 相关内容： position 属性设为 absolute 或 fixed 就脱离了文档流，它的变化不会影响到其他元素，所以动画效果的元素就最好设置为绝对定位；由于 display 属性为 none 的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发 2 次重排；

### 2. 浏览器多进程有哪些？渲染进程有哪些线程？

> - 浏览器多进程：主进程（Brower 进程），只有一个；插件进程，多个；GPU 进程，最多一个； 渲染进程（浏览器内核 Renderer 进程，内部多线程），每个 tab 分页一个进程；
> - 渲染进程：GUI 渲染线程、JS 引擎线程（GUI 和 JS 进程互斥）、事件触发线程、定时触发器线程、异步 http 请求线程

### 3. GUI 渲染线程与 JS 引擎线程的关系是什么？为什么？

> 互斥；
>
> 由于 JavaScript 是可操纵 DOM 的，如果在修改这些元素属性同时渲染界面（即 JS 线程和 UI 线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。

### 4. WebWorker 线程是什么？

> Html5 新支持的 web worker，它为 Web 内容在后台线程中运行脚本提供了一种简单的方法，workers 运行在另一个全局上下文中；
>
> - 创建 Worker 时，JS 引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作 DOM）
> - JS 引擎线程与 worker 线程间通过特定的方式通信（postMessage API，需要通过序列化对象来与线程交互特定的数据）

### 5.load 事件与 DOMContentLoaded 事件的先后?

> - 当 DOMContentLoaded 事件触发时，仅当 DOM 加载完成时触发，不包括样式表，图片。例如 async 的 script 就不一定完成；
> - 当 onload 事件触发时，页面上所有的 DOM，样式表，脚本，图片都已经加载完成了。
>
> 因此 DOMContentLoaded -> load 的顺序

### 6.JS 分为同步任务和异步任务？

> - 同步任务都在主线程上执行，形成一个执行栈
> - 主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
> - 一旦执行栈中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

### 7.如下代码的运行结果是什么？为什么？

> ```js
> console.log('js start')
> setTimeout(function() {
>   console.log('setTimeout 0')
> }, 0)
> Promise.resolve()
>   .then(function() {
>     console.log('promise1')
>   })
>   .then(function() {
>     console.log('promise2')
>   })
> console.log('js end')
> ```

> 结果： js start -> js end -> promise1 -> promise2 -> setTimeout 0
>
> 重点内容是 Promise 和 setTiemout 的顺序问题，其他的顺序原因参考上一题@5
>
> - JS 中分为两种任务类型: macrotask 和 microtask,在 ES 里，microtask 称为 jobs，macrotask 可称为 task；
> - 每次执行栈执行的代码就是一个 macrotask，浏览器的执行顺序是:`task->渲染->task->...`
> - microtask 则是在当前 task 执行结束后立即执行的任务，而 setTimeout 是 task，所以 js end（macrotask）后先执行 promise（microtask），渲染，在执行另一个 macrotask（setTimeout）

> 补充
>
> - macrotask：主代码块，setTimeout，setInterval 等（事件队列中的每一个事件都是一个 macrotask）
> - microtask：Promise，process.nextTick 等
> - 在 node 环境下，process.nextTick 的优先级高于 Promise
> - setImmediate 则是在下一次 EventLoop（macrotask）时触发，优先级高于 setTimeout；

---
