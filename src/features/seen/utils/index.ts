const formatTitleAndSubtitle = (seenCount: number) => {
  const subtitle = `You´ve discovered ${seenCount} Pokémon so far! Keep exploring to catch ‘em all.`
  const title = 'Your Seen Pokémon'
  return { title, subtitle }
}

export { formatTitleAndSubtitle }
