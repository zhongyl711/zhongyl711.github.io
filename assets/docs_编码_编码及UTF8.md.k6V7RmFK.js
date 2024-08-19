import{_ as e,o as n,c as o,R as a}from"./chunks/framework.vB1haF5z.js";const i="/assets/map.dRTgulZJ.jpeg",T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/编码/编码及UTF8.md","filePath":"docs/编码/编码及UTF8.md"}'),t={name:"docs/编码/编码及UTF8.md"},d=a(`<h2 id="编码" tabindex="-1">编码 <a class="header-anchor" href="#编码" aria-label="Permalink to &quot;编码&quot;">​</a></h2><h3 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h3><ul><li><strong>字符集（Charset）</strong>：是一个系统支持的所有抽象字符的集合。字符是各种文字和符号的总称，包括各国家文字、标点符号、图形符号、数字等。</li><li><strong>字符编码（Character Encoding）</strong>：是一套法则，使用该法则能够对自然语言的字符的一个集合（如字母表或音节表），与其他东西的一个集合（如号码或电脉冲）进行配对。即在符号集合与数字系统之间建立对应关系，它是信息处理的一项基本技术。通常人们用符号集合（一般情况下就是文字）来表达信息。而以计算机为基础的信息处理系统则是利用元件（硬件）不同状态的组合来存储和处理信息的。元件不同状态的组合能代表数字系统的数字，因此字符编码就是将符号转换为计算机可以接受的数字系统的数，称为数字代码。</li><li><strong>常见字符集名称</strong>：ASCII 字符集、GB2312 字符集、BIG5 字符集、GB18030 字符集、Unicode 字符集等。计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。</li></ul><h3 id="ascii-码" tabindex="-1">ASCII 码 <a class="header-anchor" href="#ascii-码" aria-label="Permalink to &quot;ASCII 码&quot;">​</a></h3><pre><code>上个世纪60年代，美国制定了一套字符编码，对英语字符与二进制位之间的关系，做了统一规定。这被称为 ASCII 码，一直沿用至今。

ASCII 码一共规定了128个字符的编码，比如空格SPACE是32（二进制00100000），大写的字母A是65（二进制01000001）。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的一位统一规定为0。
</code></pre><h3 id="非-ascii-码" tabindex="-1">非 ASCII 码 <a class="header-anchor" href="#非-ascii-码" aria-label="Permalink to &quot;非 ASCII 码&quot;">​</a></h3><pre><code>由于各国语言不同，128个字符不够用，然后一些欧洲国家利用最高为表示其他字符，这样就可以表示256个字符

至于亚洲国家的文字，使用的符号就更多了，汉字就多达10万左右。一个字节只能表示256种符号，肯定是不够的，就必须使用多个字节表达一个符号。比如，简体中文常见的编码方式是 GB2312，使用两个字节表示一个汉字，所以理论上最多可以表示 256 x 256 = 65536 个符号。

中文编码的问题比较复杂，将在文末讨论。这里先了解下，虽然都是用多个字节表示一个符号，但是GB类的汉字编码与后文的 Unicode 和 UTF-8 是毫无关系的。
</code></pre><h3 id="unicode-字符集" tabindex="-1">Unicode 字符集 <a class="header-anchor" href="#unicode-字符集" aria-label="Permalink to &quot;Unicode 字符集&quot;">​</a></h3><pre><code>统一码（Unicode），也叫万国码、单一码，是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。 --百度百科名词解释

正如上一节所说，世界上存在着多种编码方式，同一个二进制数字可以被解释成不同的符号。因此，要想打开一个文本文件，就必须知道它的编码方式，否则用错误的编码方式解读，就会出现乱码。为什么电子邮件常常出现乱码？就是因为发信人和收信人使用的编码方式不一样。

可以想象，如果有一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，那么乱码问题就会消失。这就是 Unicode，就像它的名字都表示的，这是一种所有符号的编码。

