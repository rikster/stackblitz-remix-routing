import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({params}: LoaderArgs) {
  const { slug } = params
  return json({slug})
}

export default function PostRoute(): JSX.Element {
  const { slug } = useLoaderData<typeof loader>()
  return <h2>Post {slug}</h2>;
}
