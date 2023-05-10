import  { api }  from '../../services/api'
import {  useState } from 'react'


const Advice = () => {

  const [advice, setAdvice] = useState()

  api
  .get('/advice')
  .then((response) => setAdvice(response.data))
  .catch((err) => {
    console.error('ops! Ocorreu um error' + err)
  })

  return (
    <div>
        <p>
            {advice.slip}
        </p>
    </div>
  )

}

export default Advice