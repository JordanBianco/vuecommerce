<template>
    <section class="shadow bg-white rounded-lg p-4 flex justify-center items-center h-52">
        <div>
            <div v-if="current.length != 0">

                <div class="space-x-2 text-center">
                    <span class="font-semibold text-gray-600 uppercase">{{ $moment(current.dt * 1000).format('dddd').substring(0, 3) }},</span>
                    <span class="text-sm text-gray-400">{{ $moment(current.dt * 1000).format('DD MMMM YYYY') }}</span>
                </div>

                <div class="text-4xl text-c-dark-gray text-center pt-6 pb-3">
                    {{ time }}
                </div>

                <div class="flex items-center space-x-2 justify-center">
                    <!-- Icon -->
                    <div>
                        <img
                            :src="'http://openweathermap.org/img/wn/' + current.weather[0].icon + '@2x.png'"
                            :alt="current.weather[0].description"
                            class="flex-none w-16 h-16">
                    </div>

                    <div class="flex items-center space-x-2">
                        <span class="text-2xl font-thin">{{ Math.round(current.main.temp) }}<sup class="text-lg">°</sup></span>
                        <span class="block text-gray-400">{{ current.name }}</span>
                    </div>
                </div>
            </div>

            <div v-else class="text-center">
                <div class="text-4xl text-c-dark-gray">
                    {{ $moment().format('HH:mm') }}
                </div>
                <p class="text-gray-400 text-sm mt-8">{{ $t('weather_geo') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Dashboard.WeatherWidget',
    mounted() {
        this.getCurrentPosition();
        this.date();
    },
    data() {
        return {
            lat: '',
            lon: '',
            time: ''
        }
    },
    computed: {
        current() {
            return this.$store.state.weather.current
        },
    },
    methods: {
        getCurrentPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition)
            } else { 
                alert("Geolocation is not supported by this browser.")
            }
        },
        showPosition(position) {
            this.lat = position.coords.latitude
            this.lon = position.coords.longitude
            this.getWeatherData();
        },
        getWeatherData() {
            this.$store.dispatch('weather/getWeatherData', {
                lat: this.lat,
                lon: this.lon,
            })
        },
        date() {
            setInterval(() => {
                this.time = this.$moment().format('HH:mm')
            }, 1000);
        },
    }
}
</script>