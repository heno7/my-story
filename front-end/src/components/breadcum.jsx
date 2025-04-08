export default function Breadcum({ location, addtionTitle }) {
  return (
    <>
      <div className="bg-white w-full not-only:text-base text-menu font-bold p-20 fixed top-74 flex justify-between">
        {location}
        {addtionTitle ? <div>{addtionTitle}</div> : null}
      </div>
      <div className=" bg-white h-10 text-menu font-bold pt-25 pb-20"></div>
    </>
  );
}
