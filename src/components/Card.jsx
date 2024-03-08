import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { IoLockClosed } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({data,reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} 
      whileDrag={{scale:1.2}}
       dragElastic={0.2} 
       dragTransition={{bounceStiffness:100,bounceDamping:10}} 
       className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/70 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 bg-zinc-900 w-full left-0'>
            <div className="flex items-center justify-between px-8 py-3 mb-3">
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-green-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoLockClosed size='1em' color="#000"/>: <RiDownloadCloud2Fill size='1em' color="#000"/>}
                
                </span>
            </div>

            {data.tag.isOpen ? (
                <div className={`tag w-full py-4 bg-green-600  flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            ) : null }
            
        </div>
      </motion.div>
    </>
  )
}

export default Card