import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { HomePage } from "../../typings";

const query = groq`
    *[_type == "homePage"][0]
`;

type Data = {
  homePage: HomePage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const homePage: HomePage = await sanityClient.fetch(query);

  res.status(200).json({ homePage });
}
