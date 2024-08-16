import './App.css'
import jenna from './assets/images/jenna';

function App() {
  const handleClick = () => {
    Notification.requestPermission().then(permission => {
      console.log("permission:", permission);

      if (permission === 'granted') {
        const notification = new Notification('Happy Birthday!', {
          body: 'This is a notification!',
          icon: jenna,
          silent: false
        })

        notification.addEventListener("error", (e) => {
          console.log('there was an error:', e);
        })
      }
    })
  }

  return (
    <button
      onClick={handleClick}>
      Click me
    </button>
  )
}

export default App
