import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooper from '../../../assets/medal_cooper.png'
import gold from '../../../assets/medal_gold.png'
import silver from '../../../assets/medal_silver.png'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray300 leading-none">
                <span>{rankingPosition} - </span> | {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && <Image src={gold} alt="gold" className="absolute top-0 right-8" />}
              {rankingPosition === 2 && <Image src={silver} alt="gold" className="absolute top-0 right-8" />}
              {rankingPosition === 3 && <Image src={cooper} alt="gold" className="absolute top-0 right-8" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
