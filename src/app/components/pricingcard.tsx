// components/PricingPage.tsx
import React from 'react';

interface Plan {
    title: string;
    price: string;
    period: string;
    features: string[];
    isPopular: boolean;
}

const plans: Plan[] = [
    {
        title: "Basic Panel",
        price: "$20",
        period: "Lifetime",
        features: [
            "Aimbot Ai Head",
            "Chams Menu",
            "Full safe 100%",
            "Antibanned / Antiblacklist",
            "For Main Account"
        ],
        isPopular: false
    },
    {
        title: "External Panel",
        price: "$30",
        period: "Lifetime",
        features: [
            "Aimbot++ / Aimbot Ai",
            "Esp Line / Chams Menu",
            "Awm scope / Fast switch",
            "Antibanned / Antiblacklist",
            "For Mian Account"
        ],
        isPopular: true
    },
    {
        title: "Streamer Panel",
        price: "$50",
        period: "Lifetime",
        features: [
            "Aimbot++/Aimbot Ai Head / Aimbot Ai drag",
            "All types of Chams Locations",
            "Awm scope / Fast switch / M82b Switch",
            "Mobile Control Integration",
            "Full Safe and Secure for Main Account",
            
        ],
        isPopular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <h1 className="text-1xl font-semibold text-center text-gray-500 mb-8">Choose a plan that suits your gaming needs</h1>
            <div className="flex flex-wrap justify-center">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-6 mx-4 my-6 text-center bg-white rounded-lg shadow-lg border ${
                            plan.isPopular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                    >
                        <h3 className="text-2xl font-bold text-blue-800">{plan.title}</h3>
                        <h2 className="mt-4 text-4xl font-bold text-gray-900">{plan.price}</h2>
                        <p className="text-gray-600">{plan.period}</p>
                        <ul className="mt-6 space-y-2 text-gray-700">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <button
                            className={`mt-8 px-6 py-3 font-semibold text-white rounded-lg ${
                                plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700' 
                            }`}
                        >
                            CHOOSE PLAN
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}