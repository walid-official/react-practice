export default function Singer({users}){
    const {name,age} = users;
    console.log(users);
    return(
        <>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
        
        </>
    )
}