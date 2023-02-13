import * as S from './styles'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Advice = () => {

  const [advice, setAdvice] = useState()

  const getAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      const data = response.data
      console.log(data)

      setAdvice(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getAdvice()
  },[])

  return (
    <S.Container>
      {advice.map((index: number) => 
        <div className='post' key={index}>
          <h1>{advice.slip.advice}</h1>
        </div> */}

      )}
      <S.Wrapper> 
        <S.Button />
        </S.Wrapper>
    </S.Container>
  )
}

export default Advice