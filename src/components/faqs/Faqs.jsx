import React from 'react'
import faqData from "../../content/faq.json"
import Faq from './Faq'
import Subscribe from '../subscribe'

const Faqs = () => {
  return (
 	<div className='my-24'>
      <h1 className='my-6 text-center text-3xl font-semibold sm:text-5xl'>
				Frequently Asked Questions
			</h1>
      {faqData.map(faq=>
        <Faq key={faq.id} {...faq}/>
      )}
    	<div className='mt-10'>
				<Subscribe />
			</div>
    </div>
  )
}

export default Faqs