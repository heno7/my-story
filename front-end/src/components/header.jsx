import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <>
      <div className="bg-white h-74 pl-18 pr-18 font-bold border-(--color-blue) border-b-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-logo text-2xl text-shadow-logo">Simple</div>
        <div className="flex items-end">
          <Link to={'/stories/'}>
            <div className="text-base text-menu font-bold ml-14">stories</div>
          </Link>
          <Link to={'/topics/'}>
            <div className="text-base text-menu font-bold ml-22">topics</div>
          </Link>
          <Link to={'/me/'}>
            <div className="text-base text-menu font-bold ml-22">me</div>
          </Link>
        </div>
      </div>

      <div className="h-74 pl-18 pr-18 font-bold border-(--color-blue) border-b-2 flex justify-between items-center z-50"></div>
    </>
  );
}
