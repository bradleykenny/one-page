interface Props {
  isSelected?: boolean;
  title: string;
}

const NavLink = (props: Props) => {
  const { isSelected, title } = props;

  const sharedStyles = "px-4 py-2 inline-block rounded-md mr-2 cursor-pointer";

  if (isSelected) {
    return (
      <p className={`${sharedStyles} bg-indigo-800 bg-opacity-90 text-white`}>
        {title}
      </p>
    );
  }

  return (
    <a
      className={`${sharedStyles} hover:bg-indigo-100 focus:bg-indigo-200 text-indigo-800`}
      href="#">
      {title}
    </a>
  );
};

export default NavLink;
