import gold from '../../assets/medal_gold.png'
import silver from '../../assets/medal_silver.png'
import cooper from '../../assets/medal_cooper.png'
import Image from 'next/image'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray300 leading-none">
            <span>1 - </span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={gold} alt="gold" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray300 leading-none">
            <span>2 - </span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={silver} alt="gold" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray300 leading-none">
            <span>3 - </span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={cooper} alt="gold" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
