
const url = 'https://type.fit/api/quotes'

const quotes = []

const container = document.querySelector('.container')
const genrateQuote = document.querySelector('.submit')

genrateQuote.addEventListener('click', async function(){
    const response = await fetch(url)
    const data = await response.json()
    quotes.push(...data)

    randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    
    const div = document.querySelector('div')
    div.className = 'quote-row'
    div.innerHTML = ''

    const quoteText = document.createElement('p')
    quoteText.className = 'quoteTag'
    quoteText.innerText = randomQuote.text

    const author = document.createElement('p')
    author.className = 'authorTag'
    author.innerText = randomQuote.author
    container.append(quoteText,author)

    
})
