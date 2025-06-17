export default function SectionTitle({ title }: { title: string }) {
  return (
    <p className="text-3xl font-semibold mb-6 border-b-4 border-blue-500 inline-block">
      {title}
    </p>
  )
}