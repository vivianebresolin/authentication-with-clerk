import AppParagraph from "../../../../AppParagraph";

interface CardProps {
  text: string;
  css?: string;
}

function Card({text, css}: CardProps) {
  return ( 
    <div className={`border-solid border-2 border-[#03045E] bg-white bg-opacity-80 rounded-md shadow-lg py-4 px-2 md:px-6 flex-1 md:flex md:items-center md:h-48 ${css}`}>
      <AppParagraph otherCss="sm:text-lg">{text}</AppParagraph>
    </div>
  );
}

export default Card;