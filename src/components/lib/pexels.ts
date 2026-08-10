import axios from "axios";



export const searchImages = async (query: string) => {
    const res = await axios.get("https://api.pexels.com/v1/search",
        {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_PEXELS_KEY as string
            },
            params: {
                query,
                per_page: 20
            }
        }

    )
    
    return res.data.photos
    
}


// export const searchImages = async (query: string) => {
//   const res = await axios.get("https://api.pexels.com/v1/search", {
//     headers: {
//       Authorization: process.env.NEXT_PUBLIC_PEXELS_KEY as string,
//     },
//     params: {
//       query,
//       per_page: 12,
//     },
//   });
//   return res.data.photos;
// };
