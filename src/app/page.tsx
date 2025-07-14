import TVGuideControl from "./fonts/generic/components/tvguidecontrol";

export default async function Home() {
  const FetchPortfolio: any = async () => {
    const results = await fetch(
      "https://cdn.contentful.com/spaces/fo9bdlqe9reg/environments/master/entries?access_token=n4z3E5Nr9-DUnwIH2SEiAWeQ6s7C-2eyTEvaCAZQ33g&content_type=tvGuideItems",
      { next: { revalidate: 1 } }
    );
    const portfolio = await results.json();

    const portfolioProjects = portfolio.items;

    console.log("LOOK HERE");
    console.log(portfolioProjects);

    const transformedAndSorted = portfolioProjects
      .map(
        (project: {
          fields: any;
          channel: number;
          channelName: string;
          title: string;
          role: string;
          description: string;
          videoUrl: string;
          imageUrl: string;
          bonusText: string;
          size: number;
          isRed: string;
          year: string;
        }) => ({
          ch: Number(project.fields.channel),
          channel: project.fields.channelName,
          title: project.fields.title,
          role: project.fields.role,
          description: project.fields.description,

          size: project.fields.size,
          ...(project.fields.videoUrl && { videoUrl: project.fields.videoUrl }),
          ...(project.fields.imageUrl && { imageUrl: project.fields.imageUrl }),
          ...(project.fields.bonusText && {
            bonusText: project.fields.bonusText,
          }),
          ...(project.fields.isRed === true && { color: "red" }),
          ...(project.fields.year && { year: project.fields.year }),
        })
      )
      .sort((a: { ch: number }, b: { ch: number }) => a.ch - b.ch);

    return transformedAndSorted;
  };

  const projects = await FetchPortfolio();

  console.log(projects);

  return (
    <div className="min-h-screen container mx-auto">
      <main className="bg-gradient-to-b from-blue-900 to-blue-700">
        <TVGuideControl data={projects} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
