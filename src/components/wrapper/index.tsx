interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return(
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  )
}