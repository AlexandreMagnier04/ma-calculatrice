import { useState } from "react";
import { calculate } from "./calculator";
import { addToHistory, clearHistory } from "./history";

function App() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState([]);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  // Gère la saisie des chiffres
  const inputDigit = (digit) => {
    if (waitingForNewValue) {
      setDisplay(String(digit));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  // Gère le clic sur +, -, *
  const handleOperator = (nextOperator) => {
    if (prevValue === null) {
      setPrevValue(display);
    } else if (operator && !waitingForNewValue) {
      try {
        const result = calculate(prevValue, display, operator);
        setDisplay(String(result));
        setPrevValue(String(result));
        setHistory(
          addToHistory(
            history,
            `${prevValue} ${operator} ${display} = ${result}`,
          ),
        );
      } catch (err) {
        setDisplay("Erreur");
      }
    }
    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  // Gère le clic sur =
  const handleEqual = () => {
    if (!operator || prevValue === null) return;
    try {
      const result = calculate(prevValue, display, operator);
      setDisplay(String(result));
      setHistory(
        addToHistory(
          history,
          `${prevValue} ${operator} ${display} = ${result}`,
        ),
      );
      setPrevValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    } catch (err) {
      setDisplay("Erreur");
    }
  };

  // Remet la calculatrice à zéro
  const clearCalc = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        {/* Écran de la calculatrice */}
        <div data-testid="display" style={styles.display}>
          {display}
        </div>

        {/* Pavé numérique */}
        <div style={styles.keypad}>
          <button style={styles.btnAction} onClick={clearCalc}>
            C
          </button>
          <button
            style={styles.btnAction}
            onClick={() => setHistory(clearHistory())}
          >
            🗑️ Hist.
          </button>
          <button
            style={styles.btnOperator}
            onClick={() => handleOperator("*")}
          >
            *
          </button>

          <button style={styles.btn} onClick={() => inputDigit(7)}>
            7
          </button>
          <button style={styles.btn} onClick={() => inputDigit(8)}>
            8
          </button>
          <button style={styles.btn} onClick={() => inputDigit(9)}>
            9
          </button>
          <button
            style={styles.btnOperator}
            onClick={() => handleOperator("-")}
          >
            -
          </button>

          <button style={styles.btn} onClick={() => inputDigit(4)}>
            4
          </button>
          <button style={styles.btn} onClick={() => inputDigit(5)}>
            5
          </button>
          <button style={styles.btn} onClick={() => inputDigit(6)}>
            6
          </button>
          <button
            style={styles.btnOperator}
            onClick={() => handleOperator("+")}
          >
            +
          </button>

          <button style={styles.btn} onClick={() => inputDigit(1)}>
            1
          </button>
          <button style={styles.btn} onClick={() => inputDigit(2)}>
            2
          </button>
          <button style={styles.btn} onClick={() => inputDigit(3)}>
            3
          </button>
          <button style={styles.btnEqual} onClick={handleEqual}>
            =
          </button>

          <button
            style={{ ...styles.btn, gridColumn: "span 3" }}
            onClick={() => inputDigit(0)}
          >
            0
          </button>
        </div>
      </div>

      {/* Section Historique */}
      <div style={styles.historyPanel}>
        <h2>Historique</h2>
        {history.length === 0 ? (
          <p>Aucun calcul précédent.</p>
        ) : (
          <ul style={styles.historyList}>
            {history.map((item, index) => (
              <li key={index} style={styles.historyItem}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Un peu de CSS intégré pour avoir un vrai look de calculatrice sans créer de fichier supplémentaire
const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    marginTop: "3rem",
    fontFamily: "sans-serif",
  },
  calculator: {
    background: "#222",
    padding: "1rem",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  display: {
    background: "#a7af7c",
    padding: "1rem",
    fontSize: "2rem",
    textAlign: "right",
    borderRadius: "5px",
    marginBottom: "1rem",
    color: "#111",
    minHeight: "40px",
    overflow: "hidden",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  btn: {
    padding: "15px",
    fontSize: "1.2rem",
    cursor: "pointer",
    background: "#e0e0e0",
    border: "none",
    borderRadius: "5px",
  },
  btnOperator: {
    padding: "15px",
    fontSize: "1.2rem",
    cursor: "pointer",
    background: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  btnAction: {
    padding: "15px",
    fontSize: "1rem",
    cursor: "pointer",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    gridColumn: "span 2",
  },
  btnEqual: {
    padding: "15px",
    fontSize: "1.2rem",
    cursor: "pointer",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  historyPanel: {
    width: "250px",
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  historyList: { listStyle: "none", padding: 0, margin: 0 },
  historyItem: {
    padding: "8px 0",
    borderBottom: "1px solid #eee",
    fontSize: "0.9rem",
  },
};

export default App;