Unicode 当然是一个很大的集合，现在的规模可以容纳100多万个符号。每个符号的编码都不一样，比如，U+0639表示阿拉伯字母Ain，U+0041表示英语的大写字母A，U+4E25表示汉字严。具体的符号对应表，可以查询unicode.org，或者专门的汉字对应表。
</code></pre><h3 id="unicode-的问题" tabindex="-1">Unicode 的问题 <a class="header-anchor" href="#unicode-的问题" aria-label="Permalink to &quot;Unicode 的问题&quot;">​</a></h3><pre><code>Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储

比如，汉字严的 Unicode 是十六进制数4E25，转换成二进制数足足有15位（100111000100101），也就是说，这个符号的表示至少需要2个字节。表示其他更大的符号，可能需要3个字节或者4个字节，甚至更多。

这里就有两个严重的问题，第一个问题是，如何才能区别 Unicode 和 ASCII ？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果 Unicode 统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的。

它们造成的结果是：
- 1）出现了 Unicode 的多种存储方式，也就是说有许多种不同的二进制格式，可以用来表示 Unicode。
- 2）Unicode 在很长一段时间内无法推广，直到互联网的出现。
</code></pre><h3 id="utf-8" tabindex="-1">UTF-8 <a class="header-anchor" href="#utf-8" aria-label="Permalink to &quot;UTF-8&quot;">​</a></h3><pre><code>互联网的普及，强烈要求出现一种统一的编码方式。UTF-8 就是在互联网上使用最广的一种 Unicode 的实现方式。其他实现方式还包括 UTF-16（字符用两个字节或四个字节表示）和 UTF-32（字符用四个字节表示），不过在互联网上基本不用。
</code></pre><blockquote><p>重复一遍，这里的关系是，UTF-8 是 Unicode 的实现方式之一。</p></blockquote><pre><code>UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。

UTF-8 的编码规则很简单，只有二条：

1）对于单字节的符号：字节的第一位设为0，后面7位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的；

2）对于n字节的符号（n &gt; 1）：第一个字节的前n位都设为1，第n + 1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。
</code></pre><p><strong>下表总结了编码规则，字母 x 表示可用编码的位：</strong><img src="`+i+`" alt="utf8" data-fancybox="gallery"></p><pre><code>跟据上表，解读 UTF-8 编码非常简单。如果一个字节的第一位是0，则这个字节单独就是一个字符；如果第一位是1，则连续有多少个1，就表示当前字符占用多少个字节。

下面，还是以汉字严为例，演示如何实现 UTF-8 编码。

严的 Unicode 是4E25（100111000100101），根据上表，可以发现4E25处在第三行的范围内（0000 0800 - 0000 FFFF），因此严的 UTF-8 编码需要三个字节，即格式是1110xxxx 10xxxxxx 10xxxxxx。然后，从严的最后一个二进制位开始，依次从后向前填入格式中的x，多出的位补0。这样就得到了，严的 UTF-8 编码是11100100 10111000 10100101，转换成十六进制就是E4B8A5。
</code></pre><h3 id="unicode-与-utf-8-之间的转换" tabindex="-1">Unicode 与 UTF-8 之间的转换 <a class="header-anchor" href="#unicode-与-utf-8-之间的转换" aria-label="Permalink to &quot;Unicode 与 UTF-8 之间的转换&quot;">​</a></h3><pre><code>严的Unicode 码 是 4E25，UTF-8 编码是 E4B8A5，两者是不一样的。它们之间的转换可以通过程序实现。windows上一些编辑器直接切换
</code></pre><h3 id="little-endian-和-big-endian" tabindex="-1">Little endian 和 Big endian <a class="header-anchor" href="#little-endian-和-big-endian" aria-label="Permalink to &quot;Little endian 和 Big endian&quot;">​</a></h3><pre><code>UCS-2 格式可以存储 Unicode 码（码点不超过0xFFFF）。以汉字严为例，Unicode 码是4E25，需要用两个字节存储，一个字节是4E，另一个字节是25。存储的时候，4E在前，25在后，这就是 Big endian 方式；25在前，4E在后，这是 Little endian 方式。
</code></pre><blockquote><p>UCS-2: 即直接用两个字节存入字符的 Unicode 码</p></blockquote><pre><code>这两个古怪的名称来自英国作家斯威夫特的《格列佛游记》。在该书中，小人国里爆发了内战，战争起因是人们争论，吃鸡蛋时究竟是从大头(Big-endian)敲开还是从小头(Little-endian)敲开。为了这件事情，前后爆发了六次战争，一个皇帝送了命，另一个皇帝丢了王位。

