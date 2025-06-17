export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS & shadcn/ui</p>
      </div>
    </footer>
  )
}