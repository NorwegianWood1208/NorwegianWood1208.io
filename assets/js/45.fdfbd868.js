(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{528:function(t,a,s){"use strict";s.r(a);var e=s(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"浏览器的缓存机制是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存机制是什么"}},[t._v("#")]),t._v(" 浏览器的缓存机制是什么？")]),t._v(" "),s("p",[t._v("浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识")]),t._v(" "),s("p",[t._v("浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://note.youdao.com/yws/res/11033/1B178FD496E54037B409F90AD3C095C6",alt:"image"}})]),t._v(" "),s("h4",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),s("p",[t._v("强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，一般有三种情况")]),t._v(" "),s("p",[t._v("1、压根不存在，直接从服务端请求，直接add到浏览器缓存")]),t._v(" "),s("p",[t._v("2、存在但是过期了，还是得从服务端获取，然后update浏览器缓存")]),t._v(" "),s("p",[t._v("3、存在且没过期，直接存浏览器缓存取")]),t._v(" "),s("p",[t._v("强缓存需要http请求中的Expires和Cache-Control来控制，其中Cache-Control优先级比Expires高。")]),t._v(" "),s("h4",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。")]),t._v(" "),s("p",[t._v("通俗点讲就是当强缓存的第二种情况，存在但是过期的时候，会继续进行协商缓存，主要有以下两种情况：")]),t._v(" "),s("p",[t._v("1、协商缓存生效，返回304")]),t._v(" "),s("p",[t._v("带着协商缓存的标识访问服务端，服务端根据这个标识判断是否更新了，没更新就返回304，继续走浏览器的缓存")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://note.youdao.com/yws/res/11054/D36D2BF35DB94CCA875A2628EE3EE56C",alt:"image"}})]),t._v(" "),s("p",[t._v("2、协商缓存不生效，返回200")]),t._v(" "),s("p",[t._v("如果更新了就返回200，继续访问，用服务端的数据")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://note.youdao.com/yws/res/11067/4398F5E7C3AE47EC886F6C2D11CC7F5C",alt:"image"}})]),t._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("强缓存")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Expires:Wed, 22 Oct 2018 08:41:00 GMT\nCache-control:Cache-control: max-age=30\n")])])]),s("p",[t._v("协商缓存")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Last-Modified\nIf-Modified-Since\nETag\nIf-None-Match\n")])])]),s("p",[s("img",{attrs:{src:"https://note.youdao.com/yws/res/11073/A19008014AD34F518FDA91717840F897",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);