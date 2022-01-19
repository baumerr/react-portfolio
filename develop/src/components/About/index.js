import React from 'react';
import Me from '../../assets/Me.jpeg'

function About () {
    return (
        <section>
            <div className='about'>
            <p>
                My name is Randal Baumer and I am a Junior Web Developer. I first began my journey with programming when
                I was 15, developing small Java games in high school. It was there that I really fell in love with the "logical"
                nature of coding. After highschool however I decided to follow my dreams to be an actor. Now 7 years after I
                left high school, I found myself wanting to go back and learn how to create applications, how to create webpages,
                how technology actually works from a fundamental level. 
                <br></br><br></br>
                Browser based applications are the future. As our society spends more of our time online, we spend more of our
                time actually in the browser as opposed to dedicated applications. And with the rise of web3 and blockchain enabled
                websites, this trend will only continue to grow.
                <br></br><br></br>
                I love art, I love tech. I am an extremely creative person who looks at problems from a different lense. 
            </p>

            <img src={Me} alt='Randal Baumer' width='75%' height='75%'></img>
        </div>
        </section>
        
        
    )
}

export default About;