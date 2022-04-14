import React from 'react'

//About
//return text which briefly describes the project and the members of the team
function About() {
  return (
    <div className='about'>
       <p style={{display: 'inline-block', alignItems: 'center', verticalAlign: 'middle', textAlign:"center"}}>
         <h1>Meet The Team! <br/><br/></h1>
         This site was developed by a team of Trinity students. <br/> We learned new coding languages in order to develop the site
         for TCD Adapt as part of our Software Engineering Project I module. We are: <br/><br/>
        <span>3rd Years: <br/> -Matteo McGuinness (Backend Manager) <br/> -Jamie McEvoy (Backend Manager) <br/> 
       -Aaron Readman (Frontend Manager) <br/></span><br/>
       <span>2nd Years:<br/> -Jason Wood (Frontend Team) <br/> -Cianna MacMahon (Frontend Team) <br/> -Paddi Hua (Backend Team) <br/>
       -Mark Healy (Backend Team)</span>
       </p>
       <hr/>
    </div>
  );
}

export default About;