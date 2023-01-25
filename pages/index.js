import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Discover } from "../utils/data";
export default function Home() {
  const { data } = useSelector((state) => state);
  return (
    <>
    <meta http-equiv="refresh" content="0; url=https://avalynndev.github.io/psychic-octo-waddle/" />
    <Layout>
      <Container Popular={data} heading={"Recently Added"} Icon={Discover[1].icon} />
    </Layout>
    </>
  );
}
