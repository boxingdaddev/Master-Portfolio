import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
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
    </div>
  )
}
