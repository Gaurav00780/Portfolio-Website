import React from 'react'
import AutoZoomAnimation from '@/components/AutoZoom';

type FeatureCardProps = {
    svg?: React.ReactNode;
    title: string;
    description: string;
};

const FeatureCard = ({
    svg,
    title,
    description,
}: FeatureCardProps) => {
    return (
        <div className="bg-[#171717] w-[600px] rounded-lg p-6 flex flex-col gap-4">
            <div className="h-75 flex items-center justify-center overflow-hidden">
                {svg}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-semibold font-syne">
                    {title}
                </p>

                <p className="text-[#828282] text-lg font-sans">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <FeatureCard svg={<AutoZoomAnimation />} title='AI Powered Auto-Zooms' description='AI automatically zooms into key actions, highlighting exactly what viewers need to see.' />
        </div>
    )
}

export default FeaturesSection