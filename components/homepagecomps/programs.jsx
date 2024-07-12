import { DestinationCard } from "../dynamicComps/destinationCards";
import PageTitle from "../pageTitle";
import { countries } from "@/lib/countrydetails";

export default function Programs() {
  return (
    <main>
      <PageTitle
        text=" Our Top Study Destinations and Programs"
        className="flex flex-col items-center justify-center"
      />
      <div>
        <h2 className="flex flex-col items-center justify-center w-[90%] mx-auto">
          Explore your dream destination
        </h2>
        <p className="flex flex-col items-center justify-center w-[90%] mx-auto">
          explore our top study abroad destinations and find the perfect fit for
          your academic and cultural goals
        </p>
        <div className="flex flex-row items-start justify-between">
          {countries.map((country, ind) => (
            <DestinationCard
              key={ind}
              name={country.name}
              flagUrl={country.flagUrl}
              backgroundUrl={country.backgroundUrl}
              studyCost={country.studyCost}
              livingCost={country.livingCost}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
