// import React, {useState,useEffect} from 'react';

// function HookCounter(props) {
//     const [count, setCount] = useState(0)
//     const[name,setName]=   useState('')

//     useEffect(()=> {
//       console.log('useEffect -Updating document title') 
//       document.title =  `You clicked  ${count} times`  
//     })
//     return (
//         <div>
//         <input type="text" value={name} onChange={e=>setName(e.target.value)}/>  
//           <button onClick={()=> setCount(count+1)}> Count {count} </button>  
//         </div>
//     );
// }

// export default HookCounter;