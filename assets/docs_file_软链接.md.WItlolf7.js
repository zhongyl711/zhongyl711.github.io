import{_ as a,o as i,c as e,R as t}from"./chunks/framework.vB1haF5z.js";const s="/assets/软链接.q-mBX074.png",k=JSON.parse('{"title":"软链接","description":"","frontmatter":{},"headers":[],"relativePath":"docs/file/软链接.md","filePath":"docs/file/软链接.md"}'),n={name:"docs/file/软链接.md"},o=t('<h1 id="软链接" tabindex="-1">软链接 <a class="header-anchor" href="#软链接" aria-label="Permalink to &quot;软链接&quot;">​</a></h1><h2 id="_1-什么是软链接" tabindex="-1">1.什么是软链接 <a class="header-anchor" href="#_1-什么是软链接" aria-label="Permalink to &quot;1.什么是软链接&quot;">​</a></h2><p>软链接（也称为符号链接或符号性链接），在Unix和类Unix操作系统中，是一种特殊类型的文件，它作为对另一个文件或目录的引用或路径。软链接可以看作是一个指向另一个文件或目录的快捷方式。</p><h2 id="_2-软链接的特点" tabindex="-1">2.软链接的特点 <a class="header-anchor" href="#_2-软链接的特点" aria-label="Permalink to &quot;2.软链接的特点&quot;">​</a></h2><ul><li><strong>路径引用</strong>：软链接包含了目标文件或目录的路径。当访问软链接时，操作系统会沿着这个路径定位到目标。 不同于硬链接：与硬链接不同，软链接并不直接指向文件数据的inode，而是指向另一个文件或目录的路径。因此，软链接可以跨文件系统，而硬链接不能。</li><li><strong>大小</strong>：软链接文件的大小通常是它所指向的路径的字符数。</li><li><strong>删除和移动</strong>：删除或移动目标文件会导致软链接失效，因为链接的路径不再指向有效的位置。</li><li><strong>权限</strong>：软链接的权限通常是lrwxrwxrwx（即所有用户都有读、写、执行权限），但实际上软链接的权限并不重要，因为系统会使用目标文件的权限。</li></ul><h2 id="_3-创建软链接" tabindex="-1">3.创建软链接 <a class="header-anchor" href="#_3-创建软链接" aria-label="Permalink to &quot;3.创建软链接&quot;">​</a></h2><p>在Linux或Unix系统中，可以使用ln命令的-s选项创建软链接：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target_path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link_name</span></span></code></pre></div><h2 id="_4-软链接和inode" tabindex="-1">4.软链接和inode <a class="header-anchor" href="#_4-软链接和inode" aria-label="Permalink to &quot;4.软链接和inode&quot;">​</a></h2><ul><li><strong>独立的inode</strong>：软链接有自己的inode，这个inode与它所指向的文件的inode是完全独立的。</li><li><strong>指向路径，非inode</strong>：软链接的inode存储的信息表示一个路径，当访问软链接时，文件系统解析这个路径来找到目标文件。目标文件是由其自己的inode表示的。</li><li><strong>目标文件的改变</strong>：如果软链接指向的目标文件被移动或删除，软链接的inode不变，但链接会变成“死链接”（broken link），因为存储在其数据块中的路径不再指向一个有效的位置。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>软链接的存放目标地址不是存放在inode结构中，存放在其所指向的数据块中</p></div><h2 id="图例" tabindex="-1">图例 <a class="header-anchor" href="#图例" aria-label="Permalink to &quot;图例&quot;">​</a></h2><p>文件a -&gt; 创建软连接b, 点击b -&gt; 找到a <img src="'+s+'" data-fancybox="gallery"></p>',13),l=[o];function r(d,h,c,p,_,g){return i(),e("div",null,l)}const b=a(n,[["render",r]]);export{k as __pageData,b as default};
