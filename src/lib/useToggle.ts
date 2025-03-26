import {useEffect, useState} from 'react';

export const useToggle = () => {
  const [dataIndex, setDataIndex] = useState<1|0>(0)
  useEffect(()=>{
    const id = setInterval(()=>{
      setDataIndex((prevIndex) => {
        return prevIndex > 0 ? 0: 1
      })
    } , 3000)
    return () => {clearInterval(id)}
  }, [])
  return dataIndex
}