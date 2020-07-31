import Link from "next/link";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <p>This is a Next.js practice site</p>
        </div>
    );
};

export default About;
