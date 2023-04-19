import { Link } from '@remix-run/react';

export default function PostsRoute(): JSX.Element {
  return (
    <div>
      <Link to="/posts/dynamic_bit">post 1</Link>
    </div>
  );
}
