import SectionTitle from "@/components/common/SectionTitle"
import ProjectCard from "@/components/projects/ProjectCard"
import { projectList } from "../data/data"

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <SectionTitle title="Projects" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            role={project.role}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}
