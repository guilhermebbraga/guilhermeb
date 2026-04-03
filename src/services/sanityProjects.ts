import { client } from "../lib/sanity";

export default class ProjectService {

async getAllProjects(){
    const query = `*[_type == "project"]{
    name,
    date,
    stack,
    "coverImage": coverImage.asset->url,
    repository,
    description,
    tags,
    "slug": slug.current,
  }`

  try {

    const data = await client.fetch(query, {}, {
        next: {
            tags: ['projects']
        }
    })
    
    return data
    
  } catch (err) {
    console.log(err)
  }
}
    
  async getProjectBySlug(slug: string) {
    const query = `*[_type == "project" && slug.current == $slug][0]{
    name,
    date,
    stack,
    "coverImage": coverImage.asset->url,
    "galery": galery[].asset->url,
    repository,
    demo,
    description,
    tags,
    "slug": slug.current,
    details
  }`;

    try {
      const data = await client.fetch(
        query,
        {slug},
        {
          next: { tags: ["projects"] },
        },
      );

      console.log('Data: ', data)

      return data;
    } catch (err) {
      console.log(err);
      return
    }
  }
}
