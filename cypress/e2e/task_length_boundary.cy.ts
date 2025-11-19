describe('Todoフィルター機能', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

it('0文字では追加できない', () => {
  cy.visit('http://localhost:5173')

  cy.get('input[placeholder="タスクを追加"]').clear
  cy.get('[data-test="add-task"]').click()

  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('空欄です')
  })
})

it('1文字なら追加できる', () => {
  cy.visit('http://localhost:5173')
  cy.get('input[placeholder="タスクを追加"]').clear().type('a')
  cy.get('[data-test="add-task"]').click()

  cy.contains('a').should('exist')
})

it('30文字なら追加できる', () => {
  cy.visit('http://localhost:5173')

  const text30 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

  cy.get('input[placeholder="タスクを追加"]').clear().type(text30)
  cy.get('[data-test="add-task"]').click()

  cy.contains(text30).should('exist')
})

it('31文字以上では追加できない', () => {
  cy.visit('http://localhost:5173')

  const text31 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

  cy.get('input[placeholder="タスクを追加"]').clear().type(text31)
  cy.get('[data-test="add-task"]').click()

  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('30文字以内で入力してください')
  })

  cy.contains(text31).should('not.exist')
})


})

