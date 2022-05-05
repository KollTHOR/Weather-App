export interface WeatherTileData {
    id: number
    cityName: string
}

export interface IWeatherData {
    id: number
    name: string
    main: IMain
}

export interface IMain {
    temp: number
}