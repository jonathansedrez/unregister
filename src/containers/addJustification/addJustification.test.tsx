import { render, fireEvent, act } from '@testing-library/react';
import { AddJustification } from './addJustification.container';

describe('[containers] AddJustification', () => {
  it('Should disable button when input is empty', () => {
    const { getByRole } = render(<AddJustification />);
    const button = getByRole('button');

    expect(button.getAttribute('disabled')).toBe('');
  });

  it('Should abble button when input is filled', async () => {
    const { getByTestId, getByRole } = render(<AddJustification />);
    const input = getByTestId('justification-input');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Foo bar' } });
    });

    const button = getByRole('button');
    expect(button.getAttribute('disabled')).toBe(null);
  });

  it('Should counter input length', async () => {
    const { getByTestId } = render(<AddJustification />);
    let counter = getByTestId('input-counter');

    expect(counter.textContent).toBe('0/150');

    const input = getByTestId('justification-input');
    await act(async () => {
      fireEvent.change(input, { target: { value: '123' } });
    });
    counter = getByTestId('input-counter');
    expect(counter.textContent).toBe('3/150');
  });
});
