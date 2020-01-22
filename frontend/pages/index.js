import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <p>Hey!</p>
      <Link href="/sell">
        <a>sell</a>
      </Link>
    </div>
  );
}
