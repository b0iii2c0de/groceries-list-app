
const Footer = () => {
  const today = new Date();
  
  return (
    <footer>
      <p>c0de b0iii &copy; {today.getUTCFullYear()}</p>
    </footer>
  ) 
}

export default Footer