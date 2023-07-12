import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to Promptopia!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI Powered Writing Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptia is an open-source AI prompting tool to share, discover and share writing prompts.
      </p>

      <Feed />

    </section>

  );
};

export default Home;
