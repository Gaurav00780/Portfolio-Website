import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col py-10 '>
            <Experience
                logo="experience/digisamaksh_logo.png"
                company="Digisamaksh"
                role="IT Intern"
                duration="JULY 2025 - SEPTEMBER 2025"
                points={[
                    "Built and customized WordPress websites using Elementor, WooCommerce, and Astra Theme, delivering responsive and visually engaging user experiences.",
                    "Worked closely with the development team to optimize website performance, manage plugins, enhance SEO, and maintain scalable, high-quality web solutions."
                ]}
                //rounded='top'
                skills={["WordPress", "Elementor", "WooCommerce", "Astra Theme", "HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO", "Website Optimization", "cPanel", "Website Migration"]}
            />
        </div>
    )
}

export default ExperienceSection
