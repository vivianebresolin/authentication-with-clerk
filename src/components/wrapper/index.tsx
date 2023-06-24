interface WrapperProps {
  children: React.ReactNode;
  css?: string;
}

export default function Wrapper({ children, css }: WrapperProps) {
  return(
    <div className={`flex flex-1 flex-col justify-center items-center ${css}`}>
      {children}
    </div>
  )
}