import { useEffect, useState } from "react";
import client from "../../client";

const Post = (props: {result: any}) => {

  const [data, setData] = useState<any[]>()

  // console.log(props.result);
    // setData(props.result);
    return (
      <div>
        {
          props.result?.map((res: any, index: number) => {
            return (
              <div key={res._id}>
                <h1>{res.title}</h1>
              </div>
            )
          })

        }  
      </div>

    )

  // return (
  //   <article>
  //     <h1>dasdasdad</h1>
  //     {/* <h1>{props.result.title}</h1> */}
  //     {/* <h1>{visibility}</h1> */}
  //   </article>
  // )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "landing-page" && defined(slug.current)][].slug.current`
  )  

  return {
    paths: paths.map((slug:string) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  
  // const post = await client.fetch(`*[_type == "landing-page" && slug.current == ${slug}][0]`, { slug })
  //[0]

  const result = await client.fetch(`*[_type == "landing-page"]`)
  
  return {
    props: {
      result: result
    }
  }
}

export default Post