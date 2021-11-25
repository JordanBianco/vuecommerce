import api from '@/apis/weather'

const api_key = process.env.VUE_APP_WEATHER_API_KEY

export const getWeatherData = async ({commit}, {lat, lon}) => {
    try {
        const res = await api.get(
            '/weather?lat=' + lat 
            + '&lon=' + lon
            + '&appid=' + api_key
            + '&units=metric&lang=it'
        )
        commit('SET_WEATHER', res.data)
    } catch (error) {
        console.log(error)
    }
}