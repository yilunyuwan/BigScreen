import React, {useEffect, useState} from 'react';

export const FansMeeting: React.FC = () => {
  const initialCount = [19, 95, 31]
  const [signCount, setSignCount] = useState(initialCount[0])
  const [chatCount, setChatCount] = useState(initialCount[1])
  const [photoCount, setPhotoCount] = useState(initialCount[2])
  useEffect(()=>{
    const id = setInterval(()=>{
      setSignCount((prevState)=>{
        return prevState > 0 ? prevState - 1 : initialCount[0]
      })
      setChatCount((prevState)=>{
        return prevState > 0 ? prevState - 1 : initialCount[1]
      })
      setPhotoCount((prevState)=>{
        return prevState > 0 ? prevState - 1 : initialCount[2]
      })
    }, 2000)

    return ()=>{clearInterval(id)}
  } ,[])
  return (
    <div className="bordered displayBlock 握手会">
      <h2>握手会实时队列</h2>
      <div className="infoWrapper">
        <div className="签名">
          <div className="count">{signCount}</div>
          <h3>签名人数</h3>
        </div>
        <div className="握手">
          <div className="count">{chatCount}</div>
          <h3>握手人数</h3>
        </div>
        <div className="合影">
          <div className="count">{photoCount}</div>
          <h3>合影人数</h3>
        </div>
      </div>
    </div>
  )
}