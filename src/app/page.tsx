import PressureDifferenceChart from "@/components/PressureDifferenceChart";
import Title from "@/components/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GET, WeatherResponse } from "./api/weather/route";

export default async function Index() {
  const weatherData = await GET();
  const json = await weatherData.json() as WeatherResponse[];
  return (
    <main className="bg-white text-black antialiased">
      <div className="container pt-6">
        <Title />
        <div className="pt-6 pb-6">
          <Card>
            <CardHeader>
              <CardTitle>Bora forecast for the next 10 days</CardTitle>
              <CardDescription>
                See the air pressure difference between Trieste and Maribor for
                the next 10 days in our diagram. When the difference is more
                than -4 hPa, there is a chance of Bora winds. Simple and clear,
                this helps you know when Bora might happen.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[50vh]">
              <PressureDifferenceChart data={json} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
