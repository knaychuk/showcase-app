export async function fetchCars() {
		const headers = {
        'X-RapidAPI-Key': '59df2c6d4fmsh00f279fccc7fee5p15be1cjsn712e91cbaf90',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result
}