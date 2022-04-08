(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{548:function(s,t,e){"use strict";e.r(t);var n=e(15),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("刚接触js的时候，对于es6的promise、async、await简直怕的要死，甚至有段时间非常害怕promise这个词，随着后面慢慢的接触，觉得这个东西并非那么难理解，主要还是需要弄懂js的一些基础知识。那么接下来，跟上我的思路，一起彻底弄懂promise、async、await。")]),s._v(" "),e("p",[s._v("关于这个系列一共三个比较重要的知识点：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("1、关于什么同步、异步，其中涉及了一些堆栈和消息队列、事件轮询的知识；\n\n2、关于异步编程的几个解决方案，主要是回调函数和promise；\n\n3、关于异步编程的终极解决方案Generator函数以及他的语法糖async、await。\n")])])]),e("p",[s._v("如果要弄懂promise，就必须弄懂什么是异步、什么是同步，这篇文章主要是讲一下什么是同步、什么是异步。")]),s._v(" "),e("h4",{attrs:{id:"js是怎么来的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js是怎么来的"}},[s._v("#")]),s._v(" js是怎么来的？")]),s._v(" "),e("p",[s._v("任何新语言的出现肯定是与他当时的需求有关系的，js全称是Javascript，诞生于1995年（跟我同岁）。最初他的诞生就是为了表单提交的时候做提示用的，在js问世之前，所有的表单都必须提交到服务端才能校验必填项。")]),s._v(" "),e("p",[s._v("比如你想申请一个qq号，各种信息填了一大堆，提交完才知道，你手机号少输入了一位重新输入，那肯定砸电脑的心都有了，这个时候，js出生了，因为是跟用户做实时交互的，所以最早叫livescript，当时为了蹭蹭Java的热度，上户口的时候就改成了Javascript，一不小心长大了可以跟Java平起平坐了。")]),s._v(" "),e("h4",{attrs:{id:"js为什么是单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js为什么是单线程"}},[s._v("#")]),s._v(" js为什么是单线程")]),s._v(" "),e("p",[s._v("js从诞生之初就是单线程，那为什么是单线程呢？为了让我们这些菜鸡更容易入门？当然不是。")]),s._v(" "),e("p",[s._v("js主要的用途就是操作DOM，以及与用户的交互，这就决定了他只能是单线程，\n比如你这个线程创建了一个DOM，那个线程给删除了，这时候浏览器应该以哪个为准，\n所以这个应该永远不会变，你前端发展的能造火箭了，js肯定也是单线程的。")]),s._v(" "),e("h2",{attrs:{id:"一、什么是同步和异步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是同步和异步"}},[s._v("#")]),s._v(" 一、什么是同步和异步")]),s._v(" "),e("h3",{attrs:{id:"_1、什么是同步呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是同步呢"}},[s._v("#")]),s._v(" 1、什么是同步呢？")]),s._v(" "),e("p",[s._v("你可以理解为同一个时间，你只能干一件事。今天下班早，你想给女朋友打个电话，女朋友可能跟其他小伙伴一起吃饭呢，\n由于手机静音，所以听不到，你就一直打，一直打，啥都没干，把时间都浪费了，这就叫同步。因为js是单线程的嘛，所以js从小就是同步的。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("来一段代码：\nfunction second() {\n    console.log('second')\n}\nfunction first(){\n    console.log('first')\n    second()\n    console.log('Last')\n}\nfirst()\n\n这个很简单，执行打印结果：\nfirst、second、last\n")])])]),e("p",[s._v("那么js执行这段代码，到底发生了什么呢？这里面又有一个‘调用栈’的概念")]),s._v(" "),e("h3",{attrs:{id:"_2、调用栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、调用栈"}},[s._v("#")]),s._v(" 2、调用栈")]),s._v(" "),e("p",[s._v("是不是一听到什么堆栈就害怕，别慌，没那么复杂，你可以理解为一个厕所，大家去上厕所，但是！不是先进先出，而是后进先出。用调用栈的概念，解释一下上面代码的执行顺序：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("当执行此代码时，将创建一个全局执行上下文并将其推到调用堆栈的顶部；// 这个不太重要，下面是重点\nfirst()函数先上，现在他在顶部；\n然后打印‘first’，然后执行完了，这个时候这个console.log会自动弹走，就是这个console.log虽然是后进来的，但是他先走了；\n现在first函数仍然在顶部，他下面还有second函数，所以不会弹走；\n执行second()函数,这时候second函数在顶部；\n打印‘second’，然后执行完了，弹走这个console.log，这时候second在顶部；\n这个时候second函数的事儿都干完了，他也弹走了，这时候first函数在顶部；\n浏览器会问，first你还有事吗，first说我还有一个，执行打印‘last’\n")])])]),e("h3",{attrs:{id:"_3、什么是异步呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、什么是异步呢"}},[s._v("#")]),s._v(" 3、什么是异步呢？")]),s._v(" "),e("p",[s._v("电话没打通，你就给女朋友发了个短信，洗澡去了，你回家了告诉我，（等我洗完了）再打给你，这就是异步。后来为了提高效率，把浏览器的多个内核都用起来，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。")]),s._v(" "),e("p",[s._v("所以这并没有影响js单线程的本质，js还是每次只能干一件事,只不过把洗澡提前了而已。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("来段代码：\nconst getList = () => {\n    setTimeout(() => {\n        console.log('我执行了！');\n    }, 2000);\n};\nconsole.log('Hello World');\ngetList();\nconsole.log('哈哈哈');\n\n执行顺序是：\nHello World、哈哈哈、我执行了！（两秒以后执行最后一个）\n")])])]),e("p",[s._v("这段代码执行，又发生了什么呢？这个地方又有一个‘消息队列’的概念，不慌！")]),s._v(" "),e("h3",{attrs:{id:"_4、消息队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、消息队列"}},[s._v("#")]),s._v(" 4、消息队列")]),s._v(" "),e("p",[s._v("刚才我们说了，同步的时候，浏览器会维护一个‘执行栈’，除了执行栈，在开启多线程的时候，浏览器还会维护一个消息列表，除了主线程，其余的都是副线程，这些副线程合起来就叫消息列表。")]),s._v(" "),e("p",[s._v("我们用消息列表的概念分析一下上面的代码：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("按照执行顺序console.log('Hello World')先执行，浏览器一看，中央军（主线程）！你先过；\n然后是getlist函数执行，浏览器看到setTimeout,你是八L（副线程）！你先靠边等着；\n然后是console.log('哈哈哈')执行，中央军（主线程）！你也过；\n然后浏览器问，还有中央军吗？没了，八L开始过！\n")])])]),e("h5",{attrs:{id:"增加难度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加难度"}},[s._v("#")]),s._v(" 增加难度：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("setTimeout(function() {\n    console.log('我是定时器！');\n})\nnew Promise(function(resolve) {\n    console.log('我是promise！');\n    resolve();\n}).then(function() {\n    console.log('我是then！');\n})\nconsole.log('我是主线程！');\n\n执行顺序：\n我是promise！\n我是主线程！\n我是then！\n我是定时器！\n")])])]),e("p",[s._v("为什么promise.then比定时器先执行呢？这个里面又涉及了一个‘事件轮询’的概念。")]),s._v(" "),e("h3",{attrs:{id:"_5、初识事件轮询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、初识事件轮询"}},[s._v("#")]),s._v(" 5、初识事件轮询")]),s._v(" "),e("p",[s._v("上面我们说了，浏览器为了提升效率，为js开启了一个不太一样的多线程，因为js不能同时执行嘛，那副线程（注意是副线程里面哈）里面谁执行，这个选择的过程，就可以理解为事件轮询。我们先用事件轮询的顺序分析一下上面的代码，再来上概念：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("promise函数肯定首先执行，他是主线程嘛，打印‘我是promise’；\n然后继续走主线程，打印‘我是主线程’；\n然后主线程走完了，开始走消息列表；\n（宏任务和微任务一会再讲）\n这个时候会先执行promise.then，因为他是微任务，里面的‘我是then！’\n消息列表里面在上面的是定时器，但是定时器是宏任务，优先级比较低，所以会往后排；\n")])])]),e("h3",{attrs:{id:"_6、什么是宏任务-微任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、什么是宏任务-微任务"}},[s._v("#")]),s._v(" 6、什么是宏任务？微任务？")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("**宏任务（Macrotasks）：**js同步执行的代码块，setTimeout、setInterval、XMLHttprequest、setImmediate、I/O、UI rendering等。\n\n**微任务（Microtasks）：**promise、process.nextTick（node环境）、Object.observe, MutationObserver等。\n\n微任务比宏任务要牛逼一点\n\n浏览器执行的顺序：\n(1)执行主代码块，这个主代码块也是宏任务\n(2)若遇到Promise，把then之后的内容放进微任务队列\n(3)遇到setTimeout，把他放到宏任务里面\n(4)一次宏任务执行完成，检查微任务队列有无任务 \n(5)有的话执行所有微任务 \n(6)执行完毕后，开始下一次宏任务。\n")])])]),e("h3",{attrs:{id:"_7、那么这个2、3、4、5、6执行的过程就是事件轮询。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、那么这个2、3、4、5、6执行的过程就是事件轮询。"}},[s._v("#")]),s._v(" 7、那么这个2、3、4、5、6执行的过程就是事件轮询。")]),s._v(" "),e("p",[s._v("在这儿感谢掘金大神的文章，为了表示尊重，挂上地址！")]),s._v(" "),e("p",[s._v("https://juejin.im/post/5e1d0de3e51d455887067f90")]),s._v(" "),e("h2",{attrs:{id:"二、"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、"}},[s._v("#")]),s._v(" 二、")])])}),[],!1,null,null,null);t.default=a.exports}}]);