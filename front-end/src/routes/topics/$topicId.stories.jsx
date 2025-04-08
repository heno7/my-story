import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import TopicsAPI from '../../apis/topics';
import Story from '../../components/story';
import Breadcum from '../../components/breadcum';

export const Route = createFileRoute('/topics/$topicId/stories')({
  component: TopicStories,
});

function TopicStories() {
  const { topicId } = Route.useParams();
  const query = useQuery({
    queryKey: ['topics', topicId],
    queryFn: () => TopicsAPI.getAllStories(topicId),
  });

  console.log(topicId);

  return (
    <>
      <Link to={'/topics'}>
        <Breadcum
          location={'← topics'}
          addtionTitle={query?.data?.[0]?.topic}
        ></Breadcum>
      </Link>

      <ul>
        {query.data?.map((story) => (
          <Link
            key={story.id}
            to={'/topics/$topicId/stories/$storyId'}
            params={{
              topicId: topicId,
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
