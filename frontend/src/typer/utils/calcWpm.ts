export function calcWpm (wordsCompleted: number, elapsedMs: number) : number {
  if(!wordsCompleted || !elapsedMs) return 0
  const elapsedMin = (elapsedMs) / 60000
  return Math.round((wordsCompleted / elapsedMin))
}