(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{413:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("1128355a",content,!0,{sourceMap:!1})},433:function(t,e,r){"use strict";r(413)},434:function(t,e,r){var c=r(24)(!1);c.push([t.i,".tg{border-collapse:collapse;border-spacing:0}.tg td,.tg th{border-style:solid;border-width:1px;font-family:Arial,sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{font-weight:400}.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}",""]),t.exports=c},469:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{showRendered:!0,images:["https://user-images.githubusercontent.com/55287601/118541376-e361bf00-b751-11eb-9f6a-d672f7671d60.png","https://user-images.githubusercontent.com/55287601/163234253-906cced2-6a52-4cad-85f6-72edd39652bf.png","https://user-images.githubusercontent.com/55287601/118545995-a6003000-b757-11eb-93d8-52e012a9c25c.png","https://user-images.githubusercontent.com/55287601/163232992-eecd67d5-97c1-4a5d-9aa4-8ab5131768cd.png","https://user-images.githubusercontent.com/55287601/118546404-3179c100-b758-11eb-8b30-b700daa17dae.png","https://user-images.githubusercontent.com/55287601/118547279-6d615600-b759-11eb-8520-16edf78c7554.png","https://user-images.githubusercontent.com/55287601/118550840-7e13cb00-b75d-11eb-954a-965bfd657364.png"],latex_code:["\\nabla\\times{\\vec{\\mathbf{B}}} - {\\frac{1}{C}} {\\frac{\\delta{\\vec{\\mathbf{E}}}}{\\delta t}}=4\\pi\\rho","\\ln f_{a,\\sigma^{2}}(\\xi_{1})_{=} \\frac{(\\xi_{1} - a)}{\\sigma^{2}}","H(Y|X)=\\sum_{x\\in{\\mathcal{X}},y\\in{\\mathcal{Y}}}p(x,y) \\log\\left({\\frac{p(x)}{p(x,y)}}\\right)","\\rho\\left({\\frac{\\partial v}{\\partial t}}+v\\cdot\\nabla v\\right)=-\\nabla p+\\nabla\\cdot T+f","\\sigma=\\frac{\\pi\\alpha^{2}\\beta^{3}}{3s}\\left[1 + \\frac{s( - 1 + 4s_{W}^{2})}{2c_{W}^{2}(s - M_{Z}^{2})} + \\frac{s^{2}( - 1 + 4s_{W}^{2} + 8s_{W}^{4})}{4c_{W}^{4}(s - M_{Z}^{2})^{2}}\\right]\\;,","\\begin{array}{l}{{\\mathrm{d}C= - v(r)r{\\mathrm{d}}\\varphi + v(r + {\\mathrm{d}}r)\\cdot(r + {\\mathrm{d}}r){\\mathrm{d}}\\varphi}} \\\\ {{\\mathrm{~}= - v(r)r{\\mathrm{d}}\\varphi + \\left(v(r) + {\\frac{\\partial v}{\\partial r}}{\\mathrm{d}}r\\right)(r + {\\mathrm{d}}r){\\mathrm{d}}\\varphi}} \\\\ {{\\mathrm{~}}} \\\\ {{\\mathrm{~}=v(r){\\mathrm{d}}r{\\mathrm{~}}\\varphi + {\\frac{\\partial v}{\\partial r}}r{\\mathrm{d}}r{\\mathrm{d}}{\\mathrm{~}}{\\mathrm{~}}\\varphi + {\\mathrm{O}}({\\mathrm{d}}^{3})}}\\end{array}","\\begin{array}{c c}{{\\bar{u}_{s}(\\vec{p})\\cdot u_{r}(\\vec{p}) = 2m\\delta_{s r},}} & {{\\qquad u_{s}^{\\dagger}(\\vec{p})\\cdot u_{r}(\\vec{p}) = 2p^{0}\\delta_{s r},}}\\\\ {{\\bar{v}_{s}(\\vec{p})\\cdot v_{r}(\\vec{p}) = -2m\\delta_{s r},}} & {{\\qquad v_{s}^{\\dagger}(\\vec{p})\\cdot v_{r}(-\\vec{p}) = 2p^{0}\\delta_{s r},}}\\\\ {{\\bar{u}_{s}(\\vec{p})\\cdot v_{r}(\\vec{p}) = 0,}} & {{u_{s}^{\\dagger}(\\vec{p})\\cdot v_{r}(-\\vec{p}) = 0,}}\\end{array}"],colors:["white","black","white","white","white","white","white","white"],icon:[1,2,1,1,1,2,2],icons:["mdi-close-box-outline","mdi-checkbox-marked-outline","mdi-approximately-equal-box"],color:["red","green","orange"]}}},o=(r(433),r(77)),n=r(113),l=r.n(n),d=r(431),m=r(466),h=r(391),v=r(224),_=r(467),f=r(47),w=r(468),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"px-7 py-7",attrs:{flat:"",dark:"","min-height":"500"}},[r("v-card-title",[t._v("Examples")]),t._v("\n  Here are some examples that demonstrate the performance of the model. I\n  didn't just want to optimize the metrics, that can be found in the\n  literature if that means images found in the wild will not be recognized.\n  "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"5"}}),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-switch",{attrs:{label:"Switch to generated Latex code"},model:{value:t.showRendered,callback:function(e){t.showRendered=e},expression:"showRendered"}})],1)],1),t._v(" "),t._l(t.latex_code,(function(e,i){return r("v-row",{key:i,staticClass:"py-2 pt-8"},[r("v-col",{attrs:{cols:"5"}},[r("div",{staticClass:"pa-2",style:"background-color: "+t.colors[i]},[r("v-img",{staticClass:"mx-auto",attrs:{src:t.images[i],height:100,contain:""}})],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[t.showRendered?r("div",{directives:[{name:"katex",rawName:"v-katex",value:"\\displaystyle "+e,expression:"'\\\\displaystyle ' + item"}],attrs:{align:"center"}}):r("code",[t._v(t._s(e)+" ")])]),t._v(" "),r("v-col",{attrs:{cols:"1"}},[r("v-icon",{attrs:{color:t.color[t.icon[i]]},domProps:{innerHTML:t._s(t.icons[t.icon[i]])}})],1)],1)})),t._v(" "),r("br"),t._v("\n  Where\n  "),r("v-icon",{attrs:{color:t.color[1]},domProps:{innerHTML:t._s(t.icons[1])}}),t._v(" means the code\n  generates the same image,\n  "),r("v-icon",{attrs:{color:t.color[2]},domProps:{innerHTML:t._s(t.icons[2])}}),t._v(" means that the\n  predicted code compiles and the image is close to the original.\n  "),r("v-icon",{attrs:{color:t.color[0]},domProps:{innerHTML:t._s(t.icons[0])}}),t._v(" means that there are\n  significant differences between the original and the predicted code.\n  "),r("v-card-title",[t._v("Metrics")]),t._v(" "),r("table",{staticClass:"tg"},[r("thead",[r("tr",[r("th",{staticClass:"tg-0kls"}),t._v(" "),r("th",{staticClass:"tg-0kls"},[t._v("BLEU")]),t._v(" "),r("th",{staticClass:"tg-0kls"},[t._v("normed edit distance")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticClass:"tg-0kls"},[t._v("Performance")]),t._v(" "),r("td",{staticClass:"tg-0kls"},[t._v("0.88")]),t._v(" "),r("td",{staticClass:"tg-0kls"},[t._v("0.10")])])])]),t._v(" "),r("br")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCardTitle:d.a,VCol:m.a,VIcon:h.a,VImg:v.a,VRow:_.a,VSheet:f.a,VSwitch:w.a})}}]);