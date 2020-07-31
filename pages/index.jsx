import Link from "next/link";
import Image from "../components/Image";

const Index = () => {
    return (
        <div>
            <h1>SSR Magician</h1>
            <Image />
            <br />
            <Link href="./about">About</Link>
            <Link href="./robots">Robots</Link>
        </div>
    );
};

export default Index;
