
describe('Todoフィルター機能', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('完了のみフィルターが機能する', () => {
    const taskName = `完了タスク-${Date.now()}`
    cy.get('input[placeholder="タスクを追加"]').type(taskName)
    cy.get('[data-test="add-task"]').click()

    cy.contains(taskName).find('button').contains('未完了').click()
    cy.contains('完了のみ').click()
    cy.contains(taskName).should('exist')
  })
})
