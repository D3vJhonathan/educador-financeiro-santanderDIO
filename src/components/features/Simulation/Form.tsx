import { PiggyBank } from 'lucide-react'

import { simulationFormSteps } from '@/data/simulation'

import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  const currentStep = simulationFormSteps[0]

  return (
    <>
      <StepProgress currentStep={1} totalSteps={3} />
      <FormStep key={currentStep.id} {...currentStep} />
    </>
  )
}
