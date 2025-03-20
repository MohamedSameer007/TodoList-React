import React, { useState, useEffect } from 'react'

const App = () => {
  const [type, setType] = useState('')
  const [box, setBox] = useState([{ id: Date.now(), name: "Mohamed" }])

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    link.integrity =
      "sha384-9Ehlb1CsQlmvKnBIu6sDfzVhklNJ8C9s8S6DdL4bzEbe1AM4waSftaeukGkgjIc5";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);

  const additem = () => {
    setBox([...box, { id: Date.now(), name: type }])
  }

  const deleteitem = (id) => {
    setBox(box.filter((item) => item.id !== id))
  }

  const updateitem = (id, itmname) => {
    setBox(box.map((item) => item.id === id ? { ...item, name: itmname } : item))
  }

  const inputchange = (id) => {
    setBox(box.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className='container'>

      <div className='input-box'>
        <div className='input-content'>
          <input type='text' onChange={(e) => setType(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') {additem()}}}   ></input>
          <button onClick={additem}>Add</button>
        </div>
      </div>

      <div className='container-box'>
        <div className='ul'>
          {box.map((item) => (
            <div className='li' key={item.id}>{item.name}

              <div className='content'>
                <div className='li-complete'>
                  <input
                    type='checkbox'
                    checked={item.completed}
                    onChange={() => inputchange(item.id)}
                  />
                  <button className={item.completed ? 'active' : 'non-active'}>
                    {item.completed ? 'Completed' : 'Not Completed'}
                  </button>
                </div>
                <div className='li-button'>
                  <button onClick={() => deleteitem(item.id)}><i class="fa-solid fa-trash"></i></button>
                  <button onClick={() => updateitem(item.id, prompt("enter your name", item.name))}><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>

  )
}
export default App;