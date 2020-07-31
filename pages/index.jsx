import Link from "next/link";
import Image from "../components/Image";

const Index = () => {
    return (
        <div>
            <h1>SSR Magician</h1>
            <Image />
            <br />
            <Link href="./about">
                <a>About</a>
            </Link>
        </div>
    );
};

export default Index;
