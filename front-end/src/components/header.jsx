export default function Header() {
  return (
    <>
      <div className="bg-white h-74 pl-18 pr-18 font-bold border-(--color-blue) border-b-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-logo text-2xl text-shadow-logo">Simple</div>
        <div className="flex items-end">
          <div className="text-base text-menu font-bold ml-14">stories</div>
          <div className="text-base text-menu font-bold ml-22">topics</div>
          <div className="text-base text-menu font-bold ml-22">me</div>
        </div>
      </div>

      <div className="h-74 pl-18 pr-18 font-bold border-(--color-blue) border-b-2 flex justify-between items-center z-50"></div>
    </>
  );
}
