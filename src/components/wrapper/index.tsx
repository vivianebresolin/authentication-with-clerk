interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return(
    <div className="flex flex-1 flex-col justify-center items-center">
      {children}
    </div>
  )
}