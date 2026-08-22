import { PiggyBank } from 'lucide-react'

import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={3} />
      <FormStep
        icon={PiggyBank}
        title="Renda Mensal Bruta"
        question="Quanto é depositado na sua conta todo mês (soma de todas as fontes)?"
        inputProps={{
          type: 'text',
          placeholder: 'Ex: 2.500,00',
          prefix: 'R$',
        }}
      />
    </>
  )
}
