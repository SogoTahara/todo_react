describe('Weatherページ', () => {
  it('ナビゲーションから遷移できる', () => {
    cy.visit('http://localhost:5173')
    cy.contains('天気').click()
    cy.url().should('include', '/weather')
    cy.contains('今日の天気').should('exist')
  })
})

