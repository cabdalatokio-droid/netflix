import React from 'react'
import faqData from "../../content/faq.json"
import Faq from './Faq'

const Faqs = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqData.map(faq=>
        <Faq key={faq.id} {...faq}/>
      )}
    </div>
  )
}

export default Faqs