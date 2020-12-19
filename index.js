document.addEventListener('DOMContentLoaded', e => {
  const api_url = 'https://api.wheretheiss.at/v1/satellites'
  let sat_id = 0

  const renderNewGame = () => {
    gameDuration = 15
    const header = document.getElementById('page-header')
    const title = document.createElement('h2')
    title.textContent = "New Game"
    const form = document.createElement('form')
    form.innerHTML = `
     <input type="text" id="username" name="username" placeholder = "Type Username"><br>
     <button class = "play-button"type="submit" value="Play">🎵</button>
     `
    header.append(title, form)
    form.addEventListener('submit', e => {
      e.preventDefault()
      userName = e.target.username.value
      createUser(username)
      const timerTable = document.getElementById('timers')

      // renderQuestion()
      chooseGenre()
      timerTable.style.display = 'inline'

    })

  }
  renderNewGame()

  const fetchApi = () => {
      fetch(api_url)
      .then(r => r.json())
      .then(data =>{
          sat_id = data
          logID(sat_id)
        }) 
      
    }


    const logID = (id) => {
        console.log("Satelite ID is:", id[0].id)
    }

    fetchApi()

})