import { createFileRoute, Link } from '@tanstack/react-router';
import Breadcum from '../../components/breadcum';
import { useQuery } from '@tanstack/react-query';
import StoriesAPI from '../../apis/stories';
import DetailStory from '../../components/detail-story';

export const Route = createFileRoute('/stories/$storyId')({
  component: DetailStoryRoute,
});

function DetailStoryRoute() {
  const { storyId } = Route.useParams();
  const query = useQuery({
    queryKey: ['stories', storyId],
    queryFn: () => StoriesAPI.getStory(storyId),
  });
  return (
    <>
      <Link to={'/stories'}>
        <Breadcum location={'← stories'}></Breadcum>
      </Link>
      {query.isSuccess ? <DetailStory story={query.data}></DetailStory> : ''}
    </>
  );
}
