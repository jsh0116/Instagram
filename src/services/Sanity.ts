import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN,
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   return await client.fetch('*[_type == "post"]');
// }

// export async function createPost(post: Post) {
//   return client.create(post);
// }
//
// export async function updateDocumentTitle(_id, title) {
//   return client.patch(_id).set({title});
// }

// export default class Sanity {
//   private client: SanityClient;
//   constructor() {
//     this.client = createClient({
//       projectId: process.env.SANITY_PROJECT_ID,
//       dataset: process.env.SANITY_DATASET,
//       useCdn: false, // set to `false` to bypass the edge cache
//       apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
//       token: process.env.SANITY_SECRET_TOKEN,
//     });
//   }
//
//   // uses GROQ to query content: https://www.sanity.io/docs/groq
//   async getPosts() {
//     return await this.client.fetch('*[_type == "post"]');
//   }
//
//   async createPost(post: Post) {
//     return this.client.create(post);
//   }
//
//   async updateDocumentTitle(_id, title: string) {
//     return this.client.patch(_id).set({title});
//   }
// };
