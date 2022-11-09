import React from 'react'
import logo from '../../src/logo.svg'

export default function Header(props) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-2 col-sm-12'> <img src={logo} alt={props.logo_text} /></div>
            <div className='col-lg-10 col-sm-12'><h1>{props.logo_text}</h1></div>
        </div>
    </div>
  )
}



