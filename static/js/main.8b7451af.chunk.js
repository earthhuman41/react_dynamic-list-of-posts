(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),c=n.n(r),o=n(6),i=n.n(o),u=n(7),m=n(1),l=n(2),p=n(4),h=n(3),f=n(5),d=(n(17),function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),b=(n(18),n(19),n(20),n(21),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user,t=e.name,n=e.email;return s.a.createElement("div",{className:"user"},t&&s.a.createElement("p",{className:"user__name"},t),n&&s.a.createElement("p",{className:"user__email"},n))}}]),t}(s.a.Component)),v=(n(22),function(e){var t=e.comment;return s.a.createElement("div",{className:"comments__item"},s.a.createElement(b,{user:{name:t.name}}),s.a.createElement("p",{className:"comments__item__body"},t.body))}),j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={showComments:!1},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"showComments",value:function(){this.setState(function(e){return{showComments:!e.showComments}})}},{key:"render",value:function(){var e=this,t=this.props.comments;return s.a.createElement("div",null,s.a.createElement("button",{className:"show-comments-btn",onClick:function(){e.showComments(!0)}},this.state.showComments?"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),this.state.showComments&&s.a.createElement("div",{className:"comments"},t.map(function(e){return s.a.createElement(v,{comment:e})})))}}]),t}(s.a.Component),E=function(e){var t=e.post;return s.a.createElement("div",{className:"post__container"},console.log(t.postItem),s.a.createElement("article",{className:"post"},s.a.createElement("h2",{className:"post__title"},t.postItem.title),s.a.createElement("p",null,t.postItem.body),s.a.createElement(b,{user:t.postAuthor})),s.a.createElement(j,{comments:t.postComments}))},w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={searchValue:""},n.searchPost=function(e){var t=e.target.value.trim();n.setState({value:t})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"filter",value:function(e){return this.props.posts.filter(function(t){var n=e.replace(/ /g,"").toLowerCase();return t.postItem.title.replace(/ /g,"").toLowerCase().includes(n)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"posts-list"},s.a.createElement("label",{htmlFor:"search-post",className:"search-post"},s.a.createElement("input",{placeholder:"Search post",type:"search",id:"search-post",className:"search-post__input",onChange:function(t){e.searchPost(t)}})),s.a.createElement("div",{className:"posts"},this.filter(this.state.searchValue).map(function(e){return s.a.createElement(E,{post:e})})))}}]),t}(s.a.Component),O=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).load=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({btnText:"Loading"}),e.next=3,n.preparePosts();case 3:n.setState(function(e){return{isLoaded:!e.isLoaded}});case 4:case"end":return e.stop()}},e)})),n.state={posts:[],isLoaded:!1,btnText:"Load"},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"preparePosts",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,d("https://jsonplaceholder.typicode.com/posts");case 5:return n=e.sent,e.next=8,d("https://jsonplaceholder.typicode.com/comments");case 8:a=e.sent,s=n.map(function(e){return{postItem:e,postAuthor:t.find(function(t){return t.id===e.userId}),postComments:a.filter(function(t){return t.postId===e.id})}}),this.setState({posts:s});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("main",{className:"main"},!this.state.isLoaded&&s.a.createElement("button",{onClick:function(){return e.load()},className:"load-btn"},this.state.btnText),this.state.isLoaded&&s.a.createElement(w,{posts:this.state.posts}))}}]),t}(s.a.Component);c.a.render(s.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8b7451af.chunk.js.map