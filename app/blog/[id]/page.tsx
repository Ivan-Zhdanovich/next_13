import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });                   
    return response.json();
}

type Props = {
    params: {
        id: string,
    }
}

export async function generateMetadata({
    params: {id},
 }: Props): Promise<Metadata> {
    return {
        title: id,
    };
}

export default async function Post({params: {id} }: Props) {
    const post = await getData(id)
    return (
      <>
        <h1 className="text-center text-2xl font-bold">{post.title}</h1>
        <p className="p-5">{post.body}</p>
      </>
    );   
}