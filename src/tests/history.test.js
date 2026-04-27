import { expect, test } from 'vitest';
import { addToHistory, clearHistory } from '../history';

test('gérer l\'historique', () => {
    let history = [];
    history = addToHistory(history, "2+2=4");
    expect(history).toEqual(["2+2=4"]); // Ajouter 
    expect(clearHistory()).toEqual([]); // Effacer 
});