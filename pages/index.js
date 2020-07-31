import Link from "next/link";

const Index = () => {
    return (
        <div>
            <h1>SSR Magician</h1>
            <Link href="./about">
                <a>About</a>
            </Link>
        </div>
    );
};

export default Index;
