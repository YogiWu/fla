(this.webpackJsonpfla=this.webpackJsonpfla||[]).push([[0],{108:function(e,t,n){e.exports={headerLayout:"App_headerLayout__J4155",contentLayout:"App_contentLayout__1RnsV"}},139:function(e,t,n){e.exports=n(229)},202:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(8),i=n.n(o),l=(n(144),n(18)),s=n(19),u=n(22),d=n(20),m=n(23),p=n(83),C=n(37),h=n(40),S=n(234),f=n(56),g=n(84),v={content:{}},b=Object(f.b)({course:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COURSE":var n=t.payload.content;return Object(g.a)({},e,{content:n});default:return e}}}),E=Object(f.c)(b),_=n(85),L=n.n(_),B=n(237),y=n(10),j=B.a.SubMenu,k=B.a.Item,O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._menuList=[{title:"\u9996\u9875",href:"/",subList:[]},{title:"\u6838\u5fc3\u8bfe\u7a0b",href:"",subList:[{title:"CS301A \u7b97\u6cd5\u57fa\u7840\u5feb\u901f\u5165\u95e8(Java/Cpp)",href:"/course/CS301A",subList:[]},{title:"CS301B \u9898\u578b\u6280\u5de7\u4e0e\u7b97\u6cd5\u8bb2\u89e3(Java/Cpp)",href:"/course/CS301B",subList:[]},{title:"CS403A LeetCode1-300\u9ad8\u9891\u9898\u8be6\u89e3(Java/Cpp/Python)",href:"/course/CS403A",subList:[]},{title:"CS403B LeetCode301-600\u9ad8\u9891\u9898\u8be6\u89e3(Java/Cpp)",href:"/course/CS403B",subList:[]}]},{title:"\u4e13\u9898\u8bfe\u7a0b",href:"",subList:[{title:"CS202 \u4e8c\u5206\u641c\u7d22/\u5b57\u7b26\u4e32/\u94fe\u8868(Java/Cpp)",href:"/course/CS202",subList:[]},{title:"CS203 \u961f\u5217/\u4f18\u5148\u961f\u5217/\u6808/\u6811(Java/Cpp)",href:"/course/CS203",subList:[]},{title:"CS204 BFS/DFS/HashTable(Java/Cpp)",href:"/course/CS204",subList:[]},{title:"CS205 \u52a8\u6001\u89c4\u5212(Java)",href:"/course/CS205",subList:[]}]},{title:"\u7b80\u5386\u4fee\u6539",href:"",subList:[{title:"CS105 \u7b80\u5386\u4fee\u6539\u4e0e\u6307\u5bfc",href:"/course/CS105",subList:[]}]},{title:"\u76f4\u64ad\u8bfe",href:"",subList:[{title:"CS501 \u5237\u9898&\u7b97\u6cd5\u76f4\u64ad\u8bfe",href:"/course/CS501",subList:[]}]}],n._renderMenu=function(e){return e.map((function(e,t){return c.a.createElement(k,{key:t},c.a.createElement(C.b,{to:e.href},e.title))}))},n._renderNav=function(){return n._menuList.map((function(e,t){return 0===e.subList.length?c.a.createElement(k,{key:t},c.a.createElement(C.b,{to:e.href},e.title)):c.a.createElement(j,{key:t,title:c.a.createElement("span",{slot:"title",className:"submenu-title-wrapper"},e.title,c.a.createElement(y.a,{type:"down"}))},n._renderMenu(e.subList))}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:L.a.header},c.a.createElement(C.b,{to:"/"},c.a.createElement("img",{className:L.a.logo,src:"./logo.png",alt:"logo"})),c.a.createElement(B.a,{mode:"horizontal",className:L.a.nav,selectable:!1,subMenuCloseDelay:.05},this._renderNav()))}}]),t}(c.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"footer")}}]),t}(c.a.Component),N=(n(202),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"title-wrap"},c.a.createElement("h2",null,this.props.text),c.a.createElement("div",{className:"dash"}))}}]),t}(c.a.Component)),w=n(236),x=n(61),J=n(29),F=n(72),T=n.n(F),D=w.a.Meta,I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._blockList=[{title:"\u6838\u5fc3\u8bfe\u7a0b",courseList:[{img:"./home/CS301A.jpg",href:"/course/CS301A",title:"CS301A \u7b97\u6cd5\u57fa\u7840\u5feb\u901f\u5165\u95e8(Java/Cpp)",des:"CS301A\u662f\u4e3a\u5237\u9898\u91cf\u8f83\u5c11\u7684\u5c0f\u767d\uff0c\u6216\u8005\u521a\u521a\u51b3\u5b9a\u8f6c\u7801\uff0c\u4f46\u5bf9\u63a5\u4e0b\u6765\u8981\u8d70\u7684\u8def\u8fd8\u662f\u4e00\u7247\u8ff7\u832b\u7684\u540c\u5b66\u51c6\u5907\u7684\u3002\u5728CS301A\u4e2d\uff0c\u6211\u4eec\u4e0d\u8fc7\u5206\u5173\u6ce8\u9020\u8f6e\u5b50\u3001\u63a8\u516c\u5f0f\u7684\u8fc7\u7a0b\uff0c\u4e0d\u8fc7\u5206\u5173\u6ce8\u5197\u6742\u7684\u7406\u8bba\u5206\u6790\u548c\u6570\u5b66\u63a8\u5bfc\uff0c\u6211\u4eec\u53ea\u5173\u6ce8\u201c\u9762\u8bd5\u8003\u4ec0\u4e48\u201d\u548c\u201c\u9762\u8bd5\u5b98\u60f3\u770b\u5230\u4ec0\u4e48\u201d\u3002"},{img:"./home/CS301B.jpg",href:"/course/CS301B",title:"CS301B \u9898\u578b\u6280\u5de7\u4e0e\u7b97\u6cd5\u8bb2\u89e3(Java/Cpp)",des:"CS301B\u4e3a\u6709\u4e00\u5b9a\u5237\u9898\u57fa\u7840\u7684\u4eba\u91cf\u8eab\u5b9a\u5236\uff0c\u5b83\u56ca\u62ec\u4e86\u9762\u8bd5\u6700\u9ad8\u9891\u7684\u9898\u578b\u4e0e\u7406\u8bba\uff0c\u4e5f\u6311\u9009\u4e86LeetCode\u91cc\u9762\u7684\u4e00\u4e9b\u7ecf\u5178\u9898\u578b\u3002\u5b83\u65e8\u5728\u7528\u6700\u4f4e\u7684\u65f6\u95f4\u6210\u672c\uff0c\u53bb\u6700\u5927\u5316\u5438\u6536\u6bcf\u4e00\u4e2a\u9762\u8bd5\u5fc5\u5907\u7684\u77e5\u8bc6\u70b9\uff0c\u53bb\u4ece\u6e90\u5934\u4e0a\u544a\u522b\u76f2\u76ee\u80cc\u9898\u7684\u884c\u4e3a"},{img:"./home/CS403A.jpg",href:"/course/CS403A",title:"CS403A LeetCode1-300\u9ad8\u9891\u9898\u8be6\u89e3(Java/Cpp/Python)",des:"\u5c3d\u7ba1LeetCode\u9898\u89e3\u5df2\u7ecf\u968f\u5904\u53ef\u89c1\uff0c\u4f46\u4f60\u662f\u5426\u60f3\u8fc7\uff0c\u968f\u624b\u641c\u6765\u7684\u89e3\u7b54\u662f\u5426\u4e00\u5b9a\u6b63\u786e\uff0c\u662f\u5426\u4e00\u5b9a\u590d\u6742\u5ea6\u6700\u4f4e\uff0c\u4f60\u53c8\u662f\u5426\u80fd\u5728\u7b2c\u4e00\u65f6\u95f4\u7406\u89e3\u5e76\u5f7b\u5e95\u638c\u63e1\u5462\uff1fCS403A\u5b58\u5728\u7684\u610f\u4e49\uff0c\u5c31\u662f\u5e2e\u4f60\u4ece\u6d69\u5982\u70df\u6d77\u3001\u826f\u83a0\u4e0d\u9f50\u7684\u4fe1\u606f\u91cc\u89e3\u8131\uff0c\u76f4\u63a5\u7ed9\u4f60\u6700\u4f18\u7684\u89e3\u6cd5\u3001\u6700\u6e05\u6670\u7684\u601d\u8def\u548c\u6700\u4e00\u9488\u89c1\u8840\u7684\u5206\u6790\u3002"},{img:"./home/CS403B.jpg",href:"/course/CS403B",title:"CS403B LeetCode301-600\u9ad8\u9891\u9898\u8be6\u89e3(Java/Cpp)",des:"\u76f8\u5bf9\u4e8eCS403A\u800c\u8a00\uff0cCS403B\u8bfe\u7a0b\u7684\u9898\u76ee\u96be\u5ea6\u6709\u6240\u63d0\u5347\uff0c\u6bcf\u9053\u9898\u8bb2\u89e3\u65f6\u95f4\u4e5f\u6709\u6240\u589e\u52a0\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5bf9LeetCode\u5927\u90e8\u5206\u9898\u578b\u90fd\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u90a3\u4e48\u9664\u4e86CS301\u7cfb\u5217\u7b97\u6cd5\u8bfe\u7a0b\u4ee5\u5916\uff0c\u8fd9\u95e8\u8bfe\u7a0b\u540c\u6837\u80fd\u8ba9\u4f60\u5728\u5237\u9898\u627e\u5de5\u8def\u4e0a\u201c\u767e\u5c3a\u7aff\u5934\uff0c\u66f4\u8fdb\u4e00\u6b65\u201d\u3002"}]},{title:"\u4e13\u9898\u8bfe\u7a0b",courseList:[{img:"./home/CS202.jpg",href:"/course/CS202",title:"CS202 \u4e8c\u5206\u641c\u7d22/\u5b57\u7b26\u4e32/\u94fe\u8868(Java/Cpp)",des:"CS202\u4e13\u9898\u5c06\u8bb2\u89e3\u4e8c\u5206\u641c\u7d22\u5728\u9762\u8bd5\u4e2d\u7684\u57fa\u672c\u8003\u70b9\u3001\u5b57\u7b26\u4e32\u516d\u5927\u7c7b\u95ee\u9898\u603b\u7ed3\u4ee5\u53ca\u53cc\u6307\u9488\u7684\u6027\u8d28\u3001\u94fe\u8868\u7684\u516d\u5927\u57fa\u672c\u64cd\u4f5c\u3002"},{img:"./home/CS203.jpg",href:"/course/CS203",title:"CS203 \u961f\u5217/\u4f18\u5148\u961f\u5217/\u6808/\u6811(Java/Cpp)",des:"CS203\u4e13\u9898\u5c06\u8bb2\u89e3\u961f\u5217\u4e0eDesign\u7c7b\u95ee\u9898\u7684\u7ed3\u5408\u548c\u961f\u5217\u5b9e\u73b0\u95ee\u9898\u3001\u6700\u5e38\u8003\u7684Top k\u95ee\u9898\u4ee5\u53ca\u5806\u7684\u6240\u6709\u57fa\u672c\u6027\u8d28\u3001\u5f52\u7eb3\u6811\u7684\u516d\u5927\u7c7b\u95ee\u9898\u53ca\u5176\u505a\u9898\u6280\u5de7"},{img:"./home/CS204.jpg",href:"/course/CS204",title:"CS204 BFS/DFS/HashTable(Java/Cpp)",des:"CS204\u4e13\u9898\u5c06\u5f52\u7eb3BFS\u4e24\u5927\u7c7b\u9762\u8bd5\u5e38\u8003\u95ee\u9898\u4ee5\u53caBFS\u7684\u8fdb\u9636\u95ee\u9898\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5\u7684\u8bb2\u89e3\u3001\u5f52\u7eb3DFS\u56db\u5927\u7c7b\u9762\u8bd5\u5e38\u8003\u95ee\u9898\u53ca\u5176\u505a\u9898\u6280\u5de7\u3001\u54c8\u5e0c\u8868\u7684\u8bbe\u8ba1\u539f\u7406\u548c\u51b2\u7a81\u89e3\u51b3\u65b9\u6848\u4ee5\u53ca\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0\u95ee\u9898"},{img:"./home/CS205.jpg",href:"/course/CS205",title:"CS205 \u52a8\u6001\u89c4\u5212(Java)",des:"CS205\u4e13\u9898\u5c06\u8bb2\u89e3\u52a8\u6001\u89c4\u5212\u5404\u7c7b\u578b\u9898\u76ee\uff0c\u5e76\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u9898\u76ee\u8fdb\u884c\u6709\u9488\u5bf9\u6027\u7684\u65b9\u6cd5\u603b\u7ed3\u3002"}]},{title:"\u7b80\u5386\u4fee\u6539",courseList:[{img:"./home/CS105.jpg",href:"/course/CS105",title:"CS105 \u7b80\u5386\u4fee\u6539\u4e0e\u6307\u5bfc",des:"\u7b80\u5386\u4fee\u6539\u4e0e\u6307\u5bfc"}]},{title:"\u76f4\u64ad\u8bfe",courseList:[{img:"./home/CS501.jpg",href:"/course/CS501",title:"CS501 \u5237\u9898&\u7b97\u6cd5\u76f4\u64ad\u8bfe",des:"\u5237\u9898&\u7b97\u6cd5\u76f4\u64ad\u8bfe"}]}],n._renderBlock=function(){return n._blockList.map((function(e,t){return c.a.createElement("div",{className:T.a.blockWrap,key:t},c.a.createElement(N,{text:e.title}),n._renderCard(e.courseList))}))},n._render=void 0,n._renderCard=function(e){var t=1===e.length?8:4;return c.a.createElement(x.a,{gutter:64},e.map((function(e,n){return c.a.createElement(C.b,{to:e.href,key:n},c.a.createElement(J.a,{span:8,offset:n%2===0?t:0,style:{marginTop:64}},c.a.createElement(w.a,{hoverable:!0,cover:c.a.createElement("img",{alt:"course",src:e.img})},c.a.createElement(D,{title:e.title,description:e.des}))))})))},n._renderCode=function(){return c.a.createElement("div",{className:T.a.fixWrap},c.a.createElement(w.a,{hoverable:!0,cover:c.a.createElement("div",null,c.a.createElement("img",{src:"./home/fixTitle.png",alt:"title"}))},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"./home/code.png",alt:"code"})),c.a.createElement("div",{className:T.a.fixBody},"\u8bf7\u6dfb\u52a0\u5c0f\u52a9\u624b\u54a8\u8be2\u5e76\u8d2d\u4e70\u8bfe\u7a0b"))))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:T.a.home},this._renderBlock(),this._renderCode())}}]),t}(c.a.Component),W={CS301A:{base:{background:"/course/course-title.jpg",title:"\u7b97\u6cd5\u57fa\u7840\u5feb\u901f\u5165\u95e8(Java/Cpp)",subTitle:"CS301A"},introduction:{title:"\u8bfe\u7a0b\u4ecb\u7ecd",content:["\u5982\u679c\u4f60\u662f\u6beb\u65e0\u5199\u7801\u7ecf\u9a8c\u7684\u5c0f\u767d\uff0c\u6216\u8005\u521a\u521a\u51b3\u5b9a\u8f6c\u7801\uff0c\u4f46\u5bf9\u63a5\u4e0b\u6765\u8981\u8d70\u7684\u8def\u8fd8\u662f\u4e00\u7247\u8ff7\u832b\uff0c\u90a3\u4e48\u7b97\u6cd5\u57fa\u7840\u73ed\u662f\u4f60\u6700\u597d\u7684\u9009\u62e9\u3002\u4e5f\u8bb8\u5f88\u591a\u4eba\u4f1a\u9009\u62e9\u5b66\u6821\u7684\u7b97\u6cd5\u5165\u95e8\u8bfe\u4f5c\u4e3a\u81ea\u5df1\u8f6c\u7801\u7684\u7b2c\u4e00\u6b65\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u771f\u6b63\u79bboffer\u53c8\u8fd1\u4e86\u4e00\u6b65\u3002\u6211\u4eec\u5c0a\u91cd\u79d1\u73ed\u7684\u4e25\u8c28\u3001\u5168\u9762\uff0c\u4f46\u662f\u5728\u6709\u9650\u7684\u65f6\u95f4\u9762\u524d\uff0c\u6211\u4eec\u66f4\u8981\u529f\u5229\u4e00\u4e9b\u3002\u5bf9\u4e8e\u5b66\u6821\u7684\u7b97\u6cd5\u8bfe\u7a0b\uff0c\u4ee5\u5b66\u671f\u4e3a\u5355\u4f4d\u7684\u8fdb\u5ea6\u4f1a\u8ba9\u4f60\u9519\u8fc7\u79cb\u62db/\u6625\u62db\u7684\u9ec4\u91d1\u65f6\u671f\uff0c\u5bf9\u4e8e\u6211\u4eec\u7684\u7b97\u6cd5\u57fa\u7840\u73ed\uff0c\u53ea\u8981\u96c6\u4e2d\u7cbe\u529b\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u5230\u4e00\u4e2a\u6708\u7684\u65f6\u95f4\u5185\u5b8c\u6210\u5b83\u3002","\u6211\u4eec\u4e0d\u8fc7\u5206\u5173\u6ce8\u9020\u8f6e\u5b50\u3001\u63a8\u516c\u5f0f\u7684\u8fc7\u7a0b\uff0c\u4e0d\u8fc7\u5206\u5173\u6ce8\u5197\u6742\u7684\u7406\u8bba\u5206\u6790\u548c\u6570\u5b66\u63a8\u5bfc\uff0c\u6211\u4eec\u53ea\u5173\u6ce8\u201c\u9762\u8bd5\u8003\u4ec0\u4e48\u201d\u548c\u201c\u9762\u8bd5\u5b98\u60f3\u770b\u5230\u4ec0\u4e48\u201d\u3002\u5728\u4e00\u6bb5\u76f8\u5f53\u957f\u7684\u65f6\u95f4\u5185\uff0c\u6211\u4eec\u975e\u5e38\u5efa\u8bae\u8d70\u79d1\u73ed\u7684\u6559\u5b66\u6a21\u5f0f\uff0c\u4ece\u4e00\u7816\u4e00\u74e6\u5f00\u59cb\u8865\u8d77\uff0c\u4f46\u5982\u679c\u6446\u5728\u4f60\u9762\u524d\u662f\u8feb\u5728\u7709\u776b\u7684\u79cb\u62db/\u6625\u62db\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7b97\u6cd5\u57fa\u7840\u73ed\u6216\u8bb8\u662f\u4f60\u6700\u597d\u7684\u9009\u62e9\u3002","\u672c\u8bfe\u7a0b\u4e2d\u9664\u4e86\u5e26\u9886\u5927\u5bb6\u8d70\u5165\u7b97\u6cd5\u5916\uff0c\u8fd8\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u9488\u5bf9\u8be5\u7b97\u6cd5\u6240\u5bf9\u5e94\u7684\u7ecf\u5178\u9762\u8bd5\u9898\uff0c\u5f53\u4f60\u638c\u63e1\u4e86\u8fd9\u4e9b\u7ecf\u5178\u9898\u76ee\u65f6\uff0c\u4f60\u4f1a\u53d1\u73b0\u4f60\u5df2\u7ecf\u771f\u6b63\u7684\u8d70\u51fa\u4e86\u4ece0\u52301\u7684\u4e00\u5927\u6b65\u3002"]},suit:{title:"\u9002\u5408\u4eba\u7fa4",studentList:[{img:"./course/student-icon-1.svg",title:"\u96f6\u57fa\u7840\u9009\u624b/\u8f6c\u4e13\u4e1a\u9009\u624b"},{img:"./course/student-icon-2.svg",title:"\u60f3\u8f6c\u7801\u4f46\u4e0d\u77e5\u4ece\u54ea\u5f00\u59cb\u7684\u540c\u5b66"},{img:"./course/student-icon-3.svg",title:"\u5237\u4e86\u4e00\u904d\uff0c\u4f46\u662f\u91cd\u505a\u8fd8\u662f\u5fd8\u7684\u540c\u5b66"},{img:"./course/student-icon-4.svg",title:"\u51e0\u4e4e\u6ca1\u6709\u5199\u7801\u7ecf\u9a8c\u7684\u540c\u5b66"},{img:"./course/student-icon-5.svg",title:"\u9700\u8981\u7cfb\u7edf\u3001\u5168\u9762\u5b66\u4e60"},{img:"./course/student-icon-6.svg",title:"\u4ece\u6765\u6ca1\u6709\u5237\u8fc7\u9898\uff0c\u6216\u8005\u5237\u9898\u6570\u91cf\u4e0d\u591f\u591a\u7684\u540c\u5b66"},{img:"./course/student-icon-7.svg",title:"\u53ea\u76f2\u76ee\u5237\u9898\uff0c\u5ffd\u89c6\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784\u57fa\u7840\u7684\u540c\u5b66"}]},courseInfo:{title:"\u8bfe\u7a0b\u5927\u7eb2",courseList:[{title:"\u7b2c\u4e00\u7ae0",detail:{title:"Java\u57fa\u7840\u798f\u5229\u7ae0",content:"\u5bf9Java\u8bed\u8a00\u8fdb\u884c\u5165\u95e8\u4e86\u89e3\uff0c\u4e3a\u540e\u9762\u7ae0\u8282\u7684\u8bfe\u7a0b\u6253\u4e0b\u57fa\u7840"},contentList:["Java\u57fa\u7840\u5165\u95e8\u8bb2\u89e3"]},{title:"\u7b2c\u4e8c\u7ae0",detail:{title:"\u6570\u7ec4",content:"\u6df1\u5165\u4e86\u89e3\u4e00\u7ef4\u3001\u4e8c\u7ef4\u6570\u7ec4\u3001\u5f02\u5e38\u5904\u7406\u5e76\u5b66\u4e60\u5de5\u4e1a\u754c\u4ee5\u53ca\u9762\u8bd5\u4e2d\u5fc5\u5907\u7684\u7f16\u7a0b\u597d\u4e60\u60ef\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u4e24\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u6570\u7ec4","\u4e8c\u7ef4\u6570\u7ec4","\u4e8c\u7ef4\u6570\u7ec4\u7684\u904d\u5386","\u5f02\u5e38\u5904\u7406\u53ca\u5176\u610f\u4e49","\u5de5\u4e1a\u754c\u7f16\u7a0b\u4e2d\u7684\u597d\u4e60\u60ef\uff0c\u6bcf\u9053LeetCode\u90fd\u4f1a\u7528\u5230\u7684Check corner case","\u624b\u628a\u624b\u5199Code\u2014\u2014\u4e24\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898"]},{title:"\u7b2c\u4e09\u7ae0",detail:{title:"\u94fe\u8868",content:"\u638c\u63e1\u5982\u4f55\u5efa\u7acb\u94fe\u8868\u3001\u94fe\u8868\u7684\u4e94\u5927\u57fa\u672c\u64cd\u4f5c\u4ee5\u53ca\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u56db\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u94fe\u8868","\u5982\u4f55\u5efa\u7acb\u94fe\u8868","\u94fe\u8868\u4e2d\u4e24\u4ef6\u7279\u522b\u91cd\u8981\u7684\u4e8b\u60c5","\u94fe\u8868\u7684\u4e94\u5927\u64cd\u4f5c","\u94fe\u8868\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6","\u94fe\u8868\u7684\u795e\u5947\u8282\u70b9\uff1adummy","\u624b\u628a\u624b\u5199code\u2014\u2014\u56db\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u6570\u7ec4\u4e0e\u94fe\u8868\u7684\u5bf9\u6bd4"]},{title:"\u7b2c\u56db\u7ae0",detail:{title:"\u961f\u5217",content:"\u5b66\u4e60\u4e24\u7ec4\u961f\u5217\u7684\u57fa\u672c\u64cd\u4f5cAPI\u548c\u53cc\u5411\u961f\u5217\u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u56db\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u961f\u5217Queue","\u624b\u628a\u624b\u5199code - \u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u961f\u5217\u7684\u57fa\u672c\u64cd\u4f5cAPI","\u6613\u88ab\u5ffd\u7565\u7684\u53e6\u4e00\u7ec4API","Using array to implement queue \u7528\u6570\u7ec4\u5b9e\u73b0\u4e00\u4e2a\u961f\u5217","\u624b\u628a\u624b\u5199code - \u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","Deque\u53cc\u5411\u961f\u5217","Deque\u7684\u57fa\u672c\u64cd\u4f5c","\u624b\u628a\u624b\u5199code \u2014\u2014\u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898"]},{title:"\u7b2c\u4e94\u7ae0",detail:{title:"\u6808",content:"\u4e86\u89e3\u4ec0\u4e48\u662f\u6808\u4ee5\u53ca\u6808\u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u4e94\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u6808\uff1f","\u6808\u7684\u57fa\u672c\u64cd\u4f5c","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e94\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898"]},{title:"\u7b2c\u516d\u7ae0",detail:{title:"\u6811",content:"\u6df1\u5165\u5b66\u4e60\u4e8c\u53c9\u6811\u7684\u524d\u3001\u4e2d\u3001\u540e\u3001\u5c42\u5e8f\u904d\u5386\u4ee5\u53caBST\u7684\u7ecf\u5178\u5185\u5bb9\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u5341\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u6811Tree\uff1f","\u4ec0\u4e48\u662f\u4e8c\u53c9\u6811(Binary Tree)","\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386(preorder)","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386\uff08Inorder\uff09","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386\uff08Postorder\uff09","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e00\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386\uff08Level order\uff09","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e24\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898","\u4e8c\u5206\u641c\u7d22\u6811","\u624b\u628a\u624b\u5199code\u2014\u2014\u56db\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898"]},{title:"\u7b2c\u4e03\u7ae0",detail:{title:"\u9012\u5f52",content:"\u8bb2\u89e3\u9012\u5f52\u4e0e\u6570\u5b66\u7684\u7ed3\u5408\u3001\u9012\u5f52\u4e0e\u6570\u7ec4\u7684\u7ed3\u5408\u3001\u9012\u5f52\u548c\u94fe\u8868\u7684\u7ed3\u5408\u4ee5\u53ca\u9012\u5f52\u548c\u6811\u7684\u7ed3\u5408\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u4e94\u9053\u7ecf\u5178\u5e38\u8003\u4f8b\u9898"},contentList:["\u4ec0\u4e48\u662f\u9012\u5f52","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e94\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898"]},{title:"\u7b2c\u516b\u7ae0",detail:{title:"\u7ecf\u5178\u6392\u5e8f\u7b97\u6cd5",content:"\u9009\u62e9\u6392\u5e8f\u3001\u63d2\u5165\u6392\u5e8f\u3001\u5f52\u5e76\u6392\u5e8f\u3001\u5feb\u901f\u6392\u5e8f"},contentList:["\u56db\u5927\u7ecf\u5178\u6392\u5e8f\u7b97\u6cd5\u5927\u603b\u7ed3"]}]},price:{title:"\u4ef7\u683c",price:"$99",des:["\u6709\u6548\u671f\u4e09\u4e2a\u6708","\u8bfe\u7a0b\u4e3a\u5f55\u64ad\uff0c\u53ef\u591a\u6b21\u91cd\u590d\u89c2\u770b","\u8bf7\u6dfb\u52a0\u5c0f\u52a9\u624b\u8d2d\u4e70"]},courseScreen:{title:"\u8bfe\u7a0b\u622a\u56fe",imgList:["./CS301A/1.png","./CS301A/2.png","./CS301A/3.png","./CS301A/4.png","./CS301A/5.png","./CS301A/6.png","./CS301A/7.png"]}},CS301B:{base:{background:"/course/course-title.jpg",title:"\u9898\u578b\u6280\u5de7\u4e0e\u7b97\u6cd5\u8bb2\u89e3(Java/Cpp)",subTitle:"CS301B"},introduction:{title:"\u8bfe\u7a0b\u4ecb\u7ecd",content:["\u5982\u679c\u8bf4\u5237\u9898\u662f\u4e00\u4e2a\u4f4e\u5934\u8d76\u8def\u7684\u8fc7\u7a0b\uff0c\u90a3\u4e48\u7b97\u6cd5\u5c31\u662f\u4e00\u4e2a\u62ac\u5934\u770b\u8def\u7684\u8fc7\u7a0b\u3002\u5982\u679c\u4f60\u660e\u660e\u5237\u4e86\u5f88\u591a\u9898\uff0c\u4f46\u662f\u8fd8\u662f\u6ca1\u6709\u529e\u6cd5\u5728\u9047\u5230\u65b0\u9898\u7684\u65f6\u5019\uff0c\u5feb\u901f\u72ec\u7acb\u7684\u5b8c\u6210\uff1b\u53c8\u6216\u8005\uff0c\u660e\u660e\u5df2\u7ecf\u5728\u9762\u8bd5\u91cc\u5199\u51fa\u4e86\u89e3\u6cd5\uff0c\u4f46\u662f\u5374\u6302\u5728\u4e86follow up\u4e0a\uff1b\u628a\u90a3\u4e48\u4f60\u5e94\u8be5\u6682\u65f6\u505c\u6b62\u5237\u9898\u7684\u6b65\u4f10\uff0c\u6216\u8005\u8bf4\uff0c\u6682\u65f6\u505c\u6b62\u201c\u80cc\u9898\u201d\u7684\u884c\u4e3a\uff0c\u8981\u82b1\u66f4\u591a\u7684\u65f6\u95f4\u53bb\u5c1d\u8bd5\u68b3\u7406\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784\uff0c\u5c1d\u8bd5\u627e\u5230\u81ea\u5df1\u7684\u95ee\u9898\uff0c\u505a\u5230\u4e3e\u4e00\u53cd\u4e09\u3002","\u800cCS301B\u5b58\u5728\u7684\u610f\u4e49\uff0c\u5c31\u662f\u7ed9\u5904\u5728\u8fd9\u79cd\u72b6\u6001\u7684\u4f60\u63d0\u4f9b\u4e00\u4e2a\u6377\u5f84\u548c\u6865\u6881\u3002\u5b83\u4e3a\u6709\u4e00\u5b9a\u5237\u9898\u57fa\u7840\u7684\u4eba\u91cf\u8eab\u5b9a\u5236\uff0c\u5b83\u56ca\u62ec\u4e86\u9762\u8bd5\u6700\u9ad8\u9891\u7684\u9898\u578b\u3001\u7406\u8bba\uff0c\u4e5f\u6311\u9009\u4e86LeetCode\u91cc\u9762\u7684\u4e00\u4e9b\u7ecf\u5178\u9898\u578b\uff0c\u5b83\u65e8\u5728\u5360\u7528\u6700\u4f4e\u7684\u65f6\u95f4\u6210\u672c\uff0c\u53bb\u6df1\u5165\u6bcf\u4e00\u4e2a\u9762\u8bd5\u5fc5\u5907\u7684\u7ec6\u8282\u3002","CS301B\u5bf9\u7b97\u6cd5\u7684\u603b\u7ed3\u66f4\u52a0\u900f\u5f7b\u548c\u7ec6\u81f4\uff0c\u5e76\u901a\u8fc7\u8fd150\u9053\u9762\u8bd5\u4e2d\u5e38\u8003\u9898\uff08\u591a\u6570\u9898\u76ee\u4e0eCS403\u4e0d\u51b2\u7a81\uff0c\u90e8\u5206\u9898\u76ee\u6765\u81ea300\u9898\u4ee5\u540e\u7684\u7ecf\u5178\u9898\u76ee\uff09\uff0c\u6240\u4ee5\u9898\u76ee\u5747\u4e8e\u6240\u8bb2\u7b97\u6cd5\u76f8\u547c\u5e94\u3002CS301B\u65e8\u5728\u8ba9\u5927\u5bb6\u5b66\u4ee5\u81f4\u7528\uff0c\u57f9\u517b\u7b97\u6cd5\u548c\u9898\u76ee\u76f8\u7ed3\u5408\u7684\u80fd\u529b\uff0c\u800c\u4e0d\u662f\u5355\u7eaf\u80cc\u7b97\u6cd5\u80cc\u9898\u76ee\u3002","\u5b66\u5b8c\u672c\u8bfe\u7a0b\u4f60\u53ef\u4ee5\u544a\u522b\u76f2\u76ee\u80cc\u9898\u7684\u884c\u4e3a\uff0c\u738b\u724c\u8bb2\u5e08\u4e3a\u5927\u5bb6\u5e26\u6765\u7b97\u6cd5\u6700\u4e3a\u7ec6\u81f4\u7684\u603b\u7ed3\u3002\u5e76\u5bf9\u6bcf\u4e00\u7c7b\u9898\u8fdb\u884c\u6df1\u523b\u7684\u5256\u6790\uff0c\u4f60\u4f1a\u6162\u6162\u53d1\u73b0\uff0c\u5f88\u591a\u9898\u76ee\u5b9e\u9645\u4e0a\u90fd\u662f\u51fa\u81ea\u4e8e\u8be5\u9898\u76ee\u7684\u5c0f\u5c0f\u53d8\u79cd\u3002\u540c\u65f6\u5728\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u4f60\u62ff\u5230\u4e00\u4e2a\u9898\u65f6\uff0c\u5c3d\u7ba1\u4f60\u6ca1\u6709\u63a5\u89e6\u8fc7\uff0c\u4f46\u662f\u6839\u636e\u6211\u4eec\u603b\u7ed3\u7684\u7ecf\u9a8c\u548c\u65b9\u6cd5\uff0c\u4f60\u540c\u6837\u53ef\u4ee5\u5f88\u5feb\u7684\u8f93\u5165\u5e76\u8bb2\u7ed9\u9762\u8bd5\u5b98\u542c\u3002"]},suit:{title:"\u9002\u5408\u4eba\u7fa4",studentList:[{img:"./course/student-icon-1.svg",title:"\u4fee\u8fc7CS301A\u7684\u540c\u5b66"},{img:"./course/student-icon-2.svg",title:"\u5237\u9898\u9047\u5230\u74f6\u9888\u7684\u540c\u5b66"},{img:"./course/student-icon-3.svg",title:"\u5237\u4e86\u4e00\u904d\uff0c\u4f46\u662f\u91cd\u505a\u8fd8\u662f\u5fd8\u7684\u540c\u5b66"},{img:"./course/student-icon-4.svg",title:"\u9762\u8bd5\u7684\u65f6\u5019\u660e\u660e\u628a\u9898\u76ee\u89e3\u51fa\u6765\u4e86\uff0c\u4f46\u662f\u5374\u5c61\u5c61\u6302\u6389\u9762\u8bd5\u7684\u540c\u5b66"},{img:"./course/student-icon-5.svg",title:"\u9762\u8bd5\u5c61\u5c61\u6302\u5728follow up\u7684\u540c\u5b66"},{img:"./course/student-icon-6.svg",title:"\u9189\u5fc3\u94bb\u7814\u96be\u9898\u3001\u504f\u9898\uff0c\u5374\u5ffd\u89c6\u4e86\u57fa\u672c\u529f\u7684\u540c\u5b66"},{img:"./course/student-icon-7.svg",title:"\u5e0c\u671b\u7cfb\u7edf\u590d\u4e60\u5e76\u653b\u514b\u7b97\u6cd5\u91cd\u96be\u70b9\u7684\u540c\u5b66"}]},courseInfo:{title:"\u8bfe\u7a0b\u5927\u7eb2",courseList:[{title:"\u7b2c\u4e00\u7ae0",detail:{title:"\u4e8c\u5206\u641c\u7d22",content:"\u6253\u901a\u4e8c\u5206\u641c\u7d22\u7684\u57fa\u672c\u8003\u70b9\uff0c\u6df1\u5165\u638c\u63e1\u9762\u8bd5\u4e2d\u6700\u5e38\u8003\u7684\u4e8c\u5206\u641c\u7d22while\u5faa\u73af\u6761\u4ef6\u53d8\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u5e76\u5c06\u4e8c\u5206\u641c\u7d22\u7684\u601d\u60f3\u4ece\u4e00\u7ef4\u6570\u7ec4\u8fc1\u79fb\u5230\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c\u624b\u628a\u624b\u5199\u516d\u9053\u7ecf\u5178\u8003\u9898\u3002"},contentList:["\u4ec0\u4e48\u662fBinary Search","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u4e8c\u7ef4\u6570\u7ec4\u7684\u5750\u6807\u548c\u4e00\u7ef4\u6570\u7ec4\u7684\u7d22\u5f15\u503c\u4e4b\u95f4\u7684\u8f6c\u6362","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u9760\u80cc\u9898\u6c38\u8fdc\u53d1\u73b0\u4e0d\u4e86\u7684Binary Search \u7684\u6761\u4ef6\u53d8\u5316","\u624b\u628a\u624b\u5199code\u2014\u2014\u4e09\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u4e8c\u7ae0",detail:{title:"\u5b57\u7b26\u4e32",content:"\u7cfb\u7edf\u603b\u7ed3\u5b57\u7b26\u4e32\u7684\u516d\u5927\u7c7b\u95ee\u9898\u4ee5\u53ca\u53cc\u6307\u9488\u76f8\u5411\u3001\u540c\u5411\u800c\u884c\u7684\u6027\u8d28\u3001\u539f\u7406\u548c\u5e94\u7528\u573a\u666f\u8fdb\u800c\u5347\u534e\u5230\u5de5\u4e1a\u754c\u4e2d\u5b57\u7b26\u4e32\u7684\u52a0\u5bc6\u4e0e\u89e3\u5bc6\u7684\u5e94\u7528\uff0c\u624b\u628a\u624b\u5199\u5341\u9053\u7ecf\u5178\u8003\u9898\u3002"},contentList:["\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u7c7b\u95ee\u9898\u603b\u7ed3","\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u7c7b\u95ee\u9898\u603b\u7ed3","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u53cc\u6307\u9488\u603b\u7ed3","\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e09\u7c7b\u95ee\u9898\u603b\u7ed3","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u5b57\u7b26\u4e32\u4e2d\u7b2c\u56db\u7c7b\u95ee\u9898\u603b\u7ed3"]},{title:"\u7b2c\u4e09\u7ae0",detail:{title:"\u94fe\u8868",content:"\u94fe\u8868\u516d\u5927\u57fa\u672c\u64cd\u4f5c\u603b\u7ed3\uff0c\u5e2e\u52a9\u6bcf\u4e00\u4f4d\u5b66\u751f\u719f\u7ec3\u638c\u63e1\u94fe\u8868\u7684\u6240\u6709\u8003\u70b9\uff0c\u624b\u628a\u624b\u5199\u516d\u9053\u7ecf\u5178\u8003\u9898"},contentList:["\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de71","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de72","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de73","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de74","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de75","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u94fe\u8868\u7684\u7ecf\u5178\u6280\u5de76","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u56db\u7ae0",detail:{title:"BFS",content:"\u5f52\u7eb3BFS\u4e24\u5927\u7c7b\u9762\u8bd5\u5e38\u8003\u95ee\u9898\u4ee5\u53caBFS\u7684\u8fdb\u9636\u95ee\u9898\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5\u7684\u8bb2\u89e3\u548c\u9762\u8bd5\u573a\u666f\u5e94\u7528\u3002\u624b\u628a\u624b\u5199\u4e94\u9053\u7ecf\u5178\u8003\u9898"},contentList:["BFS\u7b2c\u4e00\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e09\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","BFS\u7b2c\u4e8c\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e00\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u4e94\u7ae0",detail:{title:"DFS",content:"\u5f52\u7eb3DFS\u56db\u5927\u7c7b\u9762\u8bd5\u5e38\u8003\u95ee\u9898\u53ca\u5176\u505a\u9898\u6280\u5de7\uff0c\u771f\u6b63\u505a\u5230\u770b\u4e00\u9053\u9898\u89e3\u4e00\u7c7b\u9898\u3002"},contentList:["\u4ec0\u4e48\u662fDFS\uff1f","DFS\u7b2c\u4e00\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e09\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","DFS\u7b2c\u4e8c\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","DFS\u7b2c\u4e09\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","DFS\u7b2c\u56db\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u516d\u7ae0",detail:{title:"\u961f\u5217",content:"\u672c\u7ae0\u8282\u6df1\u5165\u8bb2\u89e3\u961f\u5217\u4e0eDesign\u7c7b\u95ee\u9898\u7684\u7ed3\u5408\u4ee5\u53ca\u961f\u5217\u5b9e\u73b0\u7684\u76f8\u5173\u95ee\u9898\uff0c\u624b\u628a\u624b\u5199\u516d\u9053\u9762\u8bd5\u5e38\u8003\u4f8b\u9898"},contentList:["\u961f\u5217\u4e0eDesign\u7c7b\u9898\u76ee\u7684\u7ed3\u5408\u95ee\u9898","\u53cc\u5411\u961f\u5217\u7684\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e94\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u4e03\u7ae0",detail:{title:"\u4f18\u5148\u961f\u5217\u548c\u6808",content:"\u672c\u7ae0\u8bb2\u89e3\u9762\u8bd5\u4e2d\u6700\u5e38\u8003\u7684Top k\u95ee\u9898\u4ee5\u53ca\u5806\u7684\u6240\u6709\u57fa\u672c\u6027\u8d28\u5e76\u624b\u628a\u624b\u8bb2\u89e3\u4e03\u9053\u9762\u8bd5\u5e38\u8003\u4f8b\u9898\u3002"},contentList:["\u795e\u79d8\u7684PriorityQueue","\u6700\u5e38\u8003\u7684Top k\u95ee\u9898\u603b\u7ed3","\u624b\u628a\u624b\u5199code- \u4e09\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u516b\u7ae0",detail:{title:"HashMap",content:"\u54c8\u5e0c\u8868\u7684\u8bbe\u8ba1\u539f\u7406\u548c\u51b2\u7a81\u89e3\u51b3\u65b9\u6848\u4ee5\u53ca\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0\u95ee\u9898\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u4e94\u9053\u9762\u8bd5\u5e38\u8003\u4f8b\u9898\u3002"},contentList:["\u624b\u628a\u624b\u5199code- \u56db\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]},{title:"\u7b2c\u4e5d\u7ae0",detail:{title:"\u6811",content:"\u5f52\u7eb3\u6811\u7684\u516d\u5927\u7c7b\u95ee\u9898\u53ca\u5176\u505a\u9898\u6280\u5de7\uff0c\u771f\u6b63\u505a\u5230\u770b\u4e00\u9053\u9898\u89e3\u4e00\u7c7b\u9898\uff0c\u624b\u628a\u624b\u8bb2\u89e3\u516b\u9053\u9762\u8bd5\u5e38\u8003\u4f8b\u9898\u3002"},contentList:["\u6811\u7684\u7b2c\u4e00\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u6811\u7684\u7b2c\u4e8c\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u6811\u7684\u7b2c\u4e09\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u6811\u7684\u7b2c\u56db\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898","\u6811\u7684\u7b2c\u4e94\u7c7b\u95ee\u9898","\u624b\u628a\u624b\u5199code- \u4e24\u9053\u9762\u8bd5\u4e2d\u7684\u7ecf\u5178\u4f8b\u9898"]}]},price:{title:"\u4ef7\u683c",price:"$99",des:["\u6709\u6548\u671f\u4e09\u4e2a\u6708","\u8bfe\u7a0b\u4e3a\u5f55\u64ad\uff0c\u53ef\u591a\u6b21\u91cd\u590d\u89c2\u770b","\u8bf7\u6dfb\u52a0\u5c0f\u52a9\u624b\u8d2d\u4e70"]},courseScreen:{title:"\u8bfe\u7a0b\u622a\u56fe",imgList:["./CS301B/1.png","./CS301B/2.png","./CS301B/3.png","./CS301B/4.png","./CS301B/5.png","./CS301B/6.png","./CS301B/7.png","./CS301B/8.png","./CS301B/9.png","./CS301B/10.png","./CS301B/11.png","./CS301B/12.png","./CS301B/13.png"]}}},P=n(235),M=n(232),H=(n(214),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(P.a,{grid:this.props.grid,dataSource:this.props.data,renderItem:function(e){return c.a.createElement(P.a.Item,null,c.a.createElement("div",{className:"itemWrap"},c.a.createElement("div",{className:"imgWrap"},c.a.createElement(M.a,{src:e.img,size:64})),c.a.createElement("p",null,e.title)))}})}}]),t}(c.a.Component)),q=n(238),U=n(239),Q=(n(215),q.a.Panel),R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.onChange=function(e){n.setState({show:0!==e.length})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.detail,a=e.contentList;return c.a.createElement("div",{className:"course"},c.a.createElement(q.a,{onChange:this.onChange},c.a.createElement(Q,{showArrow:!1,header:c.a.createElement("div",{className:"course-pannel"},c.a.createElement("div",{className:"course-pannel-title"},t),c.a.createElement("div",{className:"course-detail-wrap"},c.a.createElement("h3",{className:"course-detail-title"},n.title),c.a.createElement("div",{className:"course-detail-content"},n.content),c.a.createElement("div",{className:"course-icon-wrap"},c.a.createElement(y.a,{type:this.state.show?"up":"down"}))))},c.a.createElement(U.a,null,a.map((function(e,t){return c.a.createElement(U.a.Item,{key:t},e)}))))))}}]),t}(c.a.Component),z=n(49),G=n.n(z),V=n(233),$=w.a.Meta,K=Object(p.b)((function(e){return Object(g.a)({},e.course)}))(a=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._renderTitleBlock=function(e,t,n){return c.a.createElement("div",{className:G.a.titleBlock,style:{backgroundImage:"url(".concat("."+e,")")}},c.a.createElement("div",{className:G.a.titleWrap},c.a.createElement("h1",null,t),c.a.createElement("h2",null,n)))},n._renderTextContent=function(e){return c.a.createElement("div",{className:G.a.courseTextContent},e.map((function(e,t){return c.a.createElement("p",{key:t},e)})))},n._renderBlock=function(e,t){return c.a.createElement("div",{className:G.a.courseBlock},c.a.createElement(N,{text:e}),t)},n._renderIntrodution=function(e,t){return c.a.createElement("div",null,n._renderBlock(e,n._renderTextContent(t)))},n._renderSuit=function(e,t){return c.a.createElement("div",null,n._renderBlock(e,c.a.createElement(H,{data:t,grid:{gutter:16,column:4}})))},n._renderCourse=function(e,t){return c.a.createElement("div",null,n._renderBlock(e,t.map((function(e,t){return c.a.createElement(R,{title:e.title,detail:e.detail,contentList:e.contentList,key:t})}))))},n._renderPrice=function(e,t,a){return c.a.createElement("div",null,n._renderBlock(e,c.a.createElement(x.a,{gutter:16},c.a.createElement(J.a,{span:4,offset:10},c.a.createElement(w.a,{hoverable:!0,cover:c.a.createElement("div",{className:G.a.priceBlock},t)},c.a.createElement($,{description:a.map((function(e,t){return c.a.createElement("p",{key:t},e)}))}))))))},n._renderCourseScreen=function(e,t){return c.a.createElement("div",null,n._renderBlock(e,c.a.createElement(V.a,{autoplay:!0},t.map((function(e,t){return c.a.createElement("img",{alt:"\u8bfe\u7a0b\u622a\u56fe",src:e,key:t})})))))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.location.pathname!==this.props.location.pathname){var t=e.dispatch,n=e.match.params.id;t((a=n,console.log(a),console.log(W[a]),{type:"CHANGE_COURSE",payload:{content:{course:W[a]}}}))}var a}},{key:"render",value:function(){var e=this.props.content.course;if(!e)return c.a.createElement("div",null);var t=e.base,n=e.introduction,a=e.suit,r=e.courseInfo,o=e.price,i=e.courseScreen;return c.a.createElement("div",{className:G.a.course},this._renderTitleBlock(t.background,t.title,t.subTitle),this._renderIntrodution(n.title,n.content),this._renderSuit(a.title,a.studentList),this._renderCourse(r.title,r.courseList),this._renderPrice(o.title,o.price,o.des),this._renderCourseScreen(i.title,i.imgList))}}]),t}(c.a.Component))||a,Y=n(108),X=n.n(Y),Z=S.a.Header,ee=S.a.Content,te=S.a.Footer,ne=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:E},c.a.createElement(C.a,null,c.a.createElement(S.a,null,c.a.createElement(Z,{className:X.a.headerLayout},c.a.createElement(O,null)),c.a.createElement(ee,{className:X.a.contentLayout},c.a.createElement(h.a,{path:"/",exact:!0,component:I}),c.a.createElement(h.a,{path:"/course/:id",exact:!0,component:K})),c.a.createElement(te,null,c.a.createElement(A,null)))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(227),n(228);i.a.render(c.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){e.exports={course:"course_course__34wVD",titleBlock:"course_titleBlock__1fLGK",titleWrap:"course_titleWrap__2m4DC",titleLeft:"course_titleLeft__19Qvz",courseBlock:"course_courseBlock__OFD20",courseTextContent:"course_courseTextContent__3pvpq",priceBlock:"course_priceBlock__tOW6S"}},72:function(e,t,n){e.exports={blockWrap:"home_blockWrap__3OQLy","ant-row-flex":"home_ant-row-flex__2lOB_",fixWrap:"home_fixWrap__2nkbe",fixBody:"home_fixBody__3Aidy"}},85:function(e,t,n){e.exports={header:"header_header__1-BvO",logo:"header_logo__2AFUq",nav:"header_nav__2VUYr"}}},[[139,1,2]]]);
//# sourceMappingURL=main.bda2699d.chunk.js.map