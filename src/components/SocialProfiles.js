import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

//  these classes are eligible to be stateless functional components since they don't use the setState method

const SocialProfile = props => {
    const { link, image } = props.socialProfile;

    return(

            <a href={link} target="_blank"><img src={image} alt='social-profile' style={{width: 40, height: 40, margin: 10}}/></a>

    )
}

const SocialProfiles = props => (
    <div>
        <h2 className='text-[25px]'>Connect With Me!</h2>
        <div className='flex justify-center mt-8 mb-20'>
            {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
            })}
        </div>
    </div>
)

export default SocialProfiles;