import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 5px;
          background-color: rgba(170, 0, 0, 1);
          color: #b3995d;
          transition: background-color 0.3s ease;
          padding: 0.2em 0.5em;
        }
        a:active,
        a:hover {
          background-color: rgba(170, 0, 0, 0.4);
        }
      `}</style>
    </>
  );
}
