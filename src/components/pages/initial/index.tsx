import Wrapper from "../../wrapper";

export default function Initial() {
  return (
    <Wrapper>
      <h1>Public page</h1>
      <a href="/home">Go to protected page</a>
    </Wrapper>
  );
}