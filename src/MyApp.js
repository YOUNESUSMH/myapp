import { click } from '@testing-library/user-event/dist/click';
import myphoto from './images/560615273.jpg' 
import myphotos from './images/antalyya5.png' 
import "./MyApp.css"
import {useState,useEffect} from "react";

function MyApp() {
 const [searchName, setSearchName] = useState('');
 const [searchEmail, setSearchEmail] = useState('');
  
 const [editname, setEditname] = useState(null);
 const [editText, setEditText] = useState(''); 
 const [editEmail, setEditEmail] = useState(null);
 const [editText1, setEditText1] = useState(''); 

 const[emailError, setEmailError] = useState('');
 const[emailError1, setEmailError1] = useState('');

 const[text1,settext1] = useState('');
 const[text,settext] = useState('');
 const[texts,settexts] = useState(() => {
  return JSON.parse(localStorage.getItem('text2')) || [];
});
const[texts1,settexts1] = useState(() => {
  return JSON.parse(localStorage.getItem('text3')) || [];
});

const help1 = (e) => {
  settext1(e.target.value);
} 

const help = (e) => {
    settext(e.target.value);
} 

 function handleSubmit(e) {
  e.preventDefault();
  
  if (text.trim() !== '') {
    
    if(texts.some((name,i) => name === text)){
      setEmailError1('❌ هذاالاسم موجود بالفعل');
    
      setTimeout(() =>{
        setEmailError1('');
      },10000)
     
      settext('');

      return
    }
    const newTexts = [...texts, text];
    settexts(newTexts);
    localStorage.setItem('text2', JSON.stringify(newTexts));
  }
  if (text1.trim() !== '') {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(texts1.some((email,i) => email === text1)){
    setEmailError('❌ هذا البريد الإلكتروني موجود بالفعل');
    
    setTimeout(() => {
      setEmailError('');
    }, 10000);

    settext1('')

    return;
  }

   if (!emailRegex.test(text1)) {
    setEmailError('❌ يرجى إدخال بريد إلكتروني صحيح ');

    const errorSound = new Audio('/sounds/ssss.mp3');
    errorSound.play();

    setTimeout(() => {
      setEmailError('');
    }, 10000);

    return; // لا نكمل إذا كان خاطئ
  } else {
    setEmailError('');
    if (text1.trim() !== '') {
      const newTexts1 = [...texts1, text1];
      settexts1(newTexts1);
      localStorage.setItem('text3', JSON.stringify(newTexts1));
    }
  }
  
  }
  
  
  settext('');
  settext1('');
}

const deleteName = (indexToDelete) => {
  const updated = texts.filter((_, i) => i !== indexToDelete);
  settexts(updated);
  localStorage.setItem('text2', JSON.stringify(updated));
};

const deleteEmail = (indexToDelete) => {
  const updated = texts1.filter((_, i) => i !== indexToDelete);
  settexts1(updated);
  localStorage.setItem('text3', JSON.stringify(updated));
};

const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handindex = (index)=>{
  setEditname(index);
  setEditText(texts[index])
}

const handeditindex  = (e,index)=>{
  if(e.key === 'Enter'){ 
    if(texts.some((name,i) => name === editText)){
      setEmailError1('❌ هذاالاسم موجود بالفعل');
    
      setTimeout(() =>{
        setEmailError1('');
      },10000)
      
      setEditname(null)

      return
    }

    const updated = [...texts];
    updated[index] = editText;
    settexts(updated);
    localStorage.setItem('text2', JSON.stringify(updated));
    setEditname(null);
  }
}

const handindex1 = (index)=>{
  setEditEmail(index);
  setEditText1(texts1[index]);

}

const handeditindex1 = (e,index)=>{
  if(e.key === 'Enter'){

    if (texts1.some((email, i) => email === editText1)) {
      setEmailError('❌ هذا البريد الإلكتروني موجود بالفعل');
  
      setTimeout(() => {
        setEmailError('');
      }, 10000);

      setEditEmail(null);
      return;
    }

    const emailRegex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex1.test(editText1)){
      setEmailError('❌ يرجى إدخال بريد إلكتروني صحيح ');
      
      const errorSound = new Audio('/sounds/ssss.mp3');
      errorSound.play();

    setTimeout(() => {
      setEmailError('');
    }, 10000);
      setEditEmail(null);
      return;
    }else{
      setEmailError('');
      const updated1 = [...texts1]
      updated1[index] = editText1
      settexts1(updated1);
      localStorage.setItem('text3', JSON.stringify(updated1));
      setEditEmail(null);
    }
  }
    
}

 return(
   <>

   <ul className="navbar">
    <li><a href='#'>Home</a></li>
    <li><a href='#'>adrress</a></li>
    <li><a href='#p3'>information</a></li>
    <li className='dropdown'>
      <a href='#' className='a1'>contact us</a>
    <div className='drop'>
      <a href='#'>+213 0557 15 09 39</a>
      <a href='#Emailscrol'>Email</a>
      <a href='#صور'>gallery</a>
       </div>
    </li>
   </ul><br/>
   <div className='aonwan'>
    <p className='you' style={{fontSize:'30px'}}>Welcome to my personel website</p>
    <h5 className='you'>I'am younes and i like programing</h5>
    </div>
    <div className='whoami'>
      <p className='p2'>who am I ?</p>
      <p className='p1'>Web developer interested in learning languages ​​and designing websites</p>
    </div>
    <div id='صور' className='gallery'>
      <p style={{position:'relative',left:'600px',top:'10px',fontSize:'20px',fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>gallery</p>
      <div className='image'>
      <div className='image1'>
        <img className='img1' src={myphoto} style={{width:'300px',height:'300px',borderRadius:'20px'}}/>
        <img className='img2' src={myphotos}/>        
      </div>
      <div className='image1'>
      <img className='img1' src={myphoto} style={{width:'300px',height:'300px',borderRadius:'20px'}}/>
      <img className='img2' src={myphotos}/>  
      </div>
      <div className='image1'>
      <img className='img1' src={myphoto} style={{width:'300px',height:'300px',borderRadius:'20px'}}/>
      <img className='img2' src={myphotos}/>  
      </div>
      </div>
    </div>
    
    <div className='inputname'>
    <p className='p3' id='p3'>information</p>
    <form className='form1'  onSubmit={handleSubmit}>
    <div className='input1'>
    <label>NAME</label><br/>
    <input type='text' placeholder='   my NAME'  value={text} onChange={help} /><br/>
    {emailError1 && <p className='error-msg'>{emailError1}</p>}
    </div>
    <div className='input2'>
    <label>Email</label><br/>
    <input type='text' placeholder='   my Email' value={text1} onChange={help1} /><br/>
    {emailError && <p className='error-msg'>{emailError}</p>}
    </div>
    <div className='input3'>
    <label>contact</label><br/>
    <input type='text' placeholder='   my contact' /><br/>
    </div>
    <input className='submit' value={'Click'} type='submit' />
    </form>
    <div className='nachr'>
       <p style={{display:'flex',justifyContent:'center',position:'relative',top:'50px',right:'-10px'}}>حقوق النشر © 2024 جميع الحقوق محفوظة</p>
       <i style={{position:'relative',left:'430px',top:'17px'}} class="fa-brands fa-facebook"></i>
       <i style={{position:'relative',left:'450px',top:'17px'}} class="fa-brands fa-instagram"></i>
       <i style={{position:'relative',left:'470px',top:'17px'}} class="fa-brands fa-twitter"></i>
    </div>
    <div className='todo'>
    <input 
      type="text" 
      placeholder="🔍 ابحث عن اسم" 
      value={searchName} 
      onChange={(e) => setSearchName(e.target.value)} 
      style={{ padding: '8px', marginBottom: '10px',marginLeft:'270px', width: '200px',borderRadius:'10px'}}
  />
    <p className='fixed-title'>Name</p>
    {texts.map((item, index) => {
        if (!item.toLowerCase().includes(searchName.toLowerCase())) return null;
    return(
    <p className='item' key={index}  >
       {editname === index ? (<input className='plusinput' value={editText} type='text' onChange={(e) => setEditText(e.target.value)}  onKeyDown={(e)=>handeditindex(e,index)}/>) : (<span onClick={() => handindex(index)}>{item}</span>)}
      <button onClick={() => deleteName(index)}>❌</button>
      </p> // كل عنصر في سطر
    ); 
})}
    </div>

    <div id='Emailscrol' className='todo1'>
    <input 
      type="text" 
      placeholder="🔍 ابحث عن اسم" 
      value={searchEmail} 
      onChange={(e) => setSearchEmail(e.target.value)} 
      style={{ padding: '8px', marginBottom: '10px',marginLeft:'270px', width: '200px',borderRadius:'10px'}}
  />
    <p  className='fixed-title' >Email</p>
    {texts1.map((item1, index1) => {
  if (!item1.toLowerCase().includes(searchEmail.toLowerCase())) return null;

  return (
    <p className='item1' key={index1} >
      {editEmail === index1 ? (<input className='plusinput' value={editText1} type='text'  onKeyDown={(e) => handeditindex1(e,index1)} onChange={(e) => setEditText1(e.target.value)}/>) : (<span onClick={() => handindex1(index1)}>{item1}</span>)}
      <button onClick={() => deleteEmail(index1)}>❌</button>
    </p> // كل عنصر في سطر
  )  
})}
    </div>
    </div>
    {showScrollButton && (<button onClick={() =>  window.scrollTo({ top: 0, behavior: 'smooth' })} style={{position: 'fixed',bottom: '30px',right: '30px',padding: '10px 20px',fontSize: '16px',borderRadius: '8px',backgroundColor: '#333',color: 'white',border: 'none',cursor: 'pointer',zIndex: 1000}}>⬆️ للأعلى</button>)}
   </>
 )
}


export default MyApp;