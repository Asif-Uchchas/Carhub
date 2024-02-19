import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
		
        'X-Api-Key': 'wxj6WPagD+zb+R6HuTRNCQ==1ZXtyE17YobKPYpH'
    }

    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=q3', { headers: headers });
    const result = await response.json();
    
    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;
    
    url.searchParams.append("customer", 'hrjavascript-mastery');
    url.searchParams.append("make", make);  
    url.searchParams.append("modelfmily", model.split(' ')[0]);
    url.searchParams.append("ZoomType", 'fullscreen');
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };