import TVGuideControl from "./fonts/generic/components/tvguidecontrol";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto">
      <main className="bg-gradient-to-b from-blue-900 to-blue-700">
        <TVGuideControl />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
