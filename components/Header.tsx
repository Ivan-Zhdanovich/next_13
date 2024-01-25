import Link from "next/link"

const Header = () => {
    return (
        <header>
            <Link href="/" className="m-5">Home</Link>
            <Link href="/blog" className="m-5">Blog</Link>
            <Link href="/about" className="m-5">About</Link>
        </header>
    )
}

export {Header}