interface AppParagraphProps {
  children: React.ReactNode;
  otherCss?: string;
}

export default function AppParagraph({children, otherCss}: AppParagraphProps) {
  return(
    <p className={`text-center ${otherCss}`}>{children}</p>
  )
}