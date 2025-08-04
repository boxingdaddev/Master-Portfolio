import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Mobile Developer Portfolio</h2>
        <p>Cross-platform mobile developer specializing in React Native and Expo.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ProjectCard 
          title="Flipping 99" 
          description="Flashcard app to memorize the 99 Names of Allah." 
          tech="React Native, Expo, AsyncStorage"
          link="https://github.com/boxingdaddev/Flipping99-Mobile-APP"
        />
        <ProjectCard 
          title="AI Flashcards" 
          description="AI-powered flashcard generator and study tool." 
          tech="React Native, Expo, OpenAI API"
          link="https://github.com/ai-flashcards"
        />
      </div>
    </section>
  )
}
