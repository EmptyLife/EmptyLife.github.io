webpackJsonp([2],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("NYxO"),s=n("3EgV"),r=n.n(s),o=n("x4/c"),c=n.n(o),l=n("BO1k"),h=n.n(l),u=(n("gtmO"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"hidden-sm-and-down",attrs:{small:"",dark:"",height:"30"}},[n("v-toolbar-items",{attrs:{small:""}},[n("v-chip",{attrs:{color:"indigo","text-color":"white"}},[n("v-avatar",[n("v-icon",[t._v("show_chart")])],1),t._v("\n\t\t\t"+t._s(t.localPair)+"\n\t\t")],1),t._v(" "),t._l(t.localExchanges,function(e){return n("v-btn",{staticClass:"btn",staticStyle:{"font-size":"10px"},attrs:{flat:"",small:"",disabled:"CLOSED"===e.state},on:{click:function(n){t.onClick_ChangeVisibility(e.exchange)}}},[t._v("\n\t\t\t"+t._s(e.exchange)+"  \n\t\t\t\t\n\t\t\t"),"OPENED"===e.state?[e.visibility?n("v-icon",{style:{color:e.color},attrs:{small:""}},[t._v("invert_colors")]):t._e(),t._v(" "),e.visibility?t._e():n("v-icon",{attrs:{small:""}},[t._v("visibility_off")])]:t._e(),t._v(" "),"CLOSED"===e.state?[n("span",{staticClass:"progress-loader"},[n("v-icon",{attrs:{light:"",small:""}},[t._v("cached")])],1)]:t._e()],2)})],2)],1)},staticRenderFns:[]});var v=n("VU/8")({data:function(){return{localPair:this.pair,localExchanges:this.exchanges}},props:["pair","exchanges"],created:function(){},watch:{pair:function(t){this.localPair=t},exchanges:function(t){this.localExchanges=t}},methods:{onClick_ChangeVisibility:function(t){var e=this.localExchanges.find(function(e){return e.exchange===t});e.visibility=!e.visibility,this.$emit("updateExchangeVisibility",e.exchange,e.visibility)},setExchanges:function(t){}}},u,!1,function(t){n("zQ1K")},"data-v-232056d8",null).exports,f=n("d7EF"),d=n.n(f),_=n("Dd8w"),p=n.n(_),y=n("Zx67"),g=n.n(y),m=n("zwoO"),x=n.n(m),b=n("Pf15"),w=n.n(b),C=n("mvHQ"),k=n.n(C),D=n("Zrlr"),P=n.n(D),T=n("wxAW"),E=n.n(T),R=function t(){P()(this,t)};function F(t,e,n){var a=t.createShader(n);return t.shaderSource(a,e),t.compileShader(a),a}R.getShaderSource=function(t){return document.getElementById(t).textContent.replace(/^\s+|\s+$/g,"")},R.createProgram=function(t,e,n){var a=t.createProgram(),i=F(t,e,t.VERTEX_SHADER),s=F(t,n,t.FRAGMENT_SHADER);t.attachShader(a,i),t.deleteShader(i),t.attachShader(a,s),t.deleteShader(s),t.linkProgram(a);var r=t.getProgramInfoLog(a);return r&&console.log(r),(r=t.getShaderInfoLog(i))&&console.log(r),(r=t.getShaderInfoLog(s))&&console.log(r),a},R.loadImage=function(t,e){var n=new Image;return n.src=t,n.onload=function(){e(n)},n},R.loadImages=function(t,e){var n=[],a=t.length;function i(){--a<=0&&e(n)}for(var s=0;s<a;++s)n.push(loadImage(t[s],i))},R.loadObj=function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="text",n.onload=function(t){var n=new OBJ.Mesh(this.response);e(n)},n.send()};var A=R,L="#version 300 es\n        precision highp float;\n        precision highp int;\n        precision highp usampler2D;\n\n        uniform vec4 uPos;\n        uniform vec4 uMul;\n\t\tuniform vec4 uViewPort;\n\t\t\n\t\tuniform vec4 uColor;\n\n        out vec4 vColor;\n \n        layout(location = 0) in vec2 aPosY_v2;\n        layout(location = 1) in vec2 aPosX_v2;\n        //layout(location = 1) in vec2 aPosX_v2_sv;\n        //layout(location = 2) in vec2 aPosX_v2_cl;\n\n        //layout(location = 0) in vec2 aPos_v2[2];\n        //layout(location = 0) in vec4 aPos_v4;\n\n\n\t\tvec2 softDouble_split(float a) {\n\t\t\tvec2 z;\n\t\t\tz.x = a;\n\t\t\tz.y = 0.0;\n\t\t\treturn z;\n\t\t}\n\t\tfloat softDouble_join(vec2 ds) {\n\t\t\treturn ds[0] + ds[1];\n\t\t}\n\t\tvec2 softDouble_add(vec2 dsa, vec2 dsb) {\n\t\t\tvec2 dsc;\n\t\t\tfloat t1, t2, e;\n\n\t\t\tt1 = dsa.x + dsb.x;\n\t\t\te = t1 - dsa.x;\n\t\t\tt2 = ((dsb.x - e) + (dsa.x - (t1 - e))) + dsa.y + dsb.y;\n\n\t\t\tdsc.x = t1 + t2;\n\t\t\tdsc.y = t2 - (dsc.x - t1);\n\t\t\treturn dsc;\n\t\t}\n\t\tvec2 softDouble_mul(vec2 dsa, vec2 dsb) {\n\t\t\tvec2 dsc;\n\t\t\tfloat c11, c21, c2, e, t1, t2;\n\t\t\tfloat a1, a2, b1, b2, cona, conb, split = 8193.;\n\n\t\t\tcona = dsa.x * split;\n\t\t\tconb = dsb.x * split;\n\t\t\ta1 = cona - (cona - dsa.x);\n\t\t\tb1 = conb - (conb - dsb.x);\n\t\t\ta2 = dsa.x - a1;\n\t\t\tb2 = dsb.x - b1;\n\n\t\t\tc11 = dsa.x * dsb.x;\n\t\t\tc21 = a2 * b2 + (a2 * b1 + (a1 * b2 + (a1 * b1 - c11)));\n\n\t\t\tc2 = dsa.x * dsb.y + dsa.y * dsb.x;\n\n\t\t\tt1 = c11 + c2;\n\t\t\te = t1 - c11;\n\t\t\tt2 = dsa.y * dsb.y + ((c2 - e) + (c11 - (t1 - e))) + c21;\n\n\t\t\tdsc.x = t1 + t2;\n\t\t\tdsc.y = t2 - (dsc.x - t1);\n\n\t\t\treturn dsc;\n\t\t}\n\t\tvec2 softDouble_sub(vec2 dsa, vec2 dsb) {\n\t\t\treturn softDouble_add(dsa, softDouble_mul(softDouble_split(-1.0),dsb));\n\t\t}\n\n\t\tvec4 softDouble_vec4_add(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_add(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_add(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\n\t\tvec4 softDouble_vec4_sub(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_sub(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_sub(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\t\t\n\t\tvec4 softDouble_vec4_mul(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_mul(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_mul(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\t\t\n\t\tvec2 softDouble_vec4_join(vec4 a) {\n\t\t\treturn vec2(\n\t\t\t\tsoftDouble_join(vec2(a[0], a[1])),\n\t\t\t\tsoftDouble_join(vec2(a[2], a[3]))\n\t\t\t);\n\t\t}\n\n\t\t\n\n\t\tvoid main() {\n\t\t\tvColor = uColor;\n\n\n\t\t\t\n\t\t\t/**\n\t\t\tvec2 aPos_v2[2];\n\t\t\taPos_v2[0] = vec2(0,0);\n\t\t\taPos_v2[1] = vec2(0,1);\n\t\t\tvec4 aPos_v4 = vec4(aPos_v2[0][0],aPos_v2[0][1], aPos_v2[1][0],aPos_v2[1][1]);\n\t\t\t*/\n\n\t\t\t\n\t\t\t//vec4 aPos_v4 = vec4(0,0,0,0);\n\t\t\tvec4 aPos_v4 = vec4(aPosX_v2[0],aPosX_v2[1], aPosY_v2[0],aPosY_v2[1]);\n\t\t\t\n\n\t\t\tvec4 pos_v4 = aPos_v4;\n\t\t\tpos_v4 = softDouble_vec4_add(pos_v4, uPos);\n\t\t\tpos_v4 = softDouble_vec4_mul(pos_v4, uMul);\n\t\t\n\t\t\tvec2 pos = softDouble_vec4_join(pos_v4);\n\t\t\t\n\t\t\tif ( pos.y < -1.0 )\n\t\t\t\tvColor[0] = 0.7;\n\t\t\t\t\t\n            gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }\n\n\t\t\n\t\t\n",S="#version 300 es\n        precision highp float;\n        precision highp int;\n        precision highp usampler2D;\n\t\t\n\t\tin vec4 vColor;\n        out vec4 outColor;\n\n        void main() {\n\t\t\t\n\t\t\toutColor = vColor;\n        }\n",B=n("vzCy"),I=n.n(B),O=function(){function t(){P()(this,t)}return E()(t,null,[{key:"split",value:function(t){var e=new Float32Array(2);return this.split=function(t){return e[0]=t,e[1]=t-e[0],[e[0],e[1]]},this.split(t)}},{key:"join",value:function(t){return t[0]+t[1]}},{key:"add",value:function(t,e){t=new Float32Array([t[0],t[1]]),e=new Float32Array([e[0],e[1]]);var n=new Float32Array(2),a=new Float32Array(3);return a[0]=t[0]+e[0],a[2]=a[0]-t[0],a[1]=e[0]-a[2]+(t[0]-(a[0]-a[2]))+t[1]+e[1],n[0]=a[0]+a[1],n[1]=a[1]-(n[0]-a[0]),[n[0],n[1]]}}]),t}();new I.a;console.log("cws");var X=function(){function t(){P()(this,t),this.count=0,this.time=Date.now(),this.array=[]}return E()(t,[{key:"update",value:function(){this.count++,this.array.push(Date.now())}},{key:"getFps",value:function(t){if(this.array.length<2)return null;for(var e=1,n=this.array[this.array.length-1],a=this.array.length-2;a>=0&&!(this.array[a]+t<=n);a--)e++;return e}}]),t}(),U=(function(){function t(e){P()(this,t),this.el=e,this.width,this.height,this.min=0,this.max=0,this.updateView()}E()(t,[{key:"update",value:function(t,e){}},{key:"updateView",value:function(){this.width=this.el.clientWidth,this.height=this.el.clientHeight}}])}(),function(){function t(e,n){P()(this,t),this.gl=e.gl,this.glProgram=e.glProgram,this.glUniforms=e.glUniforms,this.glAttributes=e.glAttributes,this.BUFFER_LENGTH=65536,this.glBuffersGroupArray=[],this.lastPoint_y=null,this.lastPoint_x_sv=null,this.lastPoint_x_cl=null,this.lastPoint_timestamp=null,this.tmpFloat32ArrayY=new Float32Array(1024),this.tmpFloat32ArrayX_sv=new Float32Array(1024),this.tmpFloat32ArrayX_cl=new Float32Array(1024),this.color=new Float32Array(n),this.isRender=!0,this.init()}return E()(t,[{key:"init",value:function(){this.newBuffersGroup()}},{key:"newBuffersGroup",value:function(){var t={aPosY_v2:null,aPosX_v2_sv:null,aPosX_v2_cl:null,length:0,maxLength:this.BUFFER_LENGTH};function e(t){var e=gl.createBuffer();return gl.bindBuffer(gl.ARRAY_BUFFER,e),gl.bufferData(gl.ARRAY_BUFFER,t,gl.STATIC_DRAW),gl.bindBuffer(gl.ARRAY_BUFFER,null),e}this.glBuffersGroupArray.push(t);var n=2*(t.maxLength+10)*4;t.aPosX_v2_sv=e(n),t.aPosX_v2_cl=e(n),t.aPosY_v2=e(n)}},{key:"getBuffersGroup",value:function(){return this.glBuffersGroupArray[this.glBuffersGroupArray.length-1]}},{key:"addTradeTickPoint",value:function(t){var e=t.timestamp_sv,n=t.timestamp_cl,a=t.price;if(a<=0)this.lastClear();else{var i=this.getBuffersGroup();if(null!==this.lastPoint_y?this.lastPoint_y!==a&&this._writePoints(-1,[e,n,this.lastPoint_y],[e,n,this.lastPoint_y],[e,n,a],[e,n,a],[e,n,a]):this._writePoints(0,[e,n,a],[e,n,a]),i.length>=i.maxLength)return this.lastClear(),this.newBuffersGroup(),this.addTradeTickPoint(t);this.lastPoint_y=a,this.lastPoint_x_sv=e,this.lastPoint_x_cl=n,this.lastPoint_timestamp=Date.now()}}},{key:"lastClear",value:function(){this.lastPoint_y=this.lastPoint_x_sv=this.lastPoint_x_cl=this.lastPoint_timestamp=null}},{key:"_writePointsToArray",value:function(){for(var t=0,e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var i=!0,s=!1,r=void 0;try{for(var o,c=h()(n);!(i=(o=c.next()).done);i=!0){var l=o.value,u=O.split(l[0]),v=O.split(l[1]),f=O.split(l[2]);this.tmpFloat32ArrayX_sv[t+0]=u[0],this.tmpFloat32ArrayX_sv[t+1]=u[1],this.tmpFloat32ArrayX_cl[t+0]=v[0],this.tmpFloat32ArrayX_cl[t+1]=v[1],this.tmpFloat32ArrayY[t+0]=f[0],this.tmpFloat32ArrayY[t+1]=f[1],t+=2}}catch(t){s=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw r}}}},{key:"_writePoints",value:function(t){for(var e=this.gl,n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];function s(t,n,a,i){e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferSubData(e.ARRAY_BUFFER,a,n,0,i),e.bindBuffer(e.ARRAY_BUFFER,null)}this._writePointsToArray.apply(this,a);var r=this.getBuffersGroup();s(r.aPosX_v2_sv,this.tmpFloat32ArrayX_sv,2*(r.length+t)*4,2*a.length),s(r.aPosX_v2_cl,this.tmpFloat32ArrayX_cl,2*(r.length+t)*4,2*a.length),s(r.aPosY_v2,this.tmpFloat32ArrayY,2*(r.length+t)*4,2*a.length),r.length+=a.length+t}},{key:"draw",value:function(){var t=this.gl;function e(e,n){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,null)}t.uniform4fv(this.glUniforms.uColor,this.color),null!==this.lastPoint_timestamp&&this._writePoints(-1,[this.lastPoint_x_sv+Date.now()-this.lastPoint_timestamp,this.lastPoint_x_cl+Date.now()-this.lastPoint_timestamp,this.lastPoint_y]);var n=!0,a=!1,i=void 0;try{for(var s,r=h()(this.glBuffersGroupArray);!(n=(s=r.next()).done);n=!0){var o=s.value;o.length&&(e(o.aPosY_v2,this.glAttributes.aPosY_v2),e(window.IS_CL_TIME?o.aPosX_v2_cl:o.aPosX_v2_sv,this.glAttributes.aPosX_v2),t.drawArrays(t.LINES,0,o.length))}}catch(t){a=!0,i=t}finally{try{!n&&r.return&&r.return()}finally{if(a)throw i}}}}]),t}()),Y=function(){function t(e){P()(this,t),this.gl=e,this.context={gl:e,glProgram:null,glUniforms:{},glAttributes:{}};var n=this.context.glProgram=A.createProgram(e,L,S);e.useProgram(n),this.context.glUniforms.uColor=e.getUniformLocation(n,"uColor"),this.context.glAttributes.aPosY_v2=e.getAttribLocation(n,"aPosY_v2"),this.context.glAttributes.aPosX_v2=e.getAttribLocation(n,"aPosX_v2"),this.map={},this.array=[]}return E()(t,[{key:"useProgram",value:function(){var t=this.gl,e=this.context.glProgram;t.useProgram(e)}},{key:"addTradeTick",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,0,0,1],n=new U(this.context,e);this.map[t]=n,this.array.push(n)}},{key:"delTradeTick",value:function(t){this.map[t].free(),delete this.map[t]}},{key:"addTradeTickPoint",value:function(t,e){this.map[t].addTradeTickPoint(e)}},{key:"addTradeTickArray",value:function(t,e){}},{key:"setRenderFlag",value:function(t,e){this.map[t].isRender=e}},{key:"draw",value:function(){var t=this.gl,e=this.context.glProgram;t.useProgram(e);var n=!0,a=!1,i=void 0;try{for(var s,r=h()(this.array);!(n=(s=r.next()).done);n=!0){var o=s.value;o.isRender&&o.draw()}}catch(t){a=!0,i=t}finally{try{!n&&r.return&&r.return()}finally{if(a)throw i}}}}]),t}(),M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];P()(this,t),this.section=k()(e)}return E()(t,[{key:"_getFullKey",value:function(t){return this.section+k()(t)}},{key:"get",value:function(t,e){var n=localStorage.getItem(this._getFullKey(t));if(n)try{return JSON.parse(n)}catch(t){}return e}},{key:"set",value:function(t,e){return localStorage.setItem(this._getFullKey(t),k()(e)),e}}]),t}(),W=function(t){function e(t){P()(this,e);var n=x()(this,(e.__proto__||g()(e)).call(this));return n.options=p()({},t),window.chartRender=n,n.storage=new M("chart"),n.elChart=n.options.elChart,n.elCanvas=n.elChart.querySelector(".app-chart-canvas"),n.elCanvasChartInfoX=n.elChart.querySelector(".app-chart-x-info-c"),n.elCanvasChartInfoY=n.elChart.querySelector(".app-chart-y-info-c"),n.contextChartInfoX=n.elCanvasChartInfoX.getContext("2d"),n.contextChartInfoY=n.elCanvasChartInfoY.getContext("2d"),n.infoYWidth=45,n.infoXHeight=15,n._eventsList=[],n.setEvents(),n.width=null,n.height=null,n.scale_user_x=n.storage.get("chart.scale_user_x",1/60),n.scale_user_y=n.storage.get("chart.scale_user_y",1),n.scale_user_y=n.storage.get("chart.scale_user_y",1/90),n.scale_width=null,n.scale_height=null,n.x=null,n.y=null,n.scale_x=null,n.scale_y=null,n.isRender=!0,n.price=0,n.priceData={map:{},array:[]},n}return w()(e,t),E()(e,[{key:"update",value:function(){this.scale_width=1/this.width,this.scale_height=1/this.height,this.scale_x=this.scale_user_x*this.scale_width,this.scale_y=this.scale_user_y*this.scale_height,this.storage.set("chart.scale_user_x",this.scale_user_x),this.storage.set("chart.scale_user_y",this.scale_user_y),this.writeChartInfoX(),this.writeChartInfoY()}},{key:"_setEvent",value:function(t,e,n,a,i){t[e](a,i),this._eventsList=this._eventsList||[],this._eventsList.push({context:t,addFnName:e,removeFnName:n,eventName:a,callback:i})}},{key:"_setEventDom",value:function(t,e,n){this._setEvent(t,"addEventListener","removeEventListener",e,n)}},{key:"_setEventMousedownMousemove",value:function(t,e){this._setEventDom(t,"mousedown",function(){window.addEventListener("mousemove",e),window.addEventListener("mouseup",function t(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t)})})}},{key:"setEvents",value:function(){var t=this;this._setEventDom(window,"resize",this._onResize.bind(this)),this._setEventDom(window,"load",this._onResize.bind(this)),this._setEventMousedownMousemove(this.elCanvasChartInfoX,function(e){t.scale_user_x*=-e.movementX*t.scale_width+1,t.update()}),this._setEventMousedownMousemove(this.elCanvasChartInfoY,function(e){t.scale_user_y*=-e.movementY*t.scale_height+1,t.update()}),this._setEventMousedownMousemove(this.elCanvas,function(e){t.x+=2*e.movementX/t.scale_x/t.width,t.y-=2*e.movementY/t.scale_y/t.height,t.update()})}},{key:"delEvents",value:function(){this._eventsList.forEach(function(t){t.context[t.removeFnName](t.eventName,t.callback)}),this._eventsList=[]}},{key:"writeChartInfoX",value:function(){var t=chartRender.contextChartInfoX;t.fillStyle="#000",t.clearRect(0,0,chartRender.elCanvasChartInfoX.width,chartRender.elCanvasChartInfoX.height),t.fillRect(0,0,chartRender.elCanvasChartInfoX.width,chartRender.elCanvasChartInfoX.height),t.strokeStyle="#FFF",t.beginPath(),t.moveTo(0,0),t.lineTo(chartRender.elCanvasChartInfoX.width,0),t.stroke()}},{key:"writeChartInfoY",value:function(){var t=chartRender.contextChartInfoY;if(t.fillStyle="#000",t.fillRect(0,0,chartRender.elCanvasChartInfoY.width,chartRender.elCanvasChartInfoY.height),t.font="10px monospace",t.fillStyle="#FFF",t.textAlign="left",t.textBaseline="middle",t.strokeStyle="#FFF",t.beginPath(),t.moveTo(0,0),t.lineTo(0,chartRender.elCanvasChartInfoY.height),t.stroke(),this.y){this.height,this.scale_user_y;var e,n=10*-Math.floor(this.y/10);t.beginPath();var a=this.height/this.scale_user_y*2,i=a/20,s=(this.scale_user_y,function(t){return t-t%(arguments.length>1&&void 0!==arguments[1]?arguments[1]:10)}),r=s(i);i<10&&(r=s(i,.5));for(var o=n-a,c=o=(o/(e=r||.1)|0)*e;c<n+a;c+=e){var l=-c-this.y,h=this.height/2+l*this.scale_user_y/2;t.fillText(c.toFixed(1),5,h),t.moveTo(0,h),t.lineTo(4,h)}t.stroke(),this.writeChartLabelY()}}},{key:"writeChartLabelY",value:function(){var t=chartRender.contextChartInfoY,e=!0,n=!1,a=void 0;try{for(var i,s=h()(this.priceData.array);!(e=(i=s.next()).done);e=!0){var r=i.value,o=r.price,c=r.colorBackground,l=r.colorText,u=r.isRender;if(o&&u){var v=-o-this.y,f=this.height/2+v*this.scale_user_y/2;t.fillStyle=c,t.fillRect(1,f-10,this.elCanvasChartInfoY.width,20),t.fillStyle=l,t.font="12px monospace",t.fillText(o.toFixed(1),3,f)}}}catch(t){n=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}}},{key:"_onResize",value:function(){this.appWidth=0|this.elChart.clientWidth,this.appHeight=0|this.elChart.clientHeight,this.width=this.elCanvas.style.width=this.elCanvas.width=this.appWidth-this.infoYWidth,this.height=this.elCanvas.style.height=this.elCanvas.height=this.appHeight-this.infoXHeight,this.elCanvasChartInfoX.style.width=this.elCanvasChartInfoX.width=this.width,this.elCanvasChartInfoX.style.height=this.elCanvasChartInfoX.height=this.infoXHeight,this.elCanvasChartInfoY.style.width=this.elCanvasChartInfoY.width=this.infoYWidth,this.elCanvasChartInfoY.style.height=this.elCanvasChartInfoY.height=this.height,this.elCanvasChartInfoX.style.top=this.height,this.elCanvasChartInfoY.style.left=this.width,this.update(),this.emit("resize")}},{key:"setRenderFlag",value:function(t,e){var n=this.priceData.map[t];n&&(n.isRender=e,this.isRender=!0)}},{key:"addPrice",value:function(t,e){var n="rgb("+e.map(function(t){return 255*t|0}).slice(0,3).join(",")+")",a="rgb("+e.map(function(t){return 255*(1-t)|0}).slice(0,3).join(",")+")";this.priceData.array.push(this.priceData.map[t]={colorOrigin:e,colorBackground:n,colorText:a,price:null,isRender:!0})}},{key:"updatePrice",value:function(t,e){this.priceData.map[t].price=e,this.isRender=!0}},{key:"draw",value:function(){this.isRender&&this.writeChartInfoY(),this.isRender=!1}}]),e}(I.a),z=function(){function t(e){P()(this,t),this.options=p()({exchangesRules:[]},e),this.exchangesRules=this.options.exchangesRules,this.exchangesRulesMap={};var n=!0,a=!1,i=void 0;try{for(var s,r=h()(this.exchangesRules);!(n=(s=r.next()).done);n=!0){var o=s.value,c=d()(o,3),l=c[0],u=c[1],v=c[2];this.exchangesRulesMap[l]={id:l,color:u,timeType:v,prevPrice:null}}}catch(t){a=!0,i=t}finally{try{!n&&r.return&&r.return()}finally{if(a)throw i}}this.canvas=e.canvas,this.gl=null,this.chart=new W(e),this.initWebgl(),this.v3(),this.closed=!1,window.WebglRenderInst=this}return E()(t,[{key:"addTradeTick",value:function(t,e){var n=this.exchangesRulesMap[t];n&&(e={price:e[0],timestamp_sv:e[2],timestamp_cl:e[3]},this.webglTradeTickLine.addTradeTickPoint(t,e),n.prevPrice!==e.price&&(n.prevPrice=e.price,this.chart.updatePrice(t,e.price)),this.chart.x||(this.chart.x=-e.timestamp_sv,this.chart.y=-e.price))}},{key:"setVisibility",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.webglTradeTickLine.setRenderFlag(t,e),this.chart.setRenderFlag(t,e)}},{key:"v3",value:function(){var t=this,e=this.gl;window.gl=e;var n=this.webglTradeTickLine=new Y(e);n.useProgram();var a=!0,i=!1,s=void 0;try{for(var r,o=h()(this.exchangesRules);!(a=(r=o.next()).done);a=!0){var c=r.value,l=d()(c,3),u=l[0],v=l[1];l[2];n.addTradeTick(u,v),this.chart.addPrice(u,v)}}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}var f=Date.now(),_=window.fps=new X;setInterval(function(){document.getElementById("show-fps").innerHTML=_.getFps(1e3)},100);!function a(){t.closed||(_.update(),function(){e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),n.useProgram();var a=Date.now()-f;f=Date.now(),t.chart.x&&(t.chart.x-=a);var i=e.getUniformLocation(n.context.glProgram,"uPos"),s=e.getUniformLocation(n.context.glProgram,"uMul");e.uniform4fv(i,new Float32Array([].concat(O.split(t.chart.x),O.split(t.chart.y)))),e.uniform4fv(s,new Float32Array([].concat(O.split(t.chart.scale_x),O.split(t.chart.scale_y)))),n.draw(),t.chart.draw()}(),requestAnimationFrame(a))}(),this.chart.on("resize",function(){e&&e.viewport(0,0,t.chart.width,t.chart.height)})}},{key:"initWebgl",value:function(){var t=this.gl=this.canvas.getContext("webgl2",{antialias:!1});if(!t)return console.error("WebGL 2 is not available"),void alert("WebGL 2 is not available");this.programCandlestick=A.createProgram(t,"#version 300 es\n        precision highp float;\n        precision highp int;\n        precision highp usampler2D;\n\n        uniform vec4 uPos;\n        uniform vec4 uMul;\n\t\tuniform vec4 uViewPort;\n\t\t\n\t\tuniform float uCandlestickWidth;\n\t\tuniform float uCandlewickWidth;\n\t\tuniform sampler2D uTexture;\n\t\t\n        out vec4 vColor;\n \n\t\t\n\t\tstruct candestick_t {\n\t\t\tvec2 open;\n\t\t\tvec2 close;\n\t\t\tvec2 min;\n\t\t\tvec2 max;\n\t\t\t\n\t\t\tvec2 time;\n\t\t};\n\t\t\n        //layout(location = 0) in vec4 aPos_v4;\n        layout(location = 1) in float aType;\n        layout(location = 2) in float aIndex;\n\n\t\tvec2 softDouble_split(float a) {\n\t\t\tvec2 z;\n\t\t\tz.x = a;\n\t\t\tz.y = 0.0;\n\t\t\treturn z;\n\t\t}\n\t\tfloat softDouble_join(vec2 ds) {\n\t\t\treturn ds[0] + ds[1];\n\t\t}\n\t\tvec2 softDouble_add(vec2 dsa, vec2 dsb) {\n\t\t\tvec2 dsc;\n\t\t\tfloat t1, t2, e;\n\n\t\t\tt1 = dsa.x + dsb.x;\n\t\t\te = t1 - dsa.x;\n\t\t\tt2 = ((dsb.x - e) + (dsa.x - (t1 - e))) + dsa.y + dsb.y;\n\n\t\t\tdsc.x = t1 + t2;\n\t\t\tdsc.y = t2 - (dsc.x - t1);\n\t\t\treturn dsc;\n\t\t}\n\t\tvec2 softDouble_mul(vec2 dsa, vec2 dsb) {\n\t\t\tvec2 dsc;\n\t\t\tfloat c11, c21, c2, e, t1, t2;\n\t\t\tfloat a1, a2, b1, b2, cona, conb, split = 8193.;\n\n\t\t\tcona = dsa.x * split;\n\t\t\tconb = dsb.x * split;\n\t\t\ta1 = cona - (cona - dsa.x);\n\t\t\tb1 = conb - (conb - dsb.x);\n\t\t\ta2 = dsa.x - a1;\n\t\t\tb2 = dsb.x - b1;\n\n\t\t\tc11 = dsa.x * dsb.x;\n\t\t\tc21 = a2 * b2 + (a2 * b1 + (a1 * b2 + (a1 * b1 - c11)));\n\n\t\t\tc2 = dsa.x * dsb.y + dsa.y * dsb.x;\n\n\t\t\tt1 = c11 + c2;\n\t\t\te = t1 - c11;\n\t\t\tt2 = dsa.y * dsb.y + ((c2 - e) + (c11 - (t1 - e))) + c21;\n\n\t\t\tdsc.x = t1 + t2;\n\t\t\tdsc.y = t2 - (dsc.x - t1);\n\n\t\t\treturn dsc;\n\t\t}\n\t\tvec2 softDouble_sub(vec2 dsa, vec2 dsb) {\n\t\t\treturn softDouble_add(dsa, softDouble_mul(softDouble_split(-1.0),dsb));\n\t\t}\n\n\t\tvec4 softDouble_vec4_add(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_add(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_add(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\n\t\tvec4 softDouble_vec4_sub(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_sub(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_sub(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\t\t\n\t\tvec4 softDouble_vec4_mul(vec4 a, vec4 b) {\n\t\t\tvec4 r;\n\t\t\tvec2 tmp1, tmp2; \n\t\t\ttmp1 = softDouble_mul(vec2(a[0], a[1]), vec2(b[0], b[1]));\n\t\t\ttmp2 = softDouble_mul(vec2(a[2], a[3]), vec2(b[2], b[3]));\n\t\t\tr[0] = tmp1[0]; r[1] = tmp1[1]; r[2] = tmp2[0]; r[3] = tmp2[1];\n\t\t\treturn r;\n\t\t}\t\t\n\t\tvec2 softDouble_vec4_join(vec4 a) {\n\t\t\treturn vec2(\n\t\t\t\tsoftDouble_join(vec2(a[0], a[1])),\n\t\t\t\tsoftDouble_join(vec2(a[2], a[3]))\n\t\t\t);\n\t\t}\n\t\t\n\t\t/*\n\t\t#define SOFT_DOUBLE_MODN (1e6)\n\t\tvec3 softDouble_add_vec3(vec3 x_lo, vec3 x_hi, vec3 y_low, vec3 y_hi) {\n\t\t\tvec3 t1 = x_lo - y_low;\n\t\t\tvec3 e = t1 - x_lo;\n\t\t\tvec3 t2 = ((-y_low - e) + (x_lo - (t1 - e))) + x_hi - y_hi;\n\t\t\tvec3 high_delta = t1 + t2;\n\t\t\tvec3 low_delta = t2 - (high_delta - t1);\n\t\t\tvec3 p = high_delta + low_delta;\n\t\t\treturn p;\n\t\t}\n\t\tfloat softDouble_join(float lo, float hi) {\n\t\t\treturn lo + hi * SOFT_DOUBLE_MODN;\n\t\t}\n\t\tvoid softDouble_add(float x_lo, float x_hi, float y_lo, float y_hi, float *out_lo, float *out_hi) {\n\t\t\tfloat r_lo = x_lo + y_lo;\n\t\t\tfloat r_hi = x_hi + y_hi;\n\t\t\tif ( r_lo >= SOFT_DOUBLE_MODN ) {\n\t\t\t\tr_hi += 1;\n\t\t\t\tr_lo -= SOFT_DOUBLE_MODN;\n\t\t\t} else if ( r_lo <= -SOFT_DOUBLE_MODN ) {\n\t\t\t\tr_hi -= 1;\n\t\t\t\tr_lo += SOFT_DOUBLE_MODN;\n\t\t\t}\n\t\t\t\n\t\t\t*out_lo = r_lo;\n\t\t\t*out_hi = r_hi;\n\t\t}\n\t\t*/\n        /*\n\t\tvec2 candeStick(float type, float width, float width2) {\n\t\t\tfloat w2d = width / 2.0;\n\t\t\tfloat w22d = width2 / 2.0;\n\t\t\tif ( type == 0 ) {\n\t\t\t\treturn vec2(-w2d, 0.0);\n\t\t\t}\n\t\t}\n\t\t*/\n\t\t\n\t\tfloat textureLoad_float(sampler2D tex, int index) {\n\t\t\tivec2 size = textureSize(tex, 0);\n\t\t\t\n\t\t\tint rindex = index / 4;\n\t\t\tint rofs = int(mod(float(index), 4.0));\n\t\t\t\n\t\t\tivec2 pos;\n\t\t\tpos.x = int(mod(float(rindex), float(size.x)));\n\t\t\tpos.y = rindex / size.x;\n\t\t\t\n\t\t\tvec4 res = texelFetch(uTexture, pos, 0);\n\t\t\t\n\t\t\treturn res[rofs];\n\t\t}\n\t\tvec2 textureLoad_vec2(sampler2D tex, int index) {\n\t\t\treturn vec2( textureLoad_float(tex, index+0), textureLoad_float(tex, index+1) );\n\t\t}\n\t\t\n\t\tcandestick_t laodCandestick(sampler2D tex, int offset) {\n\t\t\tcandestick_t cs;\n\t\t\t\n\t\t\tcs.open = textureLoad_vec2(tex, offset + 0);\n\t\t\tcs.close = textureLoad_vec2(tex, offset + 2);\n\t\t\tcs.min = textureLoad_vec2(tex, offset + 4);\n\t\t\tcs.max = textureLoad_vec2(tex, offset + 6);\n\t\t\tcs.time = textureLoad_vec2(tex, offset + 8);\n\t\t\t\n\t\t\treturn cs;\n\t\t}\n\t\t\n\t\tvoid candestick() {\n\t\t\tvec4 pos_v4;\n\t\t\t\n\t\t\tcandestick_t cs = laodCandestick(uTexture, int(aIndex));\n\t\n\t\t\tfloat cs2d = uCandlestickWidth / 2.0;\n\t\t\tfloat cw2d = uCandlewickWidth / 2.0;\n\t\t\t\n\t\t\t\n\t\t\tif ( aType == 0.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cs2d, cs.open);} else if ( aType == 1.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cs2d, cs.open);} else if ( aType == 2.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cs2d, cs.close);} else if ( aType == 3.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cs2d, cs.close);} else if ( aType == 4.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cw2d, cs.min);} else if ( aType == 5.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cw2d, cs.min);} else if ( aType == 6.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cw2d, cs.max);} else if ( aType == 7.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cw2d, cs.max);}\n\n\t\t\tpos_v4 = softDouble_vec4_add(pos_v4, uPos);\n\t\t\tpos_v4 = softDouble_vec4_mul(pos_v4, uMul);\n\t\t\t\t\n\t\t\tif ( softDouble_join(softDouble_sub(cs.open, cs.close)) > 0.0 ) {\n\t\t\t\tvColor = vec4(1.0, 0.0, 0.0, 1.0);\n\t\t\t} else {\n\t\t\t\tvColor = vec4(0.0, 1.0, 0.0, 1.0);\n\t\t\t}\n\t\t}\n\t\t\n\t\tvoid main() {\n\t\t\tcandestick_t cs = laodCandestick(uTexture, int(aIndex));\n\t\n\t\n\t\t\n\t\n\t\t\tfloat cs2d = uCandlestickWidth / 2.0;\n\t\t\tfloat cw2d = uCandlewickWidth / 2.0;\n\t\t\t\n\t\t\tvec4 pos_v4;\n\t\t\t\n\t\t\tif ( aType == 0.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cs2d, cs.open);} else if ( aType == 1.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cs2d, cs.open);} else if ( aType == 2.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cs2d, cs.close);} else if ( aType == 3.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cs2d, cs.close);} else if ( aType == 4.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cw2d, cs.min);} else if ( aType == 5.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cw2d, cs.min);} else if ( aType == 6.0 ) {\n\t\t\tpos_v4 = vec4(cs.time - cw2d, cs.max);} else if ( aType == 7.0 ) {\n\t\t\tpos_v4 = vec4(cs.time + cw2d, cs.max);}\n\n\t\t\tpos_v4 = softDouble_vec4_add(pos_v4, uPos);\n\t\t\tpos_v4 = softDouble_vec4_mul(pos_v4, uMul);\n\t\t\n\t\t\tvec2 pos = softDouble_vec4_join(pos_v4);\n\n\t\t\tif ( softDouble_join(softDouble_sub(cs.open, cs.close)) > 0.0 ) {\n\t\t\t\tvColor = vec4(1.0, 0.0, 0.0, 1.0);\n\t\t\t} else {\n\t\t\t\tvColor = vec4(0.0, 1.0, 0.0, 1.0);\n\t\t\t}\n\t\t\t\n\t\t\t\t\t\n            gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }\n\n\t\t\n\t\t\n","#version 300 es\n        precision highp float;\n        precision highp int;\n        precision highp usampler2D;\n\t\t\n\t\tin vec4 vColor;\n        out vec4 outColor;\n\n        void main() {\n\t\t\toutColor = vColor;\n        }\n"),this.programLine=A.createProgram(t,L,S)}}]),t}(),N=n("Xxa5"),j=n.n(N),G=n("exGp"),V=n.n(G),H=this,$=n("vzCy"),q={bitmex:{XBTUSD:{color:[1,0,0,1],prio:0}},bitfinex:{BTCUSD:{color:[0,1,1,1],prio:10}},binance:{BTCUSDT:{color:[1,1,0,1],prio:15}},huobi:{BTCUSDT:{color:[225/255,56/255,232/255,1],prio:20}},gdax:{"BTC-USD":{color:[114/255,21/255,225/255,1],prio:30}},bitstamp:{BTCUSD:{color:[0,.5,.5,1],prio:40}},okex:{BTC_USDT:{color:[0,0,.5,1],prio:50}},hitbtc:{BTCUSD:{color:[1,1,1,1]}}},K=function(){function t(e){P()(this,t),this.options=p()({},e),this.exchanges=this.options.exchanges,this.worker=null,this.events=new $}return E()(t,[{key:"loadWorker",value:function(){var t=V()(j.a.mark(function t(e){var n,a=this;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=this.worker=new Worker(URL.createObjectURL(e))).addEventListener("message",function(t){var e=d()(t.data,3),n=e[0],i=e[1],s=e[2];a.events.emit(n,i,s)}),n.postMessage({method:"init",data:{exchanges:this._getExchangesForWorker()}});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_loadWorkerTest",value:function(){var t=V()(j.a.mark(function t(){var e;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./bundle-worker.js");case 2:return t.next=4,t.sent.blob();case 4:return e=t.sent,t.abrupt("return",this.loadWorker(e));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"_getExchangesForWorker",value:function(){var t={},e=!0,n=!1,a=void 0;try{for(var i,s=h()(c()(q));!(e=(i=s.next()).done);e=!0){var r=i.value,o=t[r]={trade:[]},l=q[r],u=!0,v=!1,f=void 0;try{for(var d,_=h()(c()(l));!(u=(d=_.next()).done);u=!0){var p=d.value;o.trade.push(p)}}catch(t){v=!0,f=t}finally{try{!u&&_.return&&_.return()}finally{if(v)throw f}}}}catch(t){n=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}return t}},{key:"getEsidList",value:function(t){var e=[],n=this.exchanges[t];if(n)for(var a in n){var i=t+":"+a;e.push(i)}return e}}]),t}();if(!window.__ctlCtx){var J=window.__ctlCtx=new K({exchanges:q});V()(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J._loadWorkerTest();case 2:case"end":return t.stop()}},t,H)}))()}var Q=window.__ctlCtx;var Z={data:function(){return{}},props:[],created:function(){},mounted:function(){var t,e=[],n=!0,a=!1,i=void 0;try{for(var s,r=h()(c()(Q.exchanges));!(n=(s=r.next()).done);n=!0){var o=s.value,l=Q.exchanges[o],u=!0,v=!1,f=void 0;try{for(var d,_=h()(c()(l));!(u=(d=_.next()).done);u=!0){var p=d.value;e.push([o+":"+p,(t=l[p].color,t),!0,l[p].prio])}}catch(t){v=!0,f=t}finally{try{!u&&_.return&&_.return()}finally{if(v)throw f}}}}catch(t){a=!0,i=t}finally{try{!n&&r.return&&r.return()}finally{if(a)throw i}}e.sort(function(t,e){return-t[3]+e[3]});var y=window.webglRender=new z({elChart:this.$refs.render,canvas:this.$refs.renderCanvas,exchangesRules:e});Q.events.on("trade-realtime:*:*",function(t,e){var n=t.exchange+":"+t.symbol,a=!0,i=!1,s=void 0;try{for(var r,o=h()(e);!(a=(r=o.next()).done);a=!0){var c=r.value;y.addTradeTick(n,c)}}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}}),Q.events.on("close:*",function(t,e){Q.getEsidList(t.exchange).forEach(function(t){return y.addTradeTick(t,[0,0,0,0])})}),Q.events.on("exchange.visibility",function(t,e){Q.getEsidList(t).forEach(function(t){return y.setVisibility(t,e)})})},watch:{},methods:{}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"render",staticClass:"app-chart"},[e("canvas",{ref:"renderCanvas",staticClass:"app-chart-canvas"}),this._v(" "),e("canvas",{staticClass:"app-chart-x-info-c"}),this._v(" "),e("canvas",{staticClass:"app-chart-y-info-c"}),this._v(" "),e("span",{staticStyle:{left:"20px",top:"20px",right:"auto"},attrs:{id:"show-fps"}})])},staticRenderFns:[]};var et=n("VU/8")(Z,tt,!1,function(t){n("x8E0")},"data-v-eb917bbc",null).exports,nt=function(){function t(e,n){P()(this,t),this.callback=e,this.fnRetTimeout=n,this.closed=!1,this._fnLoop()}return E()(t,[{key:"_fn",value:function(){this.closed||"function"==typeof this.callback&&(this.callback(),this._fnLoop())}},{key:"_fnLoop",value:function(){if("function"==typeof this.fnRetTimeout){var t=this.fnRetTimeout();setTimeout(this._fn.bind(this),t)}}},{key:"close",value:function(){this.closed=!0}}]),t}(),at={data:function(){return{dialog:!1,dialog3:!0}},created:function(){var t=this;new nt(function(){-1===location.hash.indexOf("no-donate")&&(t.dialog=!0)},function(){return 60*Math.random()*6e4|0})}},it={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card-text",[n("v-card-title",{attrs:{"primary-title":""}},[t._v("Donate(BTC). Please, send me. Thank you.")]),t._v(" "),n("v-alert",{staticClass:"font-weight-black font-italic",attrs:{value:!0,color:"success",icon:"new_releases"}},[t._v("1HVccMYzXkEj4CkgEziM3DHkqRuysPHKjb")]),t._v(" "),n("v-spacer"),t._v("\n\t\t\tAuthor: SaintJrOnline(chat bitmex)\n\t\t\t"),n("v-spacer")],1)],1)],1)},staticRenderFns:[]},st=n("VU/8")(at,it,!1,null,null,null).exports,rt=this,ot=n("vzCy"),ct={bitmex:{XBTUSD:{color:[1,0,0,1],prio:0}},bitfinex:{BTCUSD:{color:[0,1,1,1],prio:10}},binance:{BTCUSDT:{color:[1,1,0,1],prio:15}},huobi:{BTCUSDT:{color:[225/255,56/255,232/255,1],prio:20}},gdax:{"BTC-USD":{color:[114/255,21/255,225/255,1],prio:30}},bitstamp:{BTCUSD:{color:[0,.5,.5,1],prio:40}},okex:{BTC_USDT:{color:[0,0,.5,1],prio:50}},hitbtc:{BTCUSD:{color:[1,1,1,1]}}},lt=function(){function t(e){P()(this,t),this.options=p()({},e),this.exchanges=this.options.exchanges,this.worker=null,this.events=new ot}return E()(t,[{key:"loadWorker",value:function(){var t=V()(j.a.mark(function t(e){var n,a=this;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=this.worker=new Worker(URL.createObjectURL(e))).addEventListener("message",function(t){var e=d()(t.data,3),n=e[0],i=e[1],s=e[2];a.events.emit(n,i,s)}),n.postMessage({method:"init",data:{exchanges:this._getExchangesForWorker()}});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_loadWorkerTest",value:function(){var t=V()(j.a.mark(function t(){var e;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./bundle-worker.js");case 2:return t.next=4,t.sent.blob();case 4:return e=t.sent,t.abrupt("return",this.loadWorker(e));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"_getExchangesForWorker",value:function(){var t={},e=!0,n=!1,a=void 0;try{for(var i,s=h()(c()(ct));!(e=(i=s.next()).done);e=!0){var r=i.value,o=t[r]={trade:[]},l=ct[r],u=!0,v=!1,f=void 0;try{for(var d,_=h()(c()(l));!(u=(d=_.next()).done);u=!0){var p=d.value;o.trade.push(p)}}catch(t){v=!0,f=t}finally{try{!u&&_.return&&_.return()}finally{if(v)throw f}}}}catch(t){n=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}return t}},{key:"getEsidList",value:function(t){var e=[],n=this.exchanges[t];if(n)for(var a in n){var i=t+":"+a;e.push(i)}return e}}]),t}();if(!window.__ctlCtx){var ht=window.__ctlCtx=new lt({exchanges:ct});V()(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ht._loadWorkerTest();case 2:case"end":return t.stop()}},t,rt)}))()}var ut=window.__ctlCtx;var vt={name:"App",data:function(){var t=[],e=!0,n=!1,a=void 0;try{for(var i,s=h()(c()(ut.exchanges));!(e=(i=s.next()).done);e=!0){var r=i.value,o=ut.exchanges[r],l=!0,u=!1,v=void 0;try{for(var f,d=h()(c()(o));!(l=(f=d.next()).done);l=!0){var _=f.value;t.push([r,o[_].color,!0,o[_].prio]);break}}catch(t){u=!0,v=t}finally{try{!l&&d.return&&d.return()}finally{if(u)throw v}}}}catch(t){n=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}return t.sort(function(t,e){return t[3]-e[3]}),{loading:!1,tx:"O_OOO",pair:"BTC/USD",exchanges:t.map(function(t){return{state:"CLOSED",visibility:!0,exchange:t[0],color:(e=t[1],"rgb("+e.map(function(t){return 255&Math.min(255,256*t)}).slice(0,3).join(",")+")")};var e}),__:[{state:"OPENED",visibility:!1,exchange:"bitmex",color:"rgb(0,0,255)"},{state:"OPENED",visibility:!0,exchange:"huobi",color:"rgb(225,56,232)"},{state:"OPENED",visibility:!0,exchange:"gdax",color:"rgb(114,21,225)"},{state:"OPENED",visibility:!0,exchange:"bitstamp",color:"rgb(0,127,127)"},{state:"OPENED",visibility:!0,exchange:"okex",color:"rgb(0,0,127)"},{state:"OPENED",visibility:!0,exchange:"hitbtc",color:"rgb(255,255,255)"},{state:"OPENED",visibility:!0,exchange:"binance",color:"rgb(255,255,0)"},{state:"OPENED",visibility:!0,exchange:"bitfinex",color:"rgb(0,255,255)"}]}},created:function(){var t=this;ut.events.on("open:*",function(e){var n=t.exchanges.find(function(t){return t.exchange===e.exchange});n&&(n.state="OPENED")}),ut.events.on("close:*",function(e){var n=t.exchanges.find(function(t){return t.exchange===e.exchange});n&&(n.state="CLOSED")}),window._app=this},components:{"menu-esid":v,"webgl-render":et,"donate-modal":st},methods:{updateExchangeVisibility:function(t,e){ut.events.emit("exchange.visibility",t,e)}}},ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}}),this._v(" "),e("menu-esid",{attrs:{pair:this.pair,exchanges:this.exchanges},on:{updateExchangeVisibility:this.updateExchangeVisibility}}),this._v(" "),e("webgl-render"),this._v(" "),e("donate-modal")],1)},staticRenderFns:[]};var dt=n("VU/8")(vt,ft,!1,function(t){n("tpyG")},null,null).exports;a.a.use(i.a),n.e(0).then(n.bind(null,"7zck")),a.a.use(i.a),a.a.use(r.a),a.a.config.productionTip=!1,window._vue=new a.a({el:"#app",components:{App:dt},template:"<App/>"})},gtmO:function(t,e,n){t.exports=n("vzCy")},tpyG:function(t,e){},x8E0:function(t,e){},zQ1K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5af286c6e7fc6b8d928.js.map