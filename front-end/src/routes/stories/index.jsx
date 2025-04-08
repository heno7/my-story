import { createFileRoute, Link } from '@tanstack/react-router';

import { useQuery } from '@tanstack/react-query';
import StoriesAPI from '../../apis/stories';
import Story from '../../components/story';
import Breadcum from '../../components/breadcum';

export const Route = createFileRoute('/stories/')({
  component: Stories,
});

function Stories() {
  const query = useQuery({ queryKey: ['stories'], queryFn: StoriesAPI.getAll });

  return (
    <>
      <Breadcum location={'stories'}></Breadcum>
      <ul>
        {query.data?.map((story) => (
          <Link
            key={story.id}
            to={'/stories/$storyId'}
            params={{
              storyId: story.id,
            }}
          >
            <Story story={story} />
          </Link>
        ))}
      </ul>
    </>
  );
}