第一个字节在前，就是&quot;大头方式&quot;（Big endian），第二个字节在前就是&quot;小头方式&quot;（Little endian）。

那么很自然的，就会出现一个问题：计算机怎么知道某一个文件到底采用哪一种方式编码？

Unicode 规范定义，每一个文件的最前面分别加入一个表示编码顺序的字符，这个字符的名字叫做&quot;零宽度非换行空格&quot;（zero width no-break space），用FEFF表示。这正好是两个字节，而且FF比FE大1。

如果一个文本文件的头两个字节是FE FF，就表示该文件采用大头方式；如果头两个字节是FF FE，就表示该文件采用小头方式。
</code></pre><h3 id="实例讲解" tabindex="-1">实例讲解 <a class="header-anchor" href="#实例讲解" aria-label="Permalink to &quot;实例讲解&quot;">​</a></h3><pre><code>下面，举一个实例。

打开&quot;记事本&quot;程序notepad.exe，新建一个文本文件，内容就是一个严字，依次采用ANSI，Unicode，Unicode big endian和UTF-8编码方式保存。

然后，用文本编辑软件UltraEdit 中的&quot;十六进制功能&quot;，观察该文件的内部编码方式：

1）ANSI：文件的编码就是两个字节D1 CF，这正是严的 GB2312 编码，这也暗示 GB2312 是采用大头方式存储的。
2）Unicode：编码是四个字节FF FE 25 4E，其中FF FE表明是小头方式存储，真正的编码是4E25。
3）Unicode big endian：编码是四个字节FE FF 4E 25，其中FE FF表明是大头方式存储。
4）UTF-8：编码是六个字节EF BB BF E4 B8 A5，前三个字节EF BB BF表示这是UTF-8编码，后三个E4B8A5就是严的具体编码，它的存储顺序与编码顺序是一致的。
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><pre><code>这些字符集和编码的关系很容易让程序员混淆，现在小结一下。

简单来说：Unicode、GBK和Big5码等就是编码的值（也就是术语“字符集”），而UTF-8、UTF-16、UTF32之类就是这个值的表现形式（即术语“编码格式”）。

另外：Unicode、GBK和Big5码等字符集是不兼容的，同一个汉字在这三个字符集里的码值是完全不一样的。如＂汉＂的Unicode值与gbk就是不一样的，假设Unicode为a040，GBK为b030。以UTF-8为例，UTF-8码完全只针对Unicode来组织的，如果GBK要转UTF-8必须先转Unicode码，再转UTF-8就OK了。

即GBK、GB2312等与UTF8之间都必须通过Unicode编码才能相互转换：
1）GBK、GB2312 --先转--&gt; Unicode --再转--&gt; UTF8
2）UTF8 --先转--&gt; Unicode --再转--&gt; GBK、GB2312
</code></pre><h3 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h3><p><a href="https://blog.csdn.net/pagnzong/article/details/115345879" target="_blank" rel="noreferrer">原文</a></p><p><a href="https://home.unicode.org/" target="_blank" rel="noreferrer">unicode</a></p><p><a href="http://www.chi2ko.com/tool/CJK.htm" target="_blank" rel="noreferrer">汉字对应表(unicode 最新范围 4E00-9FFF)</a></p>`,31),r=[d];function c(l,U,h,F,s,u){return n(),o("div",null,r)}const b=e(t,[["render",c]]);export{T as __pageData,b as default};
