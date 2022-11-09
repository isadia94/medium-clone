import { FC } from "react";

export interface HeaderProps {
  title: string;
  headline: string;
  cta: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { title, headline, cta } = props;
  return (
    <div className="px-4 pt-28 border-b-[0.5px] md:px-12 border-black pb-28 bg-amber-400">
      <h1 className=" text-7xl md:text-8xl leading-tight title">{title}</h1>
      <h3 className="my-8 text-2xl md:max-w-[500px]">{headline}</h3>
      <button className="bg-black px-4 py-3 rounded-full text-white flex items-center w-52 justify-center text-lg">
        {cta}
      </button>
    </div>
  );
};

export default Header;
