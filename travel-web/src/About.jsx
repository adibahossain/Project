import aPic from './assets/about.jpg'

function About(){

    return(

        <div className="aboutMe">
            <div className='aboutPic'>
                <img src= {aPic} alt="about"></img>
            </div>

            <p className="About">Hi, I’m Adiba, a budget-conscious student with a passion for traveling! 
                                I have travelled to about 30 cities and I’m constantly on the lookout for my next adventure
                                to rejuvenate my spirit, and I want to share these discoveries with you so you can experience the same joy.
                                
                                Through my travels, I’ve learned a great deal and I’m eager to share my insights with you, helping you enjoy 
                                the best parts of your journey while avoiding the pitfalls. Explore my blog to find inspiration for your next trip!
            </p> 
        </div>

    );


}

export default About 