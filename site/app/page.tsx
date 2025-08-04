import ProjectCard from '../components/ProjectCard'

export const metadata = {
  title: 'Adam Makhyoun Portfolio',
  description: 'Mobile Developer specializing in React Native & Expo',
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-6xl">Adam Makhyoun</h1>
        <h2 className="text-2xl text-gray-500">Cross-Platform Mobile App Developer</h2>
        <p className="text-sm text-gray-400 mt-4">Scroll to see my work</p>
      </section>

      {/* Projects Section */}
      <section className="px-6">
        <h2 className="text-3xl mb-8">Projects</h2>

        <ProjectCard 
          title="Flipping 99" 
          description="Flashcard app to memorize the 99 Names of Allah." 
          tech="React Native, Expo, AsyncStorage"
          link="https://github.com/boxingdaddev/Flipping99-Mobile-APP"
          video="/images/flipping99-demo.mp4" // replace with GIF/Video later
          thumbnail="/images/flipping99-placeholder.png"
        />

        <ProjectCard 
          title="AI Flashcards" 
          description="AI-powered flashcard generator and study tool. Includes planned real-time chat feature." 
          tech="React Native, Expo, OpenAI API"
          link="https://github.com/ai-flashcards"
          video="/images/aiflashcards-demo.mp4" // replace with GIF/Video later
          thumbnail="/images/aiflashcards-placeholder.png"
        />
      </section>

      {/* Skills Section */}
      <section className="px-6 pt-16">
        <h2 className="text-3xl mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'API Integration', 'Firebase/Supabase (Planned)'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pt-16 mb-16">
        <h2 className="text-3xl mb-4">Contact</h2>
        <p>Email: <a href="mailto:adamscope@gmail.com" className="text-blue-500 underline">adamscope@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/boxingdaddev" target="_blank" className="text-blue-500 underline">github.com/boxingdaddev</a></p>
      </section>
    </div>
  )
}
