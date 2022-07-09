import './App.scss';
import {marked} from "marked" ;
import React , {useState} from "react" ;



function App() {

  marked.setOptions({
    breaks:true
  })

  const [text, setText] = useState(`
  # This is Markdown Previewer

  ## Its about Markdown

  Here is cat Wikipedia [CatWiki](https://en.wikipedia.org/wiki/Cat)

  This is >> \` inline code \`

  \`\`\`
  And This is blockcode
  \`\`\`

  This is Order List
  1. first
  2. second 
  3. third

  > -block quote!

  React img

  ![react-img](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

  This is **bold text**

  `);

  return (
  <div className="App">
    <header className="App-header">
      <div className='editor-div'>
        <p className='editor-bar'>Editor</p>
        <textarea id="editor" value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}>
        </textarea>
      </div>
      <div className='preview-div'>
        <p className='previewer-bar'>Previewer</p>
        <div id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}
        ></div>
      </div>
    </header>
    <footer>
      By TerTeixs
    </footer>
  </div>
  )
}

export default App;
