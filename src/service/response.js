class CurrencyConverter {
    _apiKey = '1bea0341d31c1c930feca829'
    _apiBase = 'https://v6.exchangerate-api.com/v6/'

    getRecources = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }
    
    getPairConversion = async () => {
        const res = await this.getRecources(`${this._apiBase}`)
    }

    getConversionRate = () => {

    }
}

export default CurrencyConverter