import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.button<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  color: white;
  width: 200px;
  height: 200px;
  background-color: ${(props) => (props.open ? "red" : "blue")};
  cursor: pointer;
`;

interface Props {
  children: string;
  open?: boolean;
}

export function Luke({ children, open }: Props) {
  return (
    <Link passHref href={`/luke/${children}`}>
      <Wrapper open={open ?? false}>{children}</Wrapper>
    </Link>
  );
}
