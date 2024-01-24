import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import { colorTheme } from "@/styles/colors";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageContainer>
      <Header/>
      <Main/>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colorTheme.background};
  color: black;
  display: flex;
gap: 12px;
`