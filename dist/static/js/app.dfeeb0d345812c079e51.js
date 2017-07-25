webpackJsonp([1],[,,,,,,,,function(t,e,a){"use strict";var s=a(11),n=a.n(s),r=a(34),i=n.a.create({baseURL:r.a.baseURL});e.a={getSources:function(){return i.get("/sources",{params:{language:"en",apiKey:r.a.apiKey}}).then(function(t){return t.data.sources})},getArticles:function(t){return i.get("/articles",{params:{source:t,apiKey:r.a.apiKey,sortBy:"top"}}).then(function(t){return t.data.articles})}}},function(t,e,a){function s(t){a(40)}var n=a(1)(a(29),a(51),s,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(8),a(44)),n=a.n(s),r=a(46),i=a.n(r);e.default={name:"app",components:{NavBar:n.a,SourceSelector:i.a},data:function(){return{selected:{},articles:{}}},methods:{changeSource:function(t){this.selected=t,this.$emit("UpdateSource",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(45),n=a.n(s);e.default={name:"ArticleView",props:["articleObj","articleArr"],components:{SingleArticle:n.a},data:function(){return{isLoading:!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NavBar"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SingleArticle",props:["article","source"],computed:{dateTimeArr:function(){return this.article.publishedAt.split("T")},time:function(){return this.dateTimeArr[1].split(".")[0].slice(0,this.dateTimeArr[1].length-1)},date:function(){return this.dateTimeArr[0]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(8),n=a(43),r=a.n(n);e.default={name:"SourceSelector",components:{ArticleView:r.a},props:[],data:function(){return{sources:[],selectedSource:"",articles:[],isLoading:!1}},mounted:function(){var t=this;this.isLoading=!0,s.a.getSources().then(function(e){t.sources=e,t.isLoading=!1}).catch(function(t){return console.error(t)})},methods:{performGet:function(t){var e=this;s.a.getArticles(t.id).then(function(t){e.articles=t}).catch(function(t){return console.error(t)})}},watch:{selectedSource:function(t){this.performGet(t)}}}},function(t,e,a){"use strict";e.a={apiKey:"877e52469c3742e489a68c164f0a4dee",baseURL:"https://newsapi.org/v1/"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(10),n=a(9),r=a.n(n);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){function s(t){a(38)}var n=a(1)(a(30),a(49),s,"data-v-4f50f1f7",null);t.exports=n.exports},function(t,e,a){function s(t){a(36)}var n=a(1)(a(31),a(47),s,"data-v-21785838",null);t.exports=n.exports},function(t,e,a){function s(t){a(39)}var n=a(1)(a(32),a(50),s,"data-v-50bc736c",null);t.exports=n.exports},function(t,e,a){function s(t){a(37)}var n=a(1)(a(33),a(48),s,"data-v-4ad837e4",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fa fa-newspaper-o"})])]),t._v(" "),a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("strong",[t._v("Headlines")])]),t._v(" "),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenuExample"}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"}),t._v(" "),a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{href:"#"}},[a("small",[t._v("Evan DiGiambattista")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-small is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2"}),t._v(" "),a("div",{staticClass:"column is-8 has-text-centered"},[a("h1",{staticClass:"title"},[t._v("\n              Choose a Source\n            ")]),t._v(" "),a("div",{staticClass:"field"},[a("span",{staticClass:"control",class:{"is-loading":t.isLoading}},[a("span",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSource,expression:"selectedSource"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedSource=e.target.multiple?a:a[0]}}},t._l(t.sources,function(e,s){return a("option",{key:e.id,domProps:{value:e}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))])])]),t._v(" "),a("p",[a("small",[t._v(t._s(t.selectedSource.description))])])]),t._v(" "),a("div",{staticClass:"column is-2"})])])])]),t._v(" "),t.articles!=={}?a("ArticleView",{attrs:{articleObj:t.selectedSource,articleArr:t.articles}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",[t._v("\n    LOADING\n  ")]):t._l(t.articleArr,function(e,s){return a("SingleArticle",{key:s,attrs:{article:e,source:t.articleObj}})}),t._v(" "),a("br"),t._v(" "),a("br")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media is-marginless"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-96x96"},[a("a",{attrs:{href:t.article.urlToImage}},[a("img",{attrs:{src:null===this.article.urlToImage?t.source.urlsToLogos.medium:t.article.urlToImage,alt:"Image not available"}})])])]),t._v(" "),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-marginless is-4"},[a("a",{attrs:{href:t.article.url}},[t._v(t._s(t.article.title))])]),t._v(" "),a("p",{staticClass:"subtitle is-marginless is-6"},[a("small",[t._v("by")]),t._v(" "+t._s(t.article.author))]),t._v(" "),a("small",[a("strong",[t._v(t._s(t.date)+"  @  "+t._s(t.time))])])])]),t._v(" "),a("div",{staticClass:"content"},[t._v("\n        "+t._s(t.article.description)+"\n        "),a("br")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),t._v(" "),a("SourceSelector",{on:{SourceChanged:function(e){t.changeSource(e)}}})],1)},staticRenderFns:[]}}],[35]);
//# sourceMappingURL=app.dfeeb0d345812c079e51.js.map