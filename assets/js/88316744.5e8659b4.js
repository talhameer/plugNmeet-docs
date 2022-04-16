"use strict";(self.webpackChunkplugnmeet_documentation=self.webpackChunkplugnmeet_documentation||[]).push([[511],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=s(a),d=o,u=c["".concat(m,".").concat(d)]||c[d]||g[d]||l;return a?n.createElement(u,r(r({ref:e},p),{},{components:a})):n.createElement(u,r({ref:e},p))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7255:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=["components"],i={description:"plugNmeet user guide for Joomla platform",sidebar_position:6},m="Joomla Integration",s={unversionedId:"User Guide/Joomla Integration",id:"User Guide/Joomla Integration",title:"Joomla Integration",description:"plugNmeet user guide for Joomla platform",source:"@site/docs/User Guide/Joomla Integration.md",sourceDirName:"User Guide",slug:"/User Guide/Joomla Integration",permalink:"/docs/User Guide/Joomla Integration",editUrl:"https://github.com/mynaparrot/plugNmeet-docs/docs/User Guide/Joomla Integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"plugNmeet user guide for Joomla platform",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Moodle Integration",permalink:"/docs/User Guide/Moodle Integration"},next:{title:"Introduction",permalink:"/docs/developer-guide/intro"}},p={},g=[{value:"Installing plugNmeet for Joomla",id:"installing-plugnmeet-for-joomla",level:2},{value:"Plugin Configuration",id:"plugin-configuration",level:2},{value:"Update Client Version",id:"update-client-version",level:2},{value:"Design Customization",id:"design-customization",level:2},{value:"Global customization",id:"global-customization",level:3},{value:"Customization for a single meeting room",id:"customization-for-a-single-meeting-room",level:3},{value:"Create a plugNmeet room in Joomla",id:"create-a-plugnmeet-room-in-joomla",level:2},{value:"Access a plugNmeet room in Joomla",id:"access-a-plugnmeet-room-in-joomla",level:2}],c={toc:g};function d(t){var e=t.components,i=(0,o.Z)(t,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"joomla-integration"},"Joomla Integration"),(0,l.kt)("p",null,"With this tutorial, you will be able to know how to install and use ",(0,l.kt)("strong",{parentName:"p"},"plugNmeet")," in ",(0,l.kt)("strong",{parentName:"p"},"Joomla"),"."),(0,l.kt)("h2",{id:"installing-plugnmeet-for-joomla"},"Installing plugNmeet for Joomla"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First, you have to download the ",(0,l.kt)("strong",{parentName:"li"},"plugnmeet Zip file")," from this link:",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mynaparrot/plugNmeet-Joomla/releases"},"https://github.com/mynaparrot/plugNmeet-Joomla/releases"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-1.png",src:a(5494).Z,width:"1209",height:"583"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"After we have the file already downloaded, we go to the section of our ",(0,l.kt)("strong",{parentName:"li"},"Joomla")," where we can ",(0,l.kt)("strong",{parentName:"li"},"install Extensions")," (Extensions>Manage>Install).")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-2.png",src:a(6060).Z,width:"1436",height:"643"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'Click on "',(0,l.kt)("strong",{parentName:"li"},"or browse for file"),'" and select the downloaded file. It will then start charging.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-3.png",src:a(4459).Z,width:"1126",height:"542"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"We wait for it to load, and we will see a message saying that the installation has been completed.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-4.png",src:a(6172).Z,width:"1204",height:"597"})),(0,l.kt)("h2",{id:"plugin-configuration"},"Plugin Configuration"),(0,l.kt)("p",null,"After the plugin is successfully installed, you can go to the plugin configuration page by clicking System==>Global Configration==> plugNmeet "),(0,l.kt)("img",{src:"/img/Joomla/Joomla-plugin-config.png",width:"600",alt:"/img/Joomla/Joomla-plugin-config.png",loading:"lazy"}),(0,l.kt)("p",null,"Then click plugNmeet config "),(0,l.kt)("p",null,"It will automatically be filled with demo API information. If you have a self-hosting installation, then you can replace it with your own server API information here. "),(0,l.kt)("img",{src:"/img/Joomla/Joomla-plugnmeet-config.png",width:"600",alt:"/img/Joomla/Joomla-plugnmeet-config.png",loading:"lazy"}),(0,l.kt)("p",null,"Don\xb4t forget to click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"save")),"  after you made any changes. "),(0,l.kt)("p",null,"That is demo server information, it may have some limitations, please replace it with your own server ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"API"))," information later."),(0,l.kt)("h2",{id:"update-client-version"},"Update Client Version"),(0,l.kt)("p",null,"Notes: You need to update the client version by clicking this button. This is necessary for installing the plugin and for every time the plugin is updated to a new version. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"If you don't do this, you won't be able to use the service properly."))," "),(0,l.kt)("img",{src:"/img/Joomla/Joomla-client-update.png",width:"600",alt:"/img/Joomla/Joomla-client-update.png",loading:"lazy"}),(0,l.kt)("h2",{id:"design-customization"},"Design Customization"),(0,l.kt)("p",null,"In PlugNMeet it is possible to customize the color and logo of all rooms to fit with your branding. "),(0,l.kt)("p",null,"Here's how."),(0,l.kt)("h3",{id:"global-customization"},"Global customization"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the clobal customization page by clicking System==>Global Configration==> plugNmeet ==> Design Customization ")),(0,l.kt)("img",{src:"/img/Joomla/Joomla-globalcust.png",width:"600",alt:"/img/Joomla/Joomla-globalcust.png",loading:"lazy"}),(0,l.kt)("p",null,"Below, we will explain each option:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary Color"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the color of the icons of the tools when it is active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secondary Color"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the color of the icons of the tools when it is inactive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the wallpaper in case you do not use an image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Image"),(0,l.kt)("td",{parentName:"tr",align:null},"Image to be used as wallpaper. If used, it will replace the wallpaper color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Header bar color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Footer Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the bottom bar of the room.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Left Bar Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Background color when the list of participants is displayed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Right Bar Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Background color when chat is displayed.")))),(0,l.kt)("p",null,"To select the desired color, click the column and it will pop up the color picker:"),(0,l.kt)("img",{src:"/img/Joomla/Joomla-globalcolor.png",width:"600",alt:"/img/Joomla/Joomla-globalcolor.png",loading:"lazy"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Finally, you click on ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Save"))," so that all the changes are saved.")),(0,l.kt)("h3",{id:"customization-for-a-single-meeting-room"},"Customization for a single meeting room"),(0,l.kt)("p",null,"In PlugNMeet it is possible to customize the color and logo for a single room to fit your business needs. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the single room customization page by Componenets ==> plugNmeet ==> Manage Rooms")),(0,l.kt)("img",{src:"/img/Joomla/Joomla-mamageroom.png",width:"600",alt:"/img/Joomla/Joomla-mamageroom.png",loading:"lazy"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Choose the room you want to personalize.")),(0,l.kt)("img",{src:"/img/Joomla/Joomla-selectroom.png",width:"600",alt:"/img/Joomla/Joomla-selectroom.png",loading:"lazy"}),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'Click "Design Customization" and the list of options will appear to customize the room.')),(0,l.kt)("img",{src:"/img/Joomla/Joomla-roomdesigncust.png",width:"600",alt:"/img/Joomla/Joomla-roomdesigncust.png",loading:"lazy"}),(0,l.kt)("p",null,"Below, we will explain each option:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary Color"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the color of the icons of the tools when it is active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secondary Color"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the color of the icons of the tools when it is inactive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the wallpaper in case you do not use an image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Image"),(0,l.kt)("td",{parentName:"tr",align:null},"Image to be used as wallpaper. If used, it will replace the wallpaper color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Header bar color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Footer Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the bottom bar of the room.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Left Bar Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Background color when the list of participants is displayed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Right Bar Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Background color when chat is displayed.")))),(0,l.kt)("p",null,"To select the desired color, click the column and it will pop up the color picker:"),(0,l.kt)("p",null,"Image-room-color picker"),(0,l.kt)("img",{src:"/img/Joomla/Joomla-roomcolor.png",width:"600",alt:"/img/Joomla/Joomla-roomcolor.png",loading:"lazy"}),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Finally, you click on ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Save"))," so that all the changes are saved.")),(0,l.kt)("h2",{id:"create-a-plugnmeet-room-in-joomla"},"Create a plugNmeet room in Joomla"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'First, you need to create a category. To do this, you go to the "',(0,l.kt)("strong",{parentName:"li"},"Components"),'" section, select "',(0,l.kt)("strong",{parentName:"li"},"Plug N Meet"),'" and finally "',(0,l.kt)("strong",{parentName:"li"},"Manage Rooms"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-5.png",src:a(7754).Z,width:"1440",height:"636"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'We click on "',(0,l.kt)("strong",{parentName:"li"},"Room Categories"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-6.png",src:a(2683).Z,width:"1234",height:"338"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'We click on "',(0,l.kt)("strong",{parentName:"li"},"+New"),'"')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-7.png",src:a(5297).Z,width:"1214",height:"328"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"We write the title and description of the category.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-8.png",src:a(71).Z,width:"1195",height:"615"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},'We click on "',(0,l.kt)("strong",{parentName:"li"},"Save"),'" and a message will appear that has been created the category.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-9.png",src:a(1157).Z,width:"1197",height:"651"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},'We return to the PlugNMeet menu. To do this, you go to the "',(0,l.kt)("strong",{parentName:"li"},"Components"),'" section, select "',(0,l.kt)("strong",{parentName:"li"},"Plug N Meet"),'" and finally "',(0,l.kt)("strong",{parentName:"li"},"Manage Rooms"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-10.png",src:a(6680).Z,width:"1133",height:"574"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},'Press on the "',(0,l.kt)("strong",{parentName:"li"},"+New"),'" button')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-11.png",src:a(9457).Z,width:"1217",height:"262"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"We write the title and description of the conference that will be held in this room, as well as the category. The alias will be generated automatically.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-12.png",src:a(6464).Z,width:"1131",height:"517"})),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"We choose the password of the participant and moderator. By default, an auto-generated password will already come, but it is possible to change it.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-13.png",src:a(8017).Z,width:"1037",height:"250"})),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"We write the welcome message that will appear as the first message in the conference chat.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-14.png",src:a(520).Z,width:"908",height:"395"})),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},'We choose the maximum number of participants who can enter the room. In case you want it to be unlimited, you place "',(0,l.kt)("strong",{parentName:"li"},"0"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-15.png",src:a(5708).Z,width:"1066",height:"141"})),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},'We customize the "',(0,l.kt)("strong",{parentName:"li"},"room features"),'". Next, we will explain each point:')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow webcams"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Allows you to use a camera. / No: No camera can be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mute on start"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: All people are silenced when entering the room. / No: Everyone will be with their microphone on from the moment they enter the room.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow screen share"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Screen sharing is allowed. / No: Screen sharing is not allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow recording"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: The meeting can be recorded. / No: Unable to record.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow rtmp"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Live broadcasts are allowed. For example, on Youtube or Facebook. / No: Unable to perform transmissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow view other webcams"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: The webcams of all participants can be viewed. / No: It will only be possible to view the webcams between the participant and moderator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow view other users list"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: You can view the list of participating users. / No: You can't see who is on the list of participants.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admin only webcams"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Only the moderator has their webcam active. / No: No one can have their webcam active.")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-16.png",src:a(1239).Z,width:"1331",height:"718"})),(0,l.kt)("ol",{start:13},(0,l.kt)("li",{parentName:"ol"},'We customize the "',(0,l.kt)("strong",{parentName:"li"},"chat features"),'". Next, we will explain each point:')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow chat"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Allows you to use the chat. / No: Unable to use chat.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow file upload"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Files can be uploaded in the chat. / No: You can't upload files in the chat.")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-17.png",src:a(6954).Z,width:"1222",height:"240"})),(0,l.kt)("ol",{start:14},(0,l.kt)("li",{parentName:"ol"},'We customize the "',(0,l.kt)("strong",{parentName:"li"},"shared notepad features"),'" and "',(0,l.kt)("strong",{parentName:"li"},"whiteboard features"),'". Next, we will explain each point:')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow shared notepad"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: It is allowed to use the notepad or notepad. / No: You cannot use the notepad or notebook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow whiteboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: The whiteboard can be used. / No: The whiteboard cannot be used.")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-18.png",src:a(1018).Z,width:"1212",height:"246"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-19.png",src:a(8058).Z,width:"1211",height:"244"})),(0,l.kt)("ol",{start:15},(0,l.kt)("li",{parentName:"ol"},'We customize the "',(0,l.kt)("strong",{parentName:"li"},"default lock settings"),'". These settings will only affect the participants, that is, those who are moderators will still have access to everything, but the others will not.')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock microphone"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: The microphone cannot be used. / No: The microphone can be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock webcam"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Unable to use webcam. / No: The webcam can be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock screen sharing"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Unable to share screen. / No: Screen sharing can be shared.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock chat"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Unable to use chat. / No: Chat can be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock chat send message"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Unable to send messages in chat. / No: You can send messages in the chat.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lock chat file share"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes: Unable to upload a file in chat. / No: You can upload a file in the chat.")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-20.png",src:a(657).Z,width:"1237",height:"465"})),(0,l.kt)("ol",{start:16},(0,l.kt)("li",{parentName:"ol"},'We customize the "',(0,l.kt)("strong",{parentName:"li"},"Publishing"),"\" section. Below, we'll explain each point for you to decide how to set it up.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"What does it mean?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Created Date"),(0,l.kt)("td",{parentName:"tr",align:null},"You will choose the date on which the room is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Access"),(0,l.kt)("td",{parentName:"tr",align:null},"You can choose whether to publish the room, not publish, archive or delete it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meta Description"),(0,l.kt)("td",{parentName:"tr",align:null},"You will choose the description that will appear when they search for the room by a search engine.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meta Keywords"),(0,l.kt)("td",{parentName:"tr",align:null},"You will choose the keywords for the room")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Author"),(0,l.kt)("td",{parentName:"tr",align:null},"You can add description of the author of the room")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Rights"),(0,l.kt)("td",{parentName:"tr",align:null},"You can add information about content rights")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-21.png",src:a(3670).Z,width:"1262",height:"518"})),(0,l.kt)("ol",{start:17},(0,l.kt)("li",{parentName:"ol"},'Then, we click on "',(0,l.kt)("strong",{parentName:"li"},"Save"),'" and the room will have been created.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-22.png",src:a(9783).Z,width:"1165",height:"238"})),(0,l.kt)("h2",{id:"access-a-plugnmeet-room-in-joomla"},"Access a plugNmeet room in Joomla"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'To access the room, we go to the "',(0,l.kt)("strong",{parentName:"li"},"Menus"),'" section, then, "',(0,l.kt)("strong",{parentName:"li"},"Main Menu"),'" and select "',(0,l.kt)("strong",{parentName:"li"},"Add New Menu Item"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-23.png",src:a(6078).Z,width:"1225",height:"553"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},'A new page will appear, and we click on the "',(0,l.kt)("strong",{parentName:"li"},"Select"),'" button in the "',(0,l.kt)("strong",{parentName:"li"},"Menu Item Type"),'" section.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-24.png",src:a(4130).Z,width:"1221",height:"523"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'A window will open, select "',(0,l.kt)("strong",{parentName:"li"},"Plug N Meet"),'" and then choose "',(0,l.kt)("strong",{parentName:"li"},"Single room"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-25.png",src:a(5371).Z,width:"1166",height:"696"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},'Then, in the "',(0,l.kt)("strong",{parentName:"li"},"Select a room"),'" section, we choose the room we have created. Then, add a title to the menu and click on "',(0,l.kt)("strong",{parentName:"li"},"Save"),'" to save the changes.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-26.png",src:a(8368).Z,width:"1131",height:"646"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},'Now to be able to enter the room, we have to enter the main page of our Joomla as a visitor and we will see that in the menu the title we choose appears. In this example it is "',(0,l.kt)("strong",{parentName:"li"},"Classes"),'".')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-27.png",src:a(3288).Z,width:"1069",height:"605"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},'We click on the chosen name and the description of the room will appear. To enter we fill in the data of "',(0,l.kt)("strong",{parentName:"li"},"Name"),'" and "',(0,l.kt)("strong",{parentName:"li"},"Password"),'". It is important to remember that the password to be filled will be those that we previously configured for the participant or moderator. Finally, we press on "',(0,l.kt)("strong",{parentName:"li"},"Submit"),'" and we are already inside the room.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Joomla-28.png",src:a(5988).Z,width:"1419",height:"556"})))}d.isMDXComponent=!0},5494:function(t,e,a){e.Z=a.p+"assets/images/Joomla-1-cb2d7990be14f690f24c729dc52421fb.png"},6680:function(t,e,a){e.Z=a.p+"assets/images/Joomla-10-b27c2b5284ab30607cad8f95e11baf16.png"},9457:function(t,e,a){e.Z=a.p+"assets/images/Joomla-11-e2196cda42603fc65212d31734f2bf25.png"},6464:function(t,e,a){e.Z=a.p+"assets/images/Joomla-12-2f6c2929f3147cafe44f90fa8143d4a6.png"},8017:function(t,e,a){e.Z=a.p+"assets/images/Joomla-13-bb2c464b0b98c0497dd269037046a36f.png"},520:function(t,e,a){e.Z=a.p+"assets/images/Joomla-14-48cac63d1e32e6a1809e8e918f8b78a5.png"},5708:function(t,e,a){e.Z=a.p+"assets/images/Joomla-15-859b03092b7e265d3b920b930d7cba81.png"},1239:function(t,e,a){e.Z=a.p+"assets/images/Joomla-16-416812e79e10adc0ee5d016ce63b11a8.png"},6954:function(t,e,a){e.Z=a.p+"assets/images/Joomla-17-fd9e04325d3f95523ef9c58e5d969aa1.png"},1018:function(t,e,a){e.Z=a.p+"assets/images/Joomla-18-ce8e11739bedd0691f80bc8fff182313.png"},8058:function(t,e,a){e.Z=a.p+"assets/images/Joomla-19-d0cf68188c264ca5746380c7d7628715.png"},6060:function(t,e,a){e.Z=a.p+"assets/images/Joomla-2-b321dec0a48b27d985523eaff063284c.png"},657:function(t,e,a){e.Z=a.p+"assets/images/Joomla-20-700afa9b05eff07441840ea686715560.png"},3670:function(t,e,a){e.Z=a.p+"assets/images/Joomla-21-8ac9da317d169de2157c93eec2b12bc9.png"},9783:function(t,e,a){e.Z=a.p+"assets/images/Joomla-22-718b889d3659325f2c8a8ab3f8847131.png"},6078:function(t,e,a){e.Z=a.p+"assets/images/Joomla-23-af1210705e4e702e61f9a0b5294405e7.png"},4130:function(t,e,a){e.Z=a.p+"assets/images/Joomla-24-32918f9e8d50b77c084dc391a043aa7c.png"},5371:function(t,e,a){e.Z=a.p+"assets/images/Joomla-25-1ff47a2ee9cd71ed2be21e1070321d4e.png"},8368:function(t,e,a){e.Z=a.p+"assets/images/Joomla-26-1e03b93f8c1c45b9373f0c59aba3d9f5.png"},3288:function(t,e,a){e.Z=a.p+"assets/images/Joomla-27-4575ecc98b6234a3b9af80f9529d90a1.png"},5988:function(t,e,a){e.Z=a.p+"assets/images/Joomla-28-cb7f1eefc4e2cd6d54f31c6ad7c3df2e.png"},4459:function(t,e,a){e.Z=a.p+"assets/images/Joomla-3-428b7c96d6188ad2329ea0e71c31a4e6.png"},6172:function(t,e,a){e.Z=a.p+"assets/images/Joomla-4-ac449700b928dabfea727e6b18a3b50a.png"},7754:function(t,e,a){e.Z=a.p+"assets/images/Joomla-5-e11149cdc2666132accb85e860cb05e2.png"},2683:function(t,e,a){e.Z=a.p+"assets/images/Joomla-6-cfb72285db202be5dac3298b9c8847d8.png"},5297:function(t,e,a){e.Z=a.p+"assets/images/Joomla-7-dbc6acc6a8833cb28e5f26ff9f86be4b.png"},71:function(t,e,a){e.Z=a.p+"assets/images/Joomla-8-b0bb2a7a1503754368dff7497026cb9d.png"},1157:function(t,e,a){e.Z=a.p+"assets/images/Joomla-9-c46735047799b881fc6ae600eedccef6.png"}}]);