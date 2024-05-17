import React, { useState } from 'react'
import { questions } from './Data/faqQuestion'

export default function Faqs() {
    let [currectId, setCurrectId] = useState(questions[0].id);
    let items = questions.map((itemData, i) => {
        let itemDetails = {
            itemData,
            currectId,
            setCurrectId
        }
        return (

            <FaqItems itemDetails={itemDetails} key={i} />
        )
    })
    return (
        <div>
            <h1>Frequently Asked Questions (FAQs)</h1>
            <div className='faqouter'>

                {items}
            </div>
        </div>
    )
}

function FaqItems({ itemDetails }) {
    let { itemData, currectId, setCurrectId } = itemDetails;
    return (
        <div className='faqitems'>
            <h2 onClick={() => setCurrectId(itemData.id)}>{itemData.question}</h2>
            <p className={currectId === itemData.id ? 'activeAns' : ''}>{itemData.answer}</p>
        </div>
    )
}