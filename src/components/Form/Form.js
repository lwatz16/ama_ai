import { useState, useEffect } from 'react';
import './Form.css'

const Form = ({ addPrompt }) => {
  const [promptReq, setPromptReq] = useState({
    prompt: '',
    engine: '',
    temperature: 0.5,
    tokens: 6
  })

  const updatePromptInput = (e) => {
    setPromptReq(promptReq => ({
      ...promptReq, prompt: e.target.value
    }))
  }
  
  const updateEngine = (e) => {
    setPromptReq(promptReq => ({
      ...promptReq, engine: e.target.value
    }))
  }

  const updateTemperature = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)))
    setPromptReq(promptReq => ({
      ...promptReq, temperature: value
    }))
  }

  const updateTokens = (e) => {
    let { value: tokenValue, min, max } = e.target
    tokenValue = Math.max(Number(min), Math.min(Number(max), Number(tokenValue)))
    setPromptReq(promptReq => ({
      ...promptReq, tokens: tokenValue
    }))
  }

  const submitPrompt = (e) => {
    e.preventDefault()
    const newPrompt = { id: Date.now(), ...promptReq}
    console.log('new>>>>>>', newPrompt)
    addPrompt(newPrompt)
    clearInputs()
  }

  const clearInputs = () => {
    setPromptReq({ prompt: '', temperature: 0.5, tokens: 6 })
  }


  return(
    <div className='form'>
      <form onSubmit={submitPrompt}>
        <label htmlFor='prompt'>Prompt:</label>
        <input
          className='prompt-input'
          type='text'
          id='prompt'
          name='prompt'
          placeholder='Prompt'
          value={promptReq.prompt}
          onChange={(e) => updatePromptInput(e)}
        />
        <p>Choose an engine</p>
        <select
          name='engine'
          value={promptReq.engine}
          onChange={(e) => updateEngine(e)}
        >
          <option value='text-curie-001'>curie</option>
          <option value='text-davinci-002'>davinci</option>
          <option value='text-babbage-001'>babbage</option>
          <option value='text-ada-001'>ada</option>
        </select>
        <p>Choose a temperature</p>
        <input
          className='temperature-input'
          type='number'
          max='1'
          min='0'
          step="0.01"
          name='temperature'
          placeholder='0.4'
          value={promptReq.temperature}
          onChange={(e) => updateTemperature(e)}
        />
        <p>Choose max tokens</p>
        <input
          className='tokens-input'
          type='number'
          max='140'
          min='1'
          name='tokens'
          placeholder='64'
          value={promptReq.tokens}
          onChange={(e) => updateTokens(e)}
        />
        <button>Enter</button>
      </form>
    </div>
  )
}

export default Form;