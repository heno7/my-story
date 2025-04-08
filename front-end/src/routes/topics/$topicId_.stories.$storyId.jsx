import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import Breadcum from '../../components/breadcum';
import StoriesAPI from '../../apis/stories';
import DetailStory from '../../components/detail-story';

export const Route = createFileRoute('/topics/$topicId_/stories/$storyId')({
  component: TopicDetailStoryRoute,
});

function TopicDetailStoryRoute() {
  const { storyId, topicId } = Route.useParams();
  const query = useQuery({
    queryKey: ['stories', storyId],
    queryFn: () => StoriesAPI.getStory(storyId),
  });
  console.log(query.data, query?.data?.topic);
  return (
    <>
      <Link
        to={'/topics/$topicId/stories'}
        params={{
          topicId: topicId,
        }}
      >
        <Breadcum location={`← topics/${query?.data?.topic}`}></Breadcum>
      </Link>
      {query.isSuccess ? <DetailStory story={query.data}></DetailStory> : ''}
    </>
  );
}
