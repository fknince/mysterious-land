import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | Mysterious Land</title>
        <meta name="description" content="Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src='https://terminal.jup.ag/main-v3.js' />
      </Head>
    </>
  );
};

export default PageHead;
