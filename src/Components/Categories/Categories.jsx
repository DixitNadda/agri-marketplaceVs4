import React from 'react'
import './Categories.css'

const Categories = (categoriesObj) => {
  return (
    <>
    <div id="categories">
        <a class="link" href={categoriesObj.crops}>
          <h4>Crops</h4>
        </a>
        <a class="link" href={categoriesObj.seeds}>
          <h4>Seeds</h4>
        </a>
        <a class="link" href={categoriesObj.pesticides}>
          <h4>Pesticides</h4>
        </a>
        <a class="link" href={categoriesObj.fertilizers}>
          <h4>Fertilizers</h4>
        </a>
    </div>
    {/* <hr /> */}
    <div id="rulerM"></div>
    </>
  )
}

export default Categories