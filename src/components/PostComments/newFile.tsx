import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar novo comentário', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('text-coment'), {
            target: {
                value: 'Bélissimo'
            }
        });
        fireEvent.change(screen.getByTestId('btn-adicionar'));
        expect(screen.getByText('Bélissimo')).toBeInTheDocument();
    });
    test('Deve ter 2 comentários', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('text-coment'), {
            target: {
                value: 'Carona?'
            }
        });
        fireEvent.change(screen.getByTestId('btn-adicionar'));
        expect(screen.getByText('Carona?')).toBeInTheDocument();
    });
});
