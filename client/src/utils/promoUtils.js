export const isChristmasPromoActive = () => {
    const today = new Date();

    // Note: Months are 0-indexed (11 = December, 0 = January)
    const startDate = new Date('2025-12-15T00:00:00');
    const endDate = new Date('2026-01-15T23:59:59');

    // FOR TESTING: Uncomment the line below to see the discount NOW
    // return true; 

    return today >= startDate && today <= endDate;
};

export const calculateDiscountPrice = (priceString) => {
    // Extract number from "650 DKK"
    const price = parseInt(priceString.replace(/[^0-9]/g, ''), 10);

    if (isNaN(price)) return priceString; // Fallback if format is weird

    // Calculate 10% off
    const discounted = Math.round(price * 0.9);

    return `${discounted} DKK`;
};