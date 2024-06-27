import { json } from "@remix-run/node";

export async function loader() {
  return json(null, { status: 404 })
}

export default function Component() {
  return (
    <h1>Not Found</h1>
  )
}