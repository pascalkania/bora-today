import axios from "axios";
import { NextResponse } from "next/server";

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Cloud {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Rain {
  "3h": number;
}

export interface Sy {
  pod: string;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Cloud;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sy;
  dt_txt: string;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export async function GET(
): Promise<NextResponse<WeatherResponse[]>> {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const triestLat = 45.6496485;
  const triestLon = 13.7772781;
  const triestUri = `https://api.openweathermap.org/data/2.5/forecast?lat=${triestLat}&lon=${triestLon}&appid=${apiKey}&units=metric`;

  const mariborLat = 46.5547;
  const mariborLon = 15.6467;
  const mariborUri = `https://api.openweathermap.org/data/2.5/forecast?lat=${mariborLat}&lon=${mariborLon}&appid=${apiKey}&units=metric`;
  try {
    const triestResponse = await axios.get<WeatherResponse>(triestUri);
    const mariborResponse = await axios.get<WeatherResponse>(mariborUri);
    return NextResponse.json([triestResponse.data, mariborResponse.data]);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw new Error("An error occurred while fetching the weather data.");
  }
}
