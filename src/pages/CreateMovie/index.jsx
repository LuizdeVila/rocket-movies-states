import { FiArrowLeft } from 'react-icons/fi'
import { Container, New, Data, Confirmations } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { useState } from 'react'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  const [tag, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])

    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(link => link !== deleted))
  }

  async function handleNewNote() {
    if (!title || !rating) {
      return alert('Você precisa preencher os campos de titulo e nota!')
    }

    if(newTag) {
      return alert("Você precisa adicionar a tag antes de salvar o filme!")
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags: tag
    })

    alert('Filme cadastrado com sucesso!')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <New>
        <Link to="/"><FiArrowLeft /> voltar</Link>

        <h1>Novo filme</h1>

        <Data>
          <Input
            placeholder="Título"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            placeholder="Sua nota(de 0 a 5)"
            type="number"
            onChange={e => setRating(e.target.value)}
          />
        </Data>

        <Textarea
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

        <h4>Marcadores</h4>

        <div className='BlackBox'>
          <NoteItem
            isNew placeholder="Nova tag"
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />

          {tag.map((link, index) => (
            <NoteItem
              key={String(index)}
              value={link}
              onClick={() => handleRemoveTag(link)}
            />
          ))}
        </div>

        <Confirmations>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" onClick={handleNewNote}/>
        </Confirmations>

      </New>
    </Container>
  )
}