import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import TopicsAPI from '../../apis/topics';
import Breadcum from '../../components/breadcum';
import Topic from '../../components/topic';

export const Route = createFileRoute('/topics/')({
  component: Topics,
});

function Topics() {
  const query = useQuery({ queryKey: ['topics'], queryFn: TopicsAPI.getAll });

  return (
    <>
      <Breadcum location={'topics'}></Breadcum>
      <ul>
        {query.data?.map((topic) => (
          <Link
            key={topic.id}
            to={'/topics/$topicId/stories'}
            params={{
              topicId: topic.id,
            }}
          >
            <Topic topic={topic} />
          </Link>
        ))}
      </ul>
    </>
  );
}
