import AppParagraph from "../../../../appParagraph";

interface CardProps {
  text: string;
}

function Card({text}: CardProps) {
  return ( 
    <div className="bg-white rounded-md shadow py-4 px-2">
      <AppParagraph>{text}</AppParagraph>
    </div>
  );
}

export default Card;