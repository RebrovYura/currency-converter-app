

// async function CurrencyConvert(props) {
//     await fetch(`https://v6.exchangerate-api.com/v6/${_apiKey}/pair/${props.selectFirstValue}/${props.selectSecondValue}/${props.value}`)
//             .then(response => response.json())
//             .then(json => props.setInputResultValue(json.conversion_result))
// }

// export default CurrencyConvert

class CurrencyConvert {
    // constructor() {
    //     this.selectFirstValue = selectFirstValue
    //     this.selectSecondValue = selectSecondValue
    //     this.value = value
    // }

    _apiKey = '1bea0341d31c1c930feca829'
    _apiBase = 'https://v6.exchangerate-api.com/v6/'

    getRecources = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    getCurrencyPair = async (selectFirstValue, selectSecondValue, inputValue) => {
        const res = await this.getRecources(`${this._apiBase}${this._apiKey}/pair/${selectFirstValue}/${selectSecondValue}/${inputValue}`)
        return res.conversion_result
        // return console.log(res.conversion_result)
    }
}

export default CurrencyConvert