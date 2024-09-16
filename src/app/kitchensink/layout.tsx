import IconChevronLeft from "@/components/IconChevronLeft"
import Link from "next/link"

export default function KitchensinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav><Link href="/"><IconChevronLeft />Terug</Link></nav>
      <main className="utrecht-document">
        {children}
      </main>
    </section>
  )
}