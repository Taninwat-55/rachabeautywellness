import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { isChristmasPromoActive } from '../utils/promoUtils';

function ChristmasBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isChristmasPromoActive());
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-red-800 text-white px-4 py-3 relative shadow-md z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🎄</span>
                    <div>
                        <p className="font-lora font-bold text-lg">
                            Jule-tilbud: Spar 10% på alle behandlinger!
                        </p>
                        <p className="text-sm font-roboto text-red-100">
                            Gælder fra 15. dec til 15. jan. Book din tid i dag.
                        </p>
                    </div>
                </div>
                <a
                    href="/kontakt"
                    className="bg-white text-red-800 px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors duration-200"
                >
                    Book Nu
                </a>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-2 p-1 hover:bg-red-700 rounded-full transition-colors"
                aria-label="Luk"
            >
                <X size={20} />
            </button>
        </div>
    );
}

export default ChristmasBanner;