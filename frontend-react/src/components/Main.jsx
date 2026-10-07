import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-container text-center bg-light-dark'>
            <h1>PricePath</h1>
            <p className='lead'>PricePath is a smart stock prediction portal designed to help investors and traders anticipate market movements. By combining real-time data, technical indicators, and predictive models, PricePath maps possible future price paths for stocks — giving users clear, actionable insights to stay ahead of the market.</p>
         <Button text= 'Login' class='btn-info' />
          


        </div>
    </div>
    </>
  )
}

export default Main