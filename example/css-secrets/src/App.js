import ChapterOne from './chapter-one'

const App = () => {
  const snippet = {
    markup: `<div id=app>1</div>`,
    css: `div{
      background:#ef475d;
      width:10px;
      height:10px
    }`,
    javascript: ``,
  };
  return (
    <div>
       <ChapterOne />
    </div>
  );
};

export default App;
