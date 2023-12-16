import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { useRef, useEffect } from 'react'

export function Home() {
  const taskInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const currentTaskInputRef = taskInputRef.current
    function handleTaskInputChange() {
      const isTaskInputFilled = taskInputRef.current?.value !== ''
      const startCountdownButton = document.getElementById(
        'start-countdown-button',
      ) as HTMLButtonElement

      if (startCountdownButton) {
        startCountdownButton.disabled = !isTaskInputFilled
      }
    }

    if (currentTaskInputRef) {
      currentTaskInputRef.addEventListener('input', handleTaskInputChange)
    }

    return () => {
      if (currentTaskInputRef) {
        currentTaskInputRef.removeEventListener('input', handleTaskInputChange)
      }
    }
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            name="task"
            list="task-suggestions"
            placeholder="De um nome para o seu projeto"
            ref={taskInputRef}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <div>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </div>
        </CountdownContainer>

        <StartCountdownButton id="start-countdown-button" type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
