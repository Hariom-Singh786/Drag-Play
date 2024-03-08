import React, {useRef} from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Hi Harry 🙋‍♀️",
            filesize: "1.5mb",
            close:false,
            tag: {isOpen:true, tagTitle:"Download Now...", tagColor:"green"}
        },
        {
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... How are you 🤷‍♀️",
            filesize: "1.5mb",
            close:true,
            tag: {isOpen:false, tagTitle:"Download Now...", tagColor:"green"}
        },
        {
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Nice to see you 👩‍❤️‍💋‍👩",
            filesize: "1.5mb",
            close:false,
            tag: {isOpen:true, tagTitle:"Download Now...", tagColor:"green"}
        }
    ];
  return (
     <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}

     </div>
  )
}

export default Foreground