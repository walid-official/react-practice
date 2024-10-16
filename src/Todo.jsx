// export default function Todo({task}){ // why it doesn't work without destructuring
//     return (
//         <div className="">
//             <li>Item {task}</li>
//         </div>
//     )
// }

// export default function Todo({task,isDone}){ // Conditional Rendering Option-1
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }else{
//         return <li>Work On : {task}</li>
//     }
// }

// export default function Todo({task,isDone}){ // Conditional Rendering Option-2
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//         return <li>Work On : {task}</li>
//     
// }

// export default function Todo({task,isDone}){ // Conditional Rendering Option-3
//  return(
//     <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//  )
// }


// export default function Todo({task,isDone}){ // Conditional Rendering Option-4
//     return(
//        <li>{task} {isDone  && ': Done'}</li>
//     )
//    }



// export default function Todo({task,isDone}){ // Conditional Rendering Option-5
//     return(
//        <li>{task} {isDone  || ': Do it'}</li>
//     )
// }


export default function Todo({task,isDone}){ // Conditional Rendering Option-1
    let storeItem;
    if(isDone){
        storeItem = <li>Finished : {task}</li>
    }else{
        storeItem = <li>Work On : {task}</li>
    }
    return storeItem;
}