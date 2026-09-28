export const heroVisaStyles = {
  stage: 'relative mx-auto w-full max-w-[400px] [perspective:1600px] lg:ms-auto lg:me-0',
  deck: 'relative aspect-[86/54] w-full',
  rear: 'pointer-events-none absolute inset-0 origin-[80%_80%] scale-[0.92] [transform:rotate(-11deg)_translate(-10%,8%)]',
  front: 'absolute inset-0 origin-center',
  glow: 'pointer-events-none absolute -inset-8 rounded-[2rem] bg-ink/25',
} as const
