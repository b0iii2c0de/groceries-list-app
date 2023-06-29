
const Footer = ({ length }) => {
  // const today = new Date();

  return (
    <footer>
      <p>{length} List {length === 1 ? " item" : "items"}</p>
      {/* <p>c0de b0iii &copy; {today.getUTCFullYear()}</p> */}
    </footer>
  ) 
}

export default Footer
