import Playground from "@agney/playground";


const ChapterOne = ()=>{
    const snippet1 = {
            markup:`<div class='box'><div/>`,
            css:`
.box{
    width:200px;
    height:200px;
    border:10px solid hsla(0,0%,100%,.5);
    background:white;
    /*  改变背景的延伸，显示出半透明边框 */
    background-clip:padding-box;
}
html,body{
    margin:0;
    width:100%;
    height:100%;
    background:#ccccd6;
}
            `,
            javascript:``
    }
    const snippet2={
        markup:`<div class='box' />`,
        css:`
.box{
    margin:15px;
    width:200px;
    height:200px;
    background:#525288;
    box-shadow: 0 0 0 10px #655,0 0 0 15px deeppink;
}
            
        `,
        javascript:``
    }
    const snippet2_2={
        markup:`<div class='box' />`,
        css:`
.box{
    width:200px;
    height:200px;
    background:#525288;
    border:10px solid #655;
    border-radius:10px;
    outline:5px dashed deeppink;
    /* outline-offset:-10px; */
}
        `,
        javascript:``
    }
    const snippet3 = {
        markup:`<div class='box'></div>`,
        css:`
.box{
    height:200px;
    width:200px;
    /* 回退机制，遇到浏览器不支持拓展语法时，不会显得那么难看 */
    background:url(水杯.png) no-repeat bottom right #58a;
    background-position:bottom 20px right 10px;
    /* background-origin:content-box; */
    /* background-position:calc(100% - 20px) calc(100% - 10px); */
    background-size:30%;
}
        `,
        javascript:``
    }
    const snippet4 = {
        markup:`<div class='box'></div>`,
        css:`
.box{
    width:200px;
    height:200px;
    background:tan;
    border-radius:10px;
    outline:10px solid #655;
    border:10px solid tan;
    box-shadow:0 0 0 10px #655;
}
        `,
        javascript:``
    }
    const snippet5 = {
        markup:`<div class='box'>
            <p>some text...</p>
            <figure>
                <img src='水杯.png' />
                <figcaption>
                    这里有很长一段文字，很长很长很长很长很长。。。。文字还没结束，还要很长。
                </figcaption>
            </figure>
        </div>`,
        css:`
.box{
    height:700px
}
img{
    border:1px solid #000;
}
figure{
    width:min-content;
    margin:auto;
}
        `,
        javascript:``
    }
    const  snippet6 = {
        markup:`
        <section>
            <table>
                <tr>
                    <td>文字</td>
                    <td>很多文字，很多很多文字。</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>很多文字，很多很多文字。很多文字，很多很多文字。很多文字，很多很多文字。</td>
                    <td>文字<code>text-overflow: ellipsis</code></td>
                </tr>
            </table>
        </section>
        `,
        css:`
section{
    width:500px;
}
table{
    width:100%;
    border-collapse:collapse;
    margin-bottom:2em;
}
td{
    border:1px solid #000;
    white-space:pre;
    text-overflow: ellipsis;
}
table{
    table-layout:fixed;
}
        `,
        javascript:``
    }
const snippet7 = {
    markup:`<footer>页脚内容，内容会居中，并且有一定宽度；内容宽度为400px</footer>
    `,
    css:`
footer{
    padding:1em;
    padding:1em calc(50% - 200px);
    background:#333;
} 
/* 通常外包一层div将内容居中 */
    `,
    javascript:``
}
const snippet8 = {
    markup:`<main>
    <h1>我局中了么？</h1>
    <p>这段文字会居中</p>
</main>`,
    css:`
/* 传统基于绝对定位居中 
    局限性：要求固定高度和宽度
*/
main{
    position:absotion;
    top:50%;
    left:50%;
    margin-top:-3em;
    margin-left:-9em;
    width:18em;
    height:6em;
}

/* calc 居中 
局限性，同样需要高度和宽度
*/
main{
    position:absotion;
    top:calc(50% - 3em);
    left:calc(50% - 9em);
    width:6em;
    height:18em;
}
/* transform 居中
局限性，居中元素超过视口高度，顶部会被裁剪 
hack transform-style:preserver-3d;
*/
main{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
}
/* 根据视口居中 */
.main{
    width:18em;
    padding:1em;
    margin:50vh auto 0;
    transform:translateY(-50%);
}
/* 基于flexbox 居中 
使用flexbox是，margin:auto; 不仅会是元素在水平位置居中，垂直位置也会居中；
*/
.body{
    display:flex;
    min-height:100vh;
    margin:0;
}
.main{
    margin: auto;
}
`,
    javascript:``
}
const snippet9 = {
    markup:`
<div>
    <main>
        <p>
            一些文字。
        </p>
    </main>
    <footer>
        <p>© 2021 no rights reserved</p>
    </footer>
</div>
    `,
    css:`
/* calc() 方法计算，需要知道footer的固定高度
    内容最小高度 min-height - footer高度
    
    flex 盒子布局
    display:flex;
    flex-flow:column;
    min-height:100vh;
    
    flex:1; 内容元素自由伸缩
*/
div{
    width:100%;
    height:200px;
    background:deeppink;
}
footer{
    background:#333;
}
p{
    padding:.5em 3em;
}
    `,
    javascript:``
}
    return (
        <div>
            <h2>第一章 背景与边框</h2>
            <h3>1 半透明半框</h3>
            <p>默认背景会延伸到边框区域下，<code>background-clip</code> 可以设置元素背景是否延伸到边框，内边距盒子，内容盒子下。</p>
            <Playground 
                id='example'
                initialSnippet={snippet1}
                defaultEditorTab='css'
                transformJs
            />
            <h3>2 多重边框</h3>
            <p><code>border-image</code>，<code>border-shadow</code>，<code>outline</code>都可以实现多重边框。</p>
            <p><code>border-shadow</code>方案</p>
            <Playground 
                initialSnippet={snippet2}
                defaultEditorTab='css'
                transformJs
            />
            <p><code>outline</code>（描边）方案</p>
            <p>相比border-shadow比较灵活，可以使用虚线；但是outline不会随border-radius属性产生圆角。</p>
            <Playground 
                initialSnippet={snippet2_2}
                defaultEditorTab='css'
                transformJs
            />
            <h3>灵活背景定位</h3>
            <p><code>background-position:bottom right;</code>可以将背景图片定位到右下角，有时候又不想背景图片和边缘保持一点距离，可以使用background-position的拓展语法<code>background-position:bottom 20px right 10px;</code></p>
            <p>另外还有 <b>background-origin</b> 方案和 <b>calc()</b> 方案</p>
            <Playground
                initialSnippet={snippet3}
                defaultEditorTab='css'
                transformJs
            />
            <h3>4 边距内角</h3>
            <p>根据outline不会随border-radius改变为圆角特性，用box-shadow填充outline内border之间的空隙。</p>
            <Playground 
                initialSnippet={snippet4}
                defaultEditorTab='css'
                transformJs
            />
            <h2>第七章 结构与布局</h2>
            <h3>36 自适应内部元素</h3>
            <Playground 
                initialSnippet={snippet5}
                defaultEditorTab='css'
                transformJs
            />
            <h3>37 精确控制表格列宽</h3>
            <Playground 
                initialSnippet={snippet6}
                defaultEditorTab='css'
                transformJs
            />
            <h3>39 满幅的背景，定宽的内容</h3>
            <Playground 
                initialSnippet={snippet7}
                defaultEditorTab='css'
                transformJs
            />
            <h3>40 垂直居中</h3>
            <Playground 
                initialSnippet={snippet8}
                defaultEditorTab='css'
                transformJs
            />
            <h3>41 紧贴底部的页脚</h3>
            <Playground
                initialSnippet={snippet9}
                defaultEditorTab='css'
                transformJsf
            />
        </div>
    
     )
}

 export default ChapterOne
