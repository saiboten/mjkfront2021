import * as React from "react";
import { useRouter } from "next/router";
import { Container } from "../../components/Container";
import Link from "next/link";

const Luke = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Link href="/">Tilbake</Link>
      <p>Post: {id}</p>
    </Container>
  );
};

export default Luke;
