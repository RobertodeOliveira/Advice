/* eslint-disable no-restricted-globals */
import axios from 'axios'
import { useEffect, useState } from 'react'

import * as S from './styles'


type AdviceData = {
  id: number;
  advice: string;
}

const Advice = () => {

  const [advice, setAdvice] = useState<AdviceData | null>(null)
  const [refresh, setrefresh] = useState(false) //Precisa começar com falso pq o estado inicial é não fazer o

  useEffect(() => {

    const getAdvice = async () => {

      try {
        const response = await axios.get('https://api.adviceslip.com/advice')
        const data = response.data

        setAdvice(data.slip)

      } catch (error) {
        console.log(error)
      }
    }

    getAdvice()

  }, [refresh])

  const handleRefresh = () => {
    setrefresh(!refresh)
  }

  return (
    <S.Container>
      {
        advice &&
        (<S.Wrapper>
          <S.NumberAdvice>ADVICE #{advice.id}</S.NumberAdvice>
          <S.TextAdvice>{advice.advice}</S.TextAdvice>
          <S.ImageDivider src="divider-desktop.svg" alt="" />
        </S.Wrapper>)
      }
      <S.Button onClick={handleRefresh}><img src="icon-dice.svg" alt="Botão de refresh" /></S.Button>
    </S.Container>
  )
}


export { Advice } 
