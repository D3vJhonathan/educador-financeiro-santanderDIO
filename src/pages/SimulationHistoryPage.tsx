import { ArrowRight, CalendarClock, Sparkles, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SimulationHeader } from '@/components/features/Simulation/SimulationHistory/SimulationHeader'
import type { SimulationRecord } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulations'

function formatDate(date?: string) {
  if (!date) {
    return 'Data não informada'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
  }).format(new Date(date))
}

export function SimulationHistoryPage() {
  const navigate = useNavigate()
  const { getSimulations, deleteSimulation } = useSimulationStorage()
  const [simulations, setSimulations] = useState<SimulationRecord[]>(() =>
    getSimulations().reverse(),
  )

  const handleDelete = (id: string) => {
    deleteSimulation(id)
    setSimulations((current) =>
      current.filter((simulation) => simulation.id !== id),
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <SimulationHeader />
      {simulations.length === 0 ? (
        <div className="bg-card mt-8 rounded-2xl p-8 text-center shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
          <p className="text-lg font-semibold">Nenhuma simulação encontrada</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Suas simulações salvas aparecerão aqui.
          </p>
          <button
            type="button"
            className="bg-primary text-primary-foreground mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            onClick={() => void navigate('/')}
          >
            Criar simulação
            <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {simulations.map((simulation) => (
            <article
              key={simulation.id}
              className="bg-card rounded-2xl p-5 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {simulation.goalName}
                  </h2>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-sm">
                    <CalendarClock size={15} />
                    {formatDate(simulation.createdAt)}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Excluir simulação de ${simulation.goalName}`}
                  className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer rounded-lg p-2 transition-colors"
                  onClick={() => handleDelete(simulation.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="border-border mt-5 grid grid-cols-2 gap-4 border-t pt-4 sm:grid-cols-3">
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Meta
                  </p>
                  <p className="mt-1 font-semibold">
                    R$ {simulation.goalAmount}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Prazo
                  </p>
                  <p className="mt-1 font-semibold">
                    {simulation.goalDeadline} meses
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    Economia mensal
                  </p>
                  <p className="mt-1 font-semibold">
                    R${' '}
                    {calcMonthlySavings(simulation).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                  <Sparkles size={16} className="text-primary" />
                  {simulation.insight ? 'Insight gerado' : 'Insight pendente'}
                </span>
                <button
                  type="button"
                  className="text-primary inline-flex cursor-pointer items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                  onClick={() => void navigate(`/resultado/${simulation.id}`)}
                >
                  Ver resultado
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
