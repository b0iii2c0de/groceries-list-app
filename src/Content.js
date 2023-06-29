import InputList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main>
      {items.length ? (
        <InputList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />  
      ) : (
        <p style={{  marginTop: "2rem" }}>List is empty!</p>
      )}
    </main>
  )
}

export default Content