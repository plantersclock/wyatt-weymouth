import TVGuideControl from "./generic/components/tvguidecontrol";
import {
  PortfolioProject,
  ContentfulProject,
  ContentfulResponse,
} from "../types/portfolio";

export default async function Home() {
  const FetchPortfolio = async (): Promise<PortfolioProject[]> => {
    try {
      const results = await fetch(
        "https://cdn.contentful.com/spaces/fo9bdlqe9reg/environments/master/entries?access_token=n4z3E5Nr9-DUnwIH2SEiAWeQ6s7C-2eyTEvaCAZQ33g&content_type=tvGuideItems",
        { next: { revalidate: 1 } }
      );

      if (!results.ok) {
        throw new Error(`Failed to fetch portfolio data: ${results.status}`);
      }

      const portfolio: ContentfulResponse = await results.json();

      if (!portfolio.items || portfolio.items.length === 0) {
        console.warn("No portfolio items found");
        return [];
      }

      const portfolioProjects = portfolio.items;

      const transformedAndSorted = portfolioProjects
        .map((project: ContentfulProject) => ({
          ch: Number(project.fields.channel),
          channel: project.fields.channelName,
          title: project.fields.title,
          role: project.fields.role,
          description: project.fields.description,

          size: project.fields.size as 1 | 2 | 3,
          ...(project.fields.videoUrl && { videoUrl: project.fields.videoUrl }),
          ...(project.fields.imageUrl && { imageUrl: project.fields.imageUrl }),
          ...(project.fields.bonusText && {
            bonusText: project.fields.bonusText,
          }),
          ...(project.fields.isRed === true && { color: "red" as const }),
          ...(project.fields.year && { year: project.fields.year }),
        }))
        .sort((a: PortfolioProject, b: PortfolioProject) => a.ch - b.ch);

      return transformedAndSorted;
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      // Return empty array as fallback
      return [];
    }
  };

  const projects = await FetchPortfolio();

  return (
    <div className="min-h-screen container mx-auto">
      <main className="bg-gradient-to-b from-blue-900 to-blue-700">
        <TVGuideControl data={projects} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
