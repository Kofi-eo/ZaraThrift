import sanityClient from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

export const Client = sanityClient({
  projectId: "ikaw9525",
  dataset: "production",
  apiVersion: "2022-06-02",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imgUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);
