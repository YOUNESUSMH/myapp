import './App.css';
import React, { useState } from "react";

function App() {
  const[text,settext] = useState('');
  const[texts,settexts] = useState(()=>{
    return JSON.parse(localStorage.getItem('text1'))
  });
  const[editindex,seteditindex] = useState(null);
  const[edittext,setedittext] = useState('');

  const handindex = (index)=>{
     seteditindex(index);
  }
  const handeditindex  = (e,index)=>{
    if(e.key === 'Enter'){ 
      const newtext = [...texts];
      newtext[index] = edittext;
      settexts(newtext);
      localStorage.setItem('text1',JSON.stringify(newtext))
      seteditindex(null);
    }
  }

  const hand = (event) =>{
    if(event.key === 'Enter' && text.trim() !== ""){
      const newtext = [...texts, text];
      settexts(newtext);
      localStorage.setItem('text1',JSON.stringify(newtext))
      event.target.value = ''
    }
  }
  const hands = (index) =>{
     const newtext = texts.filter((_,i) => i !== index);
     settexts(newtext);
     localStorage.setItem('text1',JSON.stringify(newtext))

  }
  const [isopen,setopen] = useState(false)
  const list = ['qdqdq','ssdsds']

  return (
    <>
    <div className='container'>
      <div className='right'>
            <div className='icon' style={{position:'relative',left:'10px'}} ><i class="fa-solid fa-plus"></i></div>
            <div className='icon' ><i class="fa-solid fa-globe"></i></div>
            <div className='icon' ><i class="fa-solid fa-fire-flame-simple"></i></div>
      <div className='chat'> 
      <div className='ico' id='ico1' ><i style={{position:'relative',top:'5px'}} class="fa-solid fa-globe"></i>      <p style={{position:'relative',top:'-35px', left:'25px'}}>ChatGPT</p></div>
      <div className='ico' id='ico2' style={{position:'relative',top:'55px'}} ><i style={{position:'relative',top:'5px'}} class="fa-solid fa-fire-flame-simple"></i> <p style={{position:'relative',top:'-35px', left:'20px',}}>Explor GTPs</p></div>
      </div>
      <div className='divat'>
        {texts.map((item , index) => (
            <div className='YOU' onClick={() => handindex(index)}  key={index}>
              {editindex === index ? (<input type='text' onKeyDown={(e)=>handeditindex(e,index)} onChange={(e)=> setedittext(e.target.value)} />) : (<span>{item}</span>)}
            <span onClick={() => hands(index)} style={{cursor: "pointer", fontWeight: "bold", color: "red"}}>...</span></div>
        ))}
      </div>
     
      
      <div className='buyuk'>
        <div className='bou'>
        <span><svg  id='span1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5001 3.44338C12.1907 3.26474 11.8095 3.26474 11.5001 3.44338L4.83984 7.28868C4.53044 7.46731 4.33984 7.79744 4.33984 8.1547V15.8453C4.33984 16.2026 4.53044 16.5327 4.83984 16.7113L11.5001 20.5566C11.8095 20.7353 12.1907 20.7353 12.5001 20.5566L19.1604 16.7113C19.4698 16.5327 19.6604 16.2026 19.6604 15.8453V8.1547C19.6604 7.79744 19.4698 7.46731 19.1604 7.28868L12.5001 3.44338ZM10.5001 1.71133C11.4283 1.17543 12.5719 1.17543 13.5001 1.71133L20.1604 5.55663C21.0886 6.09252 21.6604 7.0829 21.6604 8.1547V15.8453C21.6604 16.9171 21.0886 17.9075 20.1604 18.4434L13.5001 22.2887C12.5719 22.8246 11.4283 22.8246 10.5001 22.2887L3.83984 18.4434C2.91164 17.9075 2.33984 16.9171 2.33984 15.8453V8.1547C2.33984 7.0829 2.91164 6.09252 3.83984 5.55663L10.5001 1.71133Z" fill="currentColor"></path><path d="M9.44133 11.4454L9.92944 9.98105C10.0321 9.67299 10.4679 9.67299 10.5706 9.98105L11.0587 11.4454C11.2941 12.1517 11.8483 12.7059 12.5546 12.9413L14.019 13.4294C14.327 13.5321 14.327 13.9679 14.019 14.0706L12.5546 14.5587C11.8483 14.7941 11.2941 15.3483 11.0587 16.0546L10.5706 17.519C10.4679 17.827 10.0321 17.827 9.92944 17.519L9.44133 16.0546C9.2059 15.3483 8.65167 14.7941 7.94537 14.5587L6.48105 14.0706C6.17298 13.9679 6.17298 13.5321 6.48105 13.4294L7.94537 12.9413C8.65167 12.7059 9.2059 12.1517 9.44133 11.4454Z" fill="currentColor"></path><path d="M14.4946 8.05961L14.7996 7.14441C14.8638 6.95187 15.1362 6.95187 15.2004 7.14441L15.5054 8.05961C15.6526 8.50104 15.999 8.84744 16.4404 8.99458L17.3556 9.29965C17.5481 9.36383 17.5481 9.63617 17.3556 9.70035L16.4404 10.0054C15.999 10.1526 15.6526 10.499 15.5054 10.9404L15.2004 11.8556C15.1362 12.0481 14.8638 12.0481 14.7996 11.8556L14.4946 10.9404C14.3474 10.499 14.001 10.1526 13.5596 10.0054L12.6444 9.70035C12.4519 9.63617 12.4519 9.36383 12.6444 9.29965L13.5596 8.99458C14.001 8.84744 14.3474 8.50104 14.4946 8.05961Z" fill="currentColor"></path></svg></span>
        <div className='kucuk'>
          <span style={{fontSize:'15px'}}>Upgrade plan</span><br/>
          <span>More access to the best models</span>
          </div>
      </div>
      </div>
      </div>

      <div className='left'>
        <div className='sahm'>
        <h3 className='ChatGPT'>ChatGPT</h3>
        <div className='span1' onClick={() => setopen(!isopen)}></div>
        {!isopen &&
        <ul className='ul1'>
            {list.map((item,index)=>(
               <li className='li1' key={index}>{item}</li>
            ))}
          </ul>
          }
        </div>
        
        <div className='wasat'>
          <h2>What can I help with?</h2>
          <div className='you'>
          <input type='text' placeholder='Ask anything' onKeyDown={hand} onChange={(e) => settext(e.target.value)} />
          <div className='tahtinput'>
            <div className='icons' style={{position:'relative',top:'10px',left:'10px',display:'inline',padding:'8px'}}><i class="fa-solid fa-plus"></i></div>
            <div className='icons' style={{position:'relative',top:'10px',left:'20px',display:'inline',padding:'8px'}}><i class="fa-solid fa-globe">        search</i></div>
            <div className='icons' style={{position:'relative',top:'10px',left:'35px',display:'inline',padding:'8px'}}><i class="fa-solid fa-fire-flame-simple">       Reason</i></div>
             
          </div>
          </div>
          <ul>
            <li><a href='www.google.com'>sssssssss</a></li>
            <li><a href='www.google.com'>sssssssssss</a></li>
            <li><a href='www.google.com'>sssssssss</a></li>            
            <li><a href='www.google.com'>sssssssssss</a></li>
            <li><a href='www.google.com'>ssssssss</a></li>            
            <li><a href='www.google.com'>sssss</a></li>
          </ul>   
        </div>
        <p style={{position:'relative',top:'320px',left:'400px',fontSize:'12px'}}>ChatGPT can make mistakes. Check important info.</p>
      </div>
      
      </div>
    </>
  );
}

export default App;
