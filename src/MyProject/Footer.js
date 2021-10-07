import React from 'react'

export default function Footer() {

let FooterStyle ={
position:"relative",
width:"100%"

}

    return (
        <div>

   <footer className="bg-dark text-light my-3" style={FooterStyle}> 
       <p className="text-center">
        Copyright &copy; MyProject.com
       </p>
   </footer>
           
        </div>
    )
}
