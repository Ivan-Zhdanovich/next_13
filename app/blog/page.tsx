import { Metadata } from "next";
import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        },
    });                   
    return response.json();
}

export const metadata: Metadata = {
    title: "Blog | Next App",
};
  

export default async function Blog() {
    const posts = await getData();
    return(
       <>
        <h1 className="text-center text-2xl font-bold">Blog page</h1>
        <ul className="p-10">
            {posts.map((post: any) => (
                <li key={posts.id} className="list-disc">
                    <Link href={`/blog/${post.id}`} className="text-center">{post.title}</Link>
                </li>
            ))}
        </ul>

       </>
    );
}