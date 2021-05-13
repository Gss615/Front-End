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

        </div>
    
     )
}

 export default ChapterOne
