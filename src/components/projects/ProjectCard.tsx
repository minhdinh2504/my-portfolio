import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  role: string
  technologies: string
  description: string
  link?: string
}

export default function ProjectCard({ title, role, technologies, description, link }: ProjectCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:no-underline"
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    )

  return (
    <Wrapper>
      <Card className="min-h-[200px] h-full flex flex-col justify-between hover:shadow-lg hover:bg-muted cursor-pointer transition">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground pb-2">{role}</p>
          <p className="text-muted-foreground pb-2">{technologies}</p>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Wrapper>
  )
}
