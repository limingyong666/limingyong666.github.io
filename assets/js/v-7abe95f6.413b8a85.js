"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[639],{873:(i,l,t)=>{t.r(l),t.d(l,{data:()=>e});const e={key:"v-7abe95f6",path:"/website/buildblog.html",title:"小白0成本搭建博客",lang:"zh-CN",frontmatter:{date:"2022/1/26 15:20",tag:["搭建"],categories:["网站"],title:"小白0成本搭建博客"},excerpt:"",headers:[{level:2,title:"编译",slug:"编译",children:[{level:3,title:"git init",slug:"git-init",children:[]},{level:3,title:"git add .",slug:"git-add",children:[]},{level:3,title:'git commit -m "first commit"',slug:"git-commit-m-first-commit",children:[]}]},{level:2,title:"上传",slug:"上传",children:[]}],git:{updatedTime:null,contributors:[]}}},2556:(i,l,t)=>{t.r(l),t.d(l,{default:()=>hi});var e=t(6252);const n=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,"观看之前请查看网站置顶注意事项，喜欢的话请在小红书或者b站点个关注"),(0,e._)("p",null,"本教程针对Windows系统，Android以后会出，希望大家多多支持"),(0,e._)("p",null,"配置会有点难 //有梦的人终会实现"),(0,e._)("p",null,"blibili:blm团队"),(0,e._)("p",null,"小红书:爱国爱党的小李")],-1),a=(0,e._)("h1",{id:"准备环境",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#准备环境","aria-hidden":"true"},"#"),(0,e.Uk)(" 准备环境")],-1),r=(0,e._)("p",null,"1.GitHub账户（注册需要邮箱）",-1),o={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("github"),c=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,"网站对于国内用户并不友好，访问会很慢，建议使用梯子VPN，对于后面的文章更新会有帮助")],-1),s={href:"https://hello-shudong.com/auth/register?code=v0W9",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("推荐梯子"),u=(0,e._)("p",null,"2.微软Visual Studio Code（简称vscode）",-1),m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("vscode"),h=(0,e._)("p",null,"3.1.node.js",-1),b={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("node"),f=(0,e._)("p",null,"4.npm环境。node.js自带",-1),v=(0,e.Uk)("5.安装yarn "),k={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("yarn"),j=(0,e._)("p",null,"6.安装vuepress 命令：npm install -g vuepress（建议重启一下电脑）",-1),z=(0,e.Uk)("7.安装git工具 "),x={href:"http://fumacrom.com/3aQbu",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("gitbash"),q=(0,e.uE)('<h1 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h1><p>！！！请确保准备环境的步骤做好</p><p>1.安装脚手架（跟应用商店差不多）</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i vuepress-theme-cli -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.下载博客文件</p><p>这里说明一下，要下载在哪请打开到那个目录，然后按住shift键和右键（两个键同时按）来打开命令行下载</p><p>如图所示：比如我要下载在d盘</p>',7),S=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153308377",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261533252.png",data:"aurora"})],-1),W=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153421355",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261534854.png",data:"aurora"})],-1),w=(0,e._)("p",null,"复制粘贴回车就会出现这个",-1),H=(0,e._)("p",null,"意思就是设置在D盘显示的名称和将要在博客主页显示的名字（默认只要回车不要理就行）",-1),C=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153638964",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261536039.png",data:"aurora"})],-1),G=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153704643",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261537556.png",data:"aurora"})],-1),P=(0,e._)("p",null,"继续回车就开始下载",-1),E=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153722565",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261537452.png",data:"aurora"})],-1),I=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126153822010",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261538942.png",data:"aurora"})],-1),T=(0,e._)("p",null,"如图下载好的样子",-1),D=(0,e._)("p",null,"这里肯定有大部分人会遇到这个错误，请查看这个并按提示输入对应命令解除限制",-1),N={href:"https://www.cnblogs.com/ifannie/p/12792711.html",target:"_blank",rel:"noopener noreferrer"},V=(0,e.Uk)("无法加载文件因为在此系统中禁止执行脚本"),A=(0,e._)("p",null,"这样就文件就准备好了",-1),L=(0,e._)("p",null,"关闭命令行进行下一步",-1),M=(0,e._)("h1",{id:"博客设置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#博客设置","aria-hidden":"true"},"#"),(0,e.Uk)(" 博客设置")],-1),Q=(0,e._)("p",null,"博客下载好并不能立刻执行",-1),Y=(0,e._)("p",null,"先打开blog-demo（如果你没改名字的话就是这个默认名）这个文件夹",-1),Z=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126154811108",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261548074.png",data:"aurora"})],-1),B=(0,e._)("p",null,"修复好可以测试，输入npm run dev",-1),F=(0,e._)("p",null,"等待好它会给你一个网址http://localhost:8080/默认是这个",-1),J=(0,e._)("p",null,[(0,e.Uk)("打开这个网址就可以查看你的博客主页是什么样的 "),(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-202201261552",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211010232918219.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),K=(0,e._)("p",null,"准备好了就得到比较困难的一步（耗时较多）配置js文件，也就是配置博客设置",-1),O={href:"https://aurora.xcye.xyz/homeconfig.html",target:"_blank",rel:"noopener noreferrer"},R=(0,e.Uk)("主题作者的配置教程"),X=(0,e._)("p",null,"具体教程不会来找我",-1),$=(0,e._)("h1",{id:"github博客上传",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#github博客上传","aria-hidden":"true"},"#"),(0,e.Uk)(" GitHub博客上传")],-1),ii=(0,e._)("p",null,"确保GitHub注册完毕和git上传工具",-1),li=(0,e._)("p",null,"在GitHub上新建一个库,由于要确保网站可用",-1),ti=(0,e._)("p",null,"请确保下面的图片",-1),ei=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126161036094",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261610119.png",data:"aurora"})],-1),ni=(0,e._)("p",null,"然后库名字就是（用户名.github.io）",-1),ai=(0,e._)("p",null,"如图所示",-1),ri=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126170036054",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261700308.png",data:"aurora"})],-1),oi=(0,e._)("h2",{id:"编译",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#编译","aria-hidden":"true"},"#"),(0,e.Uk)(" 编译")],-1),pi=(0,e._)("p",null,"在blog-demo目录下",-1),ci=(0,e._)("p",null,"还是shift和鼠标右键打开命令行",-1),si=(0,e._)("p",null,"使用npm run build编译",-1),gi=(0,e._)("p",null,"弄好后打开目录，会出现编译好的文件",-1),ui=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220126160401459",originSrc:"https://blm-1305793310.cos.ap-beijing.myqcloud.com/202201261604634.png",data:"aurora"})],-1),mi=(0,e.uE)('<p>在这个目录下使用3条命令</p><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><p>这是在dist目录下创建一个可管理的库，这时会创建一个.git的文件夹，如果已经有了（在dist目录下不是其他目录）就不需要再重复一遍否则会报错</p><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add .</h3><p>add跟.之间有一个空格</p><p>这是将所有文件加入上传队列</p><p>这时还没上传</p><h3 id="git-commit-m-first-commit" tabindex="-1"><a class="header-anchor" href="#git-commit-m-first-commit" aria-hidden="true">#</a> git commit -m &quot;first commit&quot;</h3><p>上传的起名</p><h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h2><p>git remote add origin （github提供的ssh）连接库</p><p>git branch -M main git push -u origin main正式上传</p><p>好了就可以访问你的网站了，得等几分钟，因为还没部署完成，网页会是404</p>',13),di={},hi=(0,t(3744).Z)(di,[["render",function(i,l){const t=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[n,a,r,(0,e._)("p",null,[(0,e._)("a",o,[p,(0,e.Wm)(t)])]),c,(0,e._)("p",null,[(0,e._)("a",s,[g,(0,e.Wm)(t)])]),u,(0,e._)("p",null,[(0,e._)("a",m,[d,(0,e.Wm)(t)])]),h,(0,e._)("p",null,[(0,e._)("a",b,[_,(0,e.Wm)(t)])]),f,(0,e._)("p",null,[v,(0,e._)("a",k,[y,(0,e.Wm)(t)])]),j,(0,e._)("p",null,[z,(0,e._)("a",x,[U,(0,e.Wm)(t)])]),q,S,W,w,H,C,G,P,E,I,T,D,(0,e._)("p",null,[(0,e._)("a",N,[V,(0,e.Wm)(t)])]),A,L,M,Q,Y,Z,B,F,J,K,(0,e._)("p",null,[(0,e._)("a",O,[R,(0,e.Wm)(t)])]),X,$,ii,li,ti,ei,ni,ai,ri,oi,pi,ci,si,gi,ui,mi],64)}]])}}]);