webpackJsonp([0],{"1Qvy":function(n,e){n.exports='## #markdown文档展示\n\n### * card1 数据结构\n\n| 属性名 | 数据类型 | 是否必须 | 默认值 |字段说明 | 备注 |\n| :----------- | :------| :------------ | :----------- |:----------- | :------ |\n| card_type       | int  | 是        | 1 |  card标识符     |   markdown文档展示 |\n| md_type   | string  | 是        |  | 组件的文档名     |    | 比如card1\n\n### *ue样例:\n图片地址:http://wx3.sinaimg.cn/mw690/7f54c80fly1fh1vo3dqmrj208j04vjss.jpg\n\n###  * 样例及对应的json串\n\n```\n<template>\n  <div class="main">\n    \x3c!--card 容器层--\x3e\n    <div v-for="(v,k) in card_group" :key="k">\n      <card :card="v"></card>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        //card 数据\n        card_group: [\n          {\n               card_type:1,\n               md_type:\'card1\'\n          },\n        ]\n      }\n    }\n  }\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style scoped>\n  /*当页面样式*/\n  .main{\n    padding: 0 10%;\n  }\n</style>\n\n```\n'},"5MYj":function(n,e){n.exports="_released： 项目产出目录（所有项目代码会经过压缩合并后产出到这里）\n\nv6-app-src:微信端h5页面（项目的目录）\n\npc-src: PC端页面（项目的目录）\n\nagent-v-src: app端页面（项目的目录）\n"},FYtc:function(n,e){n.exports="\n## 404\n"},"LP/M":function(n,e){n.exports="## #bus 组件与组件直接的通信\n\n### #功能\nvue2中废弃了$dispatch和$broadcast广播和分发事件的方法。父子组件中可以用props和$emit()。如何实现非父子组件间的通信，可以通过实例一个vue实例Bus作为媒介，要相互通信的兄弟组件之中，都引入Bus，之后通过分别调用Bus事件触发和监听来实现组件之间的通信和参数传递。\n\n\n\n### #基础用法\n```\n<template>\n    <div id=\"emit\">\n        <button @click=\"bus\">按钮</button>\n    </div>\n </template>\n\nimport Bus from './bus.js'\nexport default {\n    data() {\n        return {\n            message: ''\"\n        }\n     },\n　　methods: {\n       bus () {\n          Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')\n       }\n    }\n}\n```\n\n### #bus.js源码\n```\n/*\n* 相当于全局变量\n* 通信bus*/\nimport Vue from 'vue';\nconst Bus = new Vue();\nexport default Bus;\n\n```\n"},"MWX+":function(n,e){n.exports="## #延迟按需加载图片\n\n### #功能\n延迟按需加载图片，减少网络请求，加快渲染速度\n\n\n### #基础用法\n```\n/*\n* 全局声明 图片懒加载\n*/\nVue.component('mv-img', require('../marvel/img.vue'));\n\n```\n\n### #demo\n```\n\n<mv-img :src=\"pic.url\"></mv-img>\n\n```\n"},b2qd:function(n,e){n.exports='\n### #功能\n获取上传文件,返回file对象\n\n\n### #基础用法\n```\nBus.$emit("getFile",function (file) {\n    console.log(file)\n  })\n```\n\n### #demo源码\n```\n<template>\n  <div class="card "  >\n    <button @click="click1">点击获取文件</button>\n  </div>\n</template>\n<script>\n  //引入服务\n  import Bus from \'../modals/file\';\n\n  export default {\n    data() {\n      return {};\n    },\n    name: "fileDemo",\n    props: [\'card\'],\n    components: {\n    },\n    methods: {\n      click1:function () {\n        //调用服务\n        Bus.$emit("getFile",function (file) {\n          console.log(file)\n        })\n      }\n    },\n  };\n<\/script>\n<style  >\n\n</style>\n\n```\n'},caqS:function(n,e){n.exports='\n## demo\n• http://140.143.245.118/\n\n## 源码\n• http://gitlab.17zuoye.net/ke.cao/vue-cli\n\n\n# 搭建过程\n### 1、安装 vue-cli 脚手架\n\n1-1:npm install --global vue-cli\n\n1-2:vue init webpack vuetest\n\n1-3:\n```\nbogon:17zuoye caoke$ vue init webpack zxonline\n\n? Project name zxonline\n? Project description A Vue.js project\n? Author\n? Vue build standalone\n? Install vue-router? Yes\n? Use ESLint to lint your code? No\n? Set up unit tests No\n? Setup e2e tests with Nightwatch? No\n? Should we run `npm install` for you after the project has been created? (recom\nmended) npm\n```\n\n### 2、差异点\n2-1:src目录覆盖\n\n2-2:package.json\n```\n  "axios": "^0.18.0",\n  "element-ui": "^2.3.8",\n  "less": "^3.0.2",\n  "less-loader": "^4.1.0",\n  "node-sass": "^4.9.0",\n  "photoswipe": "^4.1.2",\n  "qs": "^6.5.2",\n  "sass-loader": "^7.0.1",\n  "stylus": "^0.54.5",\n  "stylus-loader": "^3.0.2",\n  "text-loader": "^0.0.1",\n  "vue-markdown": "^2.2.4",\n```\n\n2-3:webpack.base.conf.js\n```\n  app: \'./src/entry/main.js\',\n  test: \'./src/entry/test.js\'\n\n  {\n    test: /\\.md$/,\n    use: [\n      {\n        loader: "text-loader"\n      }\n    ]\n  },\n```\n\n2-4:vue-loader.conf.js\n`esModule: false`\n\n### 3、安装、运行\n3-1:npm install\n3-2:npm run dev\n'},dDr9:function(n,e){n.exports="\n### [card编辑器](/admin/mobile_page/edit)\n [card编辑器－demo](/cardVue/demo.html?preview=1)\n### [card编辑器all](/all)\n[card编辑器all-demo](/cardVue/alldemo.html?preview=1)\n"},doMs:function(n,e){n.exports='\n### #功能\n点击图片，查看大图\n\n\n### #基础用法\n```\nBus.$emit(\'mvGallery\', index, list);\n\nlist数组参数：\n   {\n     src: card.url, // 大图\n     w: card.width, // 大图宽度\n     h: card.height, // 大图高度\n     msrc: card.url, // 缩略图\n     el: clickedListItem.getElementsByTagName(\'img\')[i], // 缩略图对应的img DOM\n    }\n\n```\n\n### #demo源码\n```\n<template>\n  <div class="card markdown weibo-media" >\n    <h2>图片全屏预览</h2>\n    <h3>#demo</h3>\n    <ul class="m-auto-list">\n      <li class="m-auto-box" v-for="(pic, index) in big_card.object.small_pics">\n        <div class="m-img-box" @click="thumbnails($event, index, big_card.object.large_pics)">\n          <img :src="pic.url" />\n          <span class="feed-mark" @click.stop.prevent="delImg(index)">X</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</template>\n<script>\n\n  import Bus from \'../modals/pswp\'\n  export default {\n    data() {\n      return {\n        big_card:null\n      };\n    },\n    name: "card3",\n    props: [\'card\'],\n    components: {\n    },\n    created:function(){\n      this.big_card={\n        "text":"",\n        "type":"big_card",\n        "object_type":"picture",\n        "object":{\n          "large_pics":[\n            {\n              "url":"http://wx1.sinaimg.cn/large/7c83ac9bgy1fn5jvvww4bj20xc0m9n3s.jpg",\n              "width":1200,\n              "height":801\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jvwidlaj20xc0m847a.jpg",\n              "width":1200,\n              "height":800\n            },\n            {\n              "url":"http://wx1.sinaimg.cn/large/7c83ac9bgy1fn5jvx560wj20xc0m9gv5.jpg",\n              "width":1200,\n              "height":801\n            },\n            {\n              "url":"http://wx3.sinaimg.cn/large/7c83ac9bgy1fn5jvxs2d9j20xc0m9wm8.jpg",\n              "width":1200,\n              "height":801\n            },\n            {\n              "url":"http://wx3.sinaimg.cn/large/7c83ac9bgy1fn5jvyah8jj20xc0oy0yk.jpg",\n              "width":1200,\n              "height":898\n            },\n            {\n              "url":"http://wx2.sinaimg.cn/large/7c83ac9bgy1fn5jvyrbguj20m80xcjy1.jpg",\n              "width":800,\n              "height":1200\n            },\n            {\n              "url":"http://wx2.sinaimg.cn/large/7c83ac9bgy1fn5jvzd77dj20xc0m9wls.jpg",\n              "width":1200,\n              "height":801\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jvvf99pj20xc0m9wiw.jpg",\n              "width":1200,\n              "height":801\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/large/7c83ac9bgy1fn5jw07ok8j20xc0m9n4t.jpg",\n              "width":1200,\n              "height":801\n            }\n          ],\n          "small_pics":[\n            {\n              "url":"http://wx1.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvvww4bj20xc0m9n3s.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvwidlaj20xc0m847a.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx1.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvx560wj20xc0m9gv5.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx3.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvxs2d9j20xc0m9wm8.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx3.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvyah8jj20xc0oy0yk.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx2.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvyrbguj20m80xcjy1.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx2.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvzd77dj20xc0m9wls.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jvvf99pj20xc0m9wiw.jpg",\n              "width":0,\n              "height":0\n            },\n            {\n              "url":"http://wx4.sinaimg.cn/bmiddle/7c83ac9bgy1fn5jw07ok8j20xc0m9n4t.jpg",\n              "width":0,\n              "height":0\n            }\n          ]\n        }\n      }\n    },\n    methods: {\n      delImg:function (index) {\n        this.card.card_info.big_card.object.small_pics.splice(index,1)\n        this.card.card_info.big_card.object.large_pics.splice(index,1)\n      },\n      thumbnails(e, index, cardList) {\n        const eTarget = e.target || e.srcElement;\n        const list = this.formatThumbItem(eTarget, cardList, index);\n        Bus.$emit(\'mvGallery\', index, list);\n      },\n      // 拼出pswp需要的数据格式\n      formatThumbItem(target, cardList, index) {\n        // 找出父结点\n        const clickedListItem = this.closest(target, (el) => {\n          return el.classList.contains(\'weibo-media\');\n        });\n\n        const cards = cardList.map((card, i) => {\n          if(!card.width) {\n            const style = window.getComputedStyle ? window.getComputedStyle(target, null) : null || target.currentStyle;\n            const windowWidth = document.documentElement.clientWidth || window.innerWidth;\n            card.width = windowWidth;\n            card.height = parseFloat(style.height) / parseFloat(style.width) * windowWidth;\n          }\n          return {\n            src: card.url, // 大图\n            w: card.width, // 大图宽度\n            h: card.height, // 大图高度\n            msrc: card.url, // 缩略图\n            el: clickedListItem.getElementsByTagName(\'img\')[i], // 缩略图对应的img DOM\n          };\n        });\n        return cards;\n      },\n      closest(el, fn) {\n        return el && (fn(el) ? el : this.closest(el.parentNode, fn));\n      }\n    },\n  };\n<\/script>\n<style  >\n  .card2{\n    overflow: hidden;\n  }\n  .m-auto-list{\n    width: 100%;\n  }\n  .m-auto-box{\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    float: left;\n    padding:10px 20px;\n  }\n  .m-img-box{\n\n  }\n</style>\n\n\n```\n'},md3F:function(n,e){n.exports="\n### #功能\n利用canvas压缩图片，减少图片文件体积\n\n\n### #基础用法\n```\ncompress(file, options, callback)\n\n```\n\n### #demo源码\n```\n/*\n* Tencent is pleased to support the open source community by making WeUI.js available.\n*\n* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.\n*\n* Licensed under the MIT License (the \"License\"); you may not use this file except in compliance\n* with the License. You may obtain a copy of the License at\n*\n*       http://opensource.org/licenses/MIT\n*\n* Unless required by applicable law or agreed to in writing, software distributed under the License is\n* distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,\n* either express or implied. See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n\n/**\n * 检查图片是否有被压扁，如果有，返回比率\n * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios\n */\nfunction detectVerticalSquash(img) {\n  // 拍照在IOS7或以下的机型会出现照片被压扁的bug\n  var data;\n  var ih = img.naturalHeight;\n  var canvas = document.createElement('canvas');\n  canvas.width = 1;\n  canvas.height = ih;\n  var ctx = canvas.getContext('2d');\n  ctx.drawImage(img, 0, 0);\n  try {\n    data = ctx.getImageData(0, 0, 1, ih).data;\n  } catch (err) {\n    console.log('Cannot check verticalSquash: CORS?');\n    return 1;\n  }\n  var sy = 0;\n  var ey = ih;\n  var py = ih;\n  while (py > sy) {\n    var alpha = data[(py - 1) * 4 + 3];\n    if (alpha === 0) {\n      ey = py;\n    } else {\n      sy = py;\n    }\n    py = (ey + sy) >> 1; // py = parseInt((ey + sy) / 2)\n  }\n  var ratio = (py / ih);\n  return (ratio === 0) ? 1 : ratio;\n}\n\n/**\n * dataURI to blob, ref to https://gist.github.com/fupslot/5015897\n * @param dataURI\n */\nfunction dataURItoBuffer(dataURI){\n  var byteString = atob(dataURI.split(',')[1]);\n  var buffer = new ArrayBuffer(byteString.length);\n  var view = new Uint8Array(buffer);\n  for (var i = 0; i < byteString.length; i++) {\n    view[i] = byteString.charCodeAt(i);\n  }\n  return buffer;\n}\nfunction dataURItoBlob(dataURI) {\n  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];\n  var buffer = dataURItoBuffer(dataURI);\n  return new Blob([buffer], {type: mimeString});\n}\n\n/**\n * 获取图片的orientation\n * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side\n */\nfunction getOrientation(buffer){\n  var view = new DataView(buffer);\n  if (view.getUint16(0, false) != 0xFFD8) return -2;\n  var length = view.byteLength, offset = 2;\n  while (offset < length) {\n    var marker = view.getUint16(offset, false);\n    offset += 2;\n    if (marker == 0xFFE1) {\n      if (view.getUint32(offset += 2, false) != 0x45786966) return -1;\n      var little = view.getUint16(offset += 6, false) == 0x4949;\n      offset += view.getUint32(offset + 4, little);\n      var tags = view.getUint16(offset, little);\n      offset += 2;\n      for (var i = 0; i < tags; i++)\n        if (view.getUint16(offset + (i * 12), little) == 0x0112)\n          return view.getUint16(offset + (i * 12) + 8, little);\n    }\n    else if ((marker & 0xFF00) != 0xFF00) break;\n    else offset += view.getUint16(offset, false);\n  }\n  return -1;\n}\n\n/**\n * 修正拍照时图片的方向\n * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin\n */\nfunction orientationHelper(canvas, ctx, orientation) {\n  const w = canvas.width, h = canvas.height;\n  if(orientation > 4){\n    canvas.width = h;\n    canvas.height = w;\n  }\n  switch (orientation) {\n    case 2:\n      ctx.translate(w, 0);\n      ctx.scale(-1, 1);\n      break;\n    case 3:\n      ctx.translate(w, h);\n      ctx.rotate(Math.PI);\n      break;\n    case 4:\n      ctx.translate(0, h);\n      ctx.scale(1, -1);\n      break;\n    case 5:\n      ctx.rotate(0.5 * Math.PI);\n      ctx.scale(1, -1);\n      break;\n    case 6:\n      ctx.rotate(0.5 * Math.PI);\n      ctx.translate(0, -h);\n      break;\n    case 7:\n      ctx.rotate(0.5 * Math.PI);\n      ctx.translate(w, -h);\n      ctx.scale(-1, 1);\n      break;\n    case 8:\n      ctx.rotate(-0.5 * Math.PI);\n      ctx.translate(-w, 0);\n      break;\n  }\n}\n\n/**\n * 压缩图片\n */\nfunction compress(file, options, callback) {\n  const reader = new FileReader();\n  reader.onload = function (evt) {\n    if(options.compress === false){\n      // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码\n      file.base64 = evt.target.result;\n      callback(file);\n      return;\n    }\n\n    // 启用压缩的分支\n    const img = new Image();\n    img.onload = function () {\n      const ratio = detectVerticalSquash(img);\n      const orientation = getOrientation(dataURItoBuffer(img.src));\n      const canvas = document.createElement('canvas');\n      const ctx = canvas.getContext('2d');\n\n      const maxW = options.compress.width;\n      const maxH = options.compress.height;\n      let w = img.width;\n      let h = img.height;\n      let dataURL;\n\n      if(w < h && h > maxH){\n        w = parseInt(maxH * img.width / img.height);\n        h = maxH;\n      }else if(w >= h && w > maxW){\n        h = parseInt(maxW * img.height / img.width);\n        w = maxW;\n      }\n\n      canvas.width = w;\n      canvas.height = h;\n\n      if(orientation > 0){\n        orientationHelper(canvas, ctx, orientation);\n      }\n      ctx.drawImage(img, 0, 0, w, h / ratio);\n\n      if(/image\\/jpeg/.test(file.type) || /image\\/jpg/.test(file.type)){\n        dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);\n      }else{\n        dataURL =  canvas.toDataURL(file.type);\n      }\n\n      if(options.type == 'file'){\n        if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){\n          // 压缩出错，以文件方式上传的，采用原文件上传\n          console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');\n          callback(file);\n        }else{\n          let blob = dataURItoBlob(dataURL);\n          blob.id = file.id;\n          blob.name = file.name;\n          blob.lastModified = file.lastModified;\n          blob.lastModifiedDate = file.lastModifiedDate;\n          callback(blob);\n        }\n      }else{\n        if(/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)){\n          // 压缩失败，以base64上传的，直接报错不上传\n          options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));\n          callback();\n        }else{\n          file.base64 = dataURL;\n          callback(file);\n        }\n      }\n    };\n    img.src = evt.target.result;\n  };\n  reader.readAsDataURL(file);\n}\n\nexport default {\n  compress\n};\n\n\n```\n"},miLF:function(n,e){n.exports="\n## hello world 我是一个组件\n\n"},n11u:function(n,e){n.exports="\n### #功能\n本地缓存 sessionStorage、localStorage、cookie的操作方法\n\n\n### #基础用法\n```\nconst storage = require('@/utils/storage');\nconst user=storage.getData('user');\n\n//>返回user json对象\n```\n\n### #demo源码\n```\n<template>\n  <div class=\"card markdown\" >\n    <h2>本地存储storage</h2>\n    <h3>#demo</h3>\n    <textarea v-model=\"userText\">\n    </textarea>\n    <button @click=\"set\">设置</button>\n    <button @click=\"clear\">清除</button>\n  </div>\n</template>\n<script>\n\n  const storage = require('@/utils/storage');\n\n  console.log(storage)\n  export default {\n    data() {\n      return {\n        userText:''\n      };\n    },\n    name: \"storage\",\n    props: ['card'],\n    computed:{\n\n    },\n    methods:{\n      set:function () {\n        storage.setData('user',this.userText)\n      },\n      clear:function () {\n        storage.removeData('user')\n        this.userText=''\n      }\n    },\n    created:function () {\n      this.userText=JSON.stringify(storage.getData('user')||{'name':'hello'});\n    }\n  };\n<\/script>\n<style  >\n  .card2{\n    overflow: hidden;\n  }\n  .m-auto-list{\n    width: 100%;\n  }\n  .m-auto-box{\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    float: left;\n    padding:10px 20px;\n  }\n  .m-img-box{\n\n  }\n</style>\n\n\n```\n"},nxSx:function(n,e){n.exports="## #服务容器\n\n### #功能\n存放服务的容器，也是根据数据去生产不同的组件\n\n\n### #基础用法\n```\n/*\n  注册 服务容器 mv-modal\n* */\n\nVue.component('mv-modal', require('../marvel/modal.vue'));\n\n/*\n  在组件中使用\n* */\n //引入服务\n  import Bus from '../modals/file';\n\n  //调用服务\n  Bus.$emit(\"getFile\",function (file) {\n    console.log(file)\n  })\n```\n\n### #modal.vue源码\n```\n<template>\n<div id=\"servers\">\n  <component v-for=\"name in modalcomponent\" :is=\"'mv-'+name\" :key=\"name\"></component>\n</div>\n</template>\n<script>\n  import Vue from 'vue'\n  import Bus from './bus';\n\n  /*\n    增加服务的接口\n  * */\n  Bus.modalComponent=[];\n  Bus.addModalComponent=function (model) {\n    if(Bus.modalComponent.indexOf(model.name)==-1){\n      Bus.modalComponent.push(model.name)\n      Vue.component(\"mv-\"+model.name, model);\n    }\n  }\n  export default{\n    name: 'modal',\n    data:function () {\n      return {\n        \"modalcomponent\":Bus.modalComponent\n      }\n    },\n\n    props: {\n    },\n  };\n<\/script>\n\n```\n"},"yyA/":function(n,e,t){var a={"./404.md":"FYtc","./bus.md":"LP/M","./card.md":"zh1P","./card1.md":"1Qvy","./file.md":"b2qd","./hello.md":"miLF","./image.md":"md3F","./img.md":"MWX+","./index.md":"dDr9","./load.md":"caqS","./modal.md":"nxSx","./mulu.md":"5MYj","./pswp.md":"doMs","./storage.md":"n11u"};function i(n){return t(r(n))}function r(n){var e=a[n];if(!(e+1))throw new Error("Cannot find module '"+n+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=r,n.exports=i,i.id="yyA/"},zh1P:function(n,e){n.exports='## #组件容器\n\n### #功能\n存放组件的容器，也是根据数据去生产不同的组件\n\n\n### #基础用法\n```\n/*\n  注册 组件容器\n* */\nVue.component(\'card\', require(\'../marvel/card.vue\'));\n\n/*\n  页面上使用\n* */\n<template>\n  <div class="hello">\n    <div v-for="(v,k) in card_group"  :key="k">\n      <card :card="v"></card>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'HelloWorld\',\n    data () {\n      return {\n        card_group: [\n          {\n            card_type:1,\n            md_type:\'load\'\n          }\n        ]\n      }\n    }\n  }\n<\/script>\n```\n\n### #card.vue源码\n```\n<template>\n  <component :style="style" :is="page_type" :card="card" :cid="this._uid"></component>\n</template>\n\n<script>\n  // const component = require.context(\'../marvel/cards\', false, /\\.vue$/);\n  // const requireAll = context => context.keys().map(context);\n  // const components={}\n  // requireAll(component).forEach((card) => {\n  //   const name = (card.name || /(\\S+\\/)(\\S+)\\.vue/.exec(card.hotID)[2]).toLowerCase();\n  //   components[name]=card;\n  // })\n  export default{\n    props:[\'card\'],\n    // components,\n    computed: {\n      style:function () {\n        let card=this.card;\n        if(card.style&&card.style.position==\'fixed\'&&window.innerWidth>750){\n          if(card.style.left&&card.style.left.indexOf("rem")>-1){\n            card.style.left=((window.innerWidth-750)/200+parseFloat(card.style.left))+"rem";\n          }\n          if(card.style.right&&card.style.right.indexOf("rem")>-1){\n            card.style.right=((window.innerWidth-750)/200+parseFloat(card.style.right))+"rem";\n          }\n        }\n        return card.style;\n      },\n      page_type: function () {\n        let type = \'\';\n        if (this.card && this.card.card_type) {\n          if(typeof this.card.card_type=="string"){\n            type=this.card.card_type;\n          }else{\n            type="card"+this.card.card_type;\n          }\n        }\n        return type;\n      }\n    }\n  };\n\n<\/script>\n\n```\n'}});