import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { ThemeProvider } from '@/utils'
import NoteContentInput from '.'

const makeSUT = async () => {
  const onEditingMock = jest.fn()

  const screen = render(
    <NoteContentInput
      ref={jest.fn()}
      onEditing={onEditingMock}
      testID="content"
    />,
    {
      wrapper: ThemeProvider,
    },
  )

  const container = screen.getByTestId('content-container')
  const input = screen.getByTestId('content-input')
  const markdownContainer = screen.getByTestId('content-markdown-container')
  const markdown = screen.getByTestId('content-markdown')

  return {
    SUT: screen,
    container,
    input,
    markdownContainer,
    markdown,
    onEditingMock,
  }
}

describe('NoteContentInput', () => {
  it('should renders correctly', async () => {
    const { input, markdownContainer, onEditingMock } = await makeSUT()

    expect(input).toHaveStyle({ display: 'none' })
    expect(markdownContainer).toHaveStyle({ display: 'flex' })
    expect(onEditingMock).toHaveBeenCalledWith(false)
  })

  it('should show input and hide markdown container when press on markdown', async () => {
    const { input, markdown, markdownContainer, onEditingMock } =
      await makeSUT()

    onEditingMock.mockClear()
    fireEvent.press(markdown)

    expect(input).toHaveStyle({ display: 'flex' })
    expect(markdownContainer).toHaveStyle({ display: 'none' })
    expect(onEditingMock).toHaveBeenCalledWith(true)
  })

  it('should show input and hide markdown container when press on container', async () => {
    const { container, input, markdownContainer, onEditingMock } =
      await makeSUT()

    onEditingMock.mockClear()
    fireEvent.press(container)

    expect(input).toHaveStyle({ display: 'flex' })
    expect(markdownContainer).toHaveStyle({ display: 'none' })
    expect(onEditingMock).toHaveBeenCalledWith(true)
  })

  it('should show input and hide markdown container on focus input', async () => {
    const { input, markdownContainer, onEditingMock } = await makeSUT()

    onEditingMock.mockClear()
    fireEvent(input, 'focus')

    expect(input).toHaveStyle({ display: 'flex' })
    expect(markdownContainer).toHaveStyle({ display: 'none' })
    expect(onEditingMock).toHaveBeenCalledWith(true)
  })

  it('should hide input and show markdown container when on blur input', async () => {
    const { input, markdown, markdownContainer, onEditingMock } =
      await makeSUT()

    // Hide markdown
    fireEvent.press(markdown)

    onEditingMock.mockClear()
    // Show markdown
    fireEvent(input, 'blur')

    expect(input).toHaveStyle({ display: 'none' })
    expect(markdownContainer).toHaveStyle({ display: 'flex' })
    expect(onEditingMock).toHaveBeenCalledWith(false)
  })
})
