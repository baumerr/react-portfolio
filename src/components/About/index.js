import React from 'react';
import Me from '../../assets/Me.jpeg'

function About () {
    return (
        <section>
            <div className='about row'>
                <div className='col'>
                    <p className='aboutText'>
                        My name is Randal Baumer, and I am a Junior Web Developer. I began my journey with programming when I was 15. 
                        I was developing simple Java games in high school. I fell in love with the logical nature of coding. 
                        However, after high school, I knew I wanted to explore my passion for acting. While I continued to pursue acting, 
                        I had the urge to revisit and explore coding. I found myself going back to learn how technology works on a 
                        fundamental level and to create applications and web pages. 
                        <br></br><br></br>
                        Browser-based applications are the future. As our society spends more time online, we spend more time in the 
                        browser and less on dedicated applications. I believe with the rise of Web3 and blockchain-enabled sites, 
                        this trend will only continue to grow.
                        <br></br><br></br>
                        I love art and I love tech. I believe my ability to approach in both a logical and creative manner allows 
                        me address problems and solutions with a different perspective. I am keen to teach others and eager to be 
                        taught as the world is a dynamic place - especially in this field. 
                        <br></br><br></br>
                        Drop me a line if you want to talk crypto, film or coffee!
                        <br></br><br></br>
                        Cheers,
                        <br></br>
                        Randal
                    </p>
                </div>
                <div className='col'>
                    <img src={Me} alt='Randal Baumer' width='100%' height='100%'></img>
                </div>

            

            
        </div>
        </section>
        
        
    )
}

export default About;