

function List(props) {

    const category = props.category
    const itemList = props.items;


    //teams.sort((a,b) => b.name.localeCompare(a.name));
    //teams.sort((a,b) => a.inception - b.inception)

    //const beforeNineteen = teams.filter(team => team.inception < 1900);


    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.inception}</b></li>);
   
   return(
   <>
   <h3 className="list-category">{category}</h3>
   <ol className="list-items">{listItems}</ol>
   </>);
}    
 
export default List