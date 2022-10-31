// backend call to get experiance data
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experiance } from "../../typings";

const query = groq`
    *[_type == "experiance"] {
      ...,
      technologies[]->,
    } 
`;

type Data = {
  experiances: Experiance[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiances: Experiance[] = await sanityClient.fetch(query);

  res.status(200).json({ experiances });
}
