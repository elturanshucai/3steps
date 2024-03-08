import styles from './menuicon.module.css'

const MenuIcon = ({ scroll, setMenu }) => {
  return (
    <button className={styles.button} onClick={() => setMenu(prev => !prev)}>
      <span style={{ backgroundColor: scroll ? '#6F4DE9' : 'white' }}></span>
      <span style={{ backgroundColor: scroll ? '#6F4DE9' : 'white' }}></span>
      <span style={{ backgroundColor: scroll ? '#6F4DE9' : 'white' }}></span>
    </button>
  )
}

export default MenuIcon