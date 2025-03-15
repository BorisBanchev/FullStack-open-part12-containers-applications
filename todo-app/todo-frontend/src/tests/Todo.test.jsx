import { render, screen } from '@testing-library/react'
import Todo from '../Todo/Todo'

describe('Todo Component', () => {
  const todo = {
    id: '1',
    text: 'Test Todo',
    done: false,
  }

  const mockDelete = vi.fn()
  const mockComplete = vi.fn()

  it('renders todo text correctly', () => {
    render(
      <Todo
        todo={todo}
        onClickDelete={mockDelete}
        onClickComplete={mockComplete}
      />
    )
    expect(screen.getByText('Test Todo')).toBeInTheDocument()
  })
})
