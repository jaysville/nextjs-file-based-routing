import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/next-intro">Next JS Intro</Link>
        </li>
        <li>
          <Link href="news/next-vs-react">Next Js vs React</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
