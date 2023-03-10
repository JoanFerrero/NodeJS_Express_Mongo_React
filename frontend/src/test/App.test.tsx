import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { ButtonWrapper, Counter, APIComponent, useCounter } from '../components/RefactorPage';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('handles onClick', () => {
  const onClick = jest.fn()
  render(<ButtonWrapper onClick={onClick} title='Add Item'/>)
  const buttonElement = screen.getByText("Add Item")
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
}) 

test('handles onClick counter', () => {
  render(<Counter />)
  const divElement = screen.getByRole("contentinfo")
  const buttonElement = screen.getByText("Add One")
  fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent("Count is 3")
})

test('render ProductCard', () => {
  render (
    <Provider store={store}>
      <ProductCard Name='Rings' _id='233' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' picturePath='Anillas.jpg' price={50} />
    </Provider>
  )

  const buttonEkement = screen.getByText("no")
  expect(buttonEkement).toBeInTheDocument()
})

test('gets the data', async () => {
  render(<APIComponent />)

  //const out = await waitFor(() => screen.getByRole("contentinfo"));

  //expect(out).toHaveTextContent("Name is Jose")
})

test('hook, should increment', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})

test('productCard test', () => {
  render(
    <Provider store={store}>
      <ProductCard Name='Joan' _id='Pedro' description='calbo' picturePath='si' price={10} />
    </Provider>
  )

  const linkEkement = screen.getByText("Joan")
  expect(linkEkement).toBeInTheDocument()
})

// test('render content', () => {
//   render(<UserImage user="pepe" image="camion" />)
//   //screen.debug()
//   screen.getByText("pepe")
// })

// test('render example', () => {
//   const mockHandler = jest.fn()

//   render(<RefactorPage toggleImportant={mockHandler}/>)

//   const button  = screen.getByText("make not important")
//   fireEvent.click(button)
//   fireEvent.click(button)
//   fireEvent.click(button)

//   expect(mockHandler.mock.calls).toHaveLength(1)
// })