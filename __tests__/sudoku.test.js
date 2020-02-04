import { Board } from "./../src/sudoku.js";
import { Row } from "./../src/sudoku.js";
import { exportAllDeclaration } from "@babel/types";

describe('Sudoku', () => {
  test('should correctly create a board object with an empty rows array', () => {
    var board = new Board();
    expect(board.rows).toEqual([]);
  })
  test('should correctly create a row object with a values array of 9 empty strings', () => {
    var row1 = new Row();
    expect(row1.values).toEqual(["", "", "", "", "", "", "", "", ""]);
  })
  test('should add a new row to Board.rows array when the add.Row() method is called', () => {
    var board = new Board();
    var row = new Row();
    board.addRow(row);
    expect(board.rows[0]).toEqual(row);
  })
})