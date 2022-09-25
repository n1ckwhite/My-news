const API_KEY: "830c5ae5760b4d28958eecfc2266bc1d" =
  "830c5ae5760b4d28958eecfc2266bc1d";

export const endpointCountry = (country: string = "ru") => {
  return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
};

export const endpointCountryandCategory = (
  country: string = "ru",
  category: string
) => {
  return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
};
