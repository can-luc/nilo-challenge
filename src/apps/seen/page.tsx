import Hero from '../../components/shared/hero/hero'
import Card from '../../components/shared/card/ui/card'
import { Button } from '../../components/ui/button'
import BackButton from 'src/features/seen/ui/back-button'
import EmptyState from '../../components/error-state'

export default function SeenPage() {
  const contextPokemons = [{ name: 'charmander' }] // Replace with actual context or state management to get seen Pokémon
  const countPokemons = 0 //contextPokemons.length;
  const title = 'Your Seen Pokémon'
  const subtitle = `You´ve discovered ${countPokemons} Pokémon so far! Keep exploring to catch ‘em all.`
  if (countPokemons === 0) {
    return (
      <main className="mt-4 min-h-screen items-center rounded-xl bg-gradient-to-r from-[#E3E9F1] to-slate-100 pt-24 shadow-2xl">
        <EmptyState />
      </main>
    )
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center space-y-2 rounded-xl bg-gradient-to-r from-[#E3E9F1] to-slate-100 p-4 pt-24 shadow-2xl">
      <BackButton />
      <Hero title={title} subtitle={subtitle} />
      <span className="font-poppins text-xs font-normal text-[#6B7280]">
        Sorted by most recently seen
      </span>
      <Button color="clear" size="sm">
        Clear All Seen Pokémon
      </Button>

      <div className="sm:grid-cols-2 xl:grid-cols-3 grid w-full grid-cols-1 gap-4">
        <Card />
      </div>
    </main>
  )
}
