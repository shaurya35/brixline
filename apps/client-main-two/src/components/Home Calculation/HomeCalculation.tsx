import React from 'react'
import { Button, Description, Title } from '../Tag'

const HomeCalculation = () => {
  return (
    <section className='bg-[#F55252] text-center py-16 flex flex-col gap-12 items-center'>
        <Title className='text-white'>
            Home Construction Cost <br/>Calculator
        </Title>
        <Description className='text-white'>
        Your Perfect Home, Designed & Built for You. <br/>Hassle-free, On-Time, and Within Budget.
        </Description>
        <Button className='text-white border-white w-[320px]'>
        CALCULATE NOW
        </Button>
    </section>
  )
}

export default HomeCalculation