import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MacCard from './MacCard';
import "../Scss/mobilecard.css";
import { getmac } from '../redux/macSlice';
import Titletwo from './Titletwo';


function MacList({ ping, setping, text }) {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getmac())
  }, [])
  
    const macs = useSelector((state) => state.mac?.macliste);

  return (
    <div>
      <Titletwo/>
        <div className='container-cards'>
      
      {macs
      // ?.
      // filter((el) => el?.name.toLowerCase().includes(text.toLowerCase()))
          ?.map((el) => <MacCard el={el} ping={ping} setping={setping} />)}
    </div>
    </div>
  )
}

export default MacList