import React from 'react'
import Cour from './Cour'
export default function Course() {
  return (
    <div className='course container '>
        <h6>OUR MAIN COURSES</h6>
        <h1>Popular Topics To Learn</h1>
        <div className='d-flex flex-row flex-wrap'>
            <Cour url='../../src/assets/courseimg1.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url='../../src/assets/courseimg2.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/> 
            <Cour url='../../src/assets/courseimg3.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url='../../src/assets/courseimg4.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url='../../src/assets/courseimg4.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url='../../src/assets/courseimg4.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url='../../src/assets/courseimg4.jpg' name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
        </div>
    </div>
  )
}
